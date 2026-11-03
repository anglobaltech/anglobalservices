import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { knowledgeBase } from '@/utils/knowledge_base';
import { db } from '@/src/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';

// In-memory cache for live Firestore ISI products (Stale-While-Revalidate pattern for ZERO latency)
let cachedProducts = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1-hour TTL

async function getLiveIsiProducts() {
  const now = Date.now();
  // If fresh cache, return immediately (0 ms)
  if (cachedProducts && now - lastCacheTime < CACHE_TTL_MS) {
    return cachedProducts;
  }

  // If stale cache exists, return stale immediately (0 ms) and revalidate in background
  if (cachedProducts) {
    getDocs(collection(db, "isi_products"))
      .then((snap) => {
        cachedProducts = snap.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || doc.id,
            slug: data.slug || doc.id,
            isNumber: data.dataTableIsNumber || "",
            productName: data.dataTableProductName || "",
            keywords: Array.isArray(data.seo?.keywords) ? data.seo.keywords : [],
          };
        });
        lastCacheTime = Date.now();
      })
      .catch((err) => console.error("Background product cache refresh error:", err?.message || err));

    return cachedProducts;
  }

  // Initial cold fetch
  try {
    const snap = await getDocs(collection(db, "isi_products"));
    cachedProducts = snap.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title || doc.id,
        slug: data.slug || doc.id,
        isNumber: data.dataTableIsNumber || "",
        productName: data.dataTableProductName || "",
        keywords: Array.isArray(data.seo?.keywords) ? data.seo.keywords : [],
      };
    });
    lastCacheTime = now;
    return cachedProducts;
  } catch (err) {
    console.error("Error fetching live isi_products for chatbot:", err?.message || err);
    return cachedProducts || [];
  }
}

// Background warm-up
try {
  getLiveIsiProducts().catch(() => {});
} catch (_) {}

function findMatchingProducts(userQuery, products) {
  if (!products || !products.length || !userQuery) return [];

  const rawQuery = userQuery.toLowerCase().trim();
  const words = rawQuery
    .replace(/[^\w\s-]/g, " ")
    .split(/\s+/)
    .filter(w => w.length >= 3);

  // Match 3 to 5 digit standard numbers (e.g. 1239, 3589, 4151)
  const numberMatches = rawQuery.match(/\b\d{3,5}\b/g) || [];

  const stopwords = new Set([
    "how", "get", "isi", "mark", "for", "the", "and", "can", "you", "tell",
    "what", "does", "have", "want", "need", "about", "product", "products",
    "certification", "certificate", "scheme", "with", "this", "from", "give"
  ]);

  const scored = [];

  for (const prod of products) {
    let score = 0;
    const titleLower = (prod.title || "").toLowerCase();
    const slugLower = (prod.slug || "").toLowerCase();
    const isNumLower = (prod.isNumber || "").toLowerCase();
    const prodNameLower = (prod.productName || "").toLowerCase();

    // Check standard numbers (e.g., "1239" matches IS 1239)
    for (const num of numberMatches) {
      if (isNumLower.includes(num)) score += 12;
      else if (titleLower.includes(num) || slugLower.includes(num)) score += 10;
    }

    // Direct multi-word phrase matching
    if (words.length >= 2) {
      const phrase = words.slice(0, 3).join(" ");
      if (titleLower.includes(phrase) || prodNameLower.includes(phrase)) {
        score += 8;
      }
    }

    // Tokenized matching
    for (const w of words) {
      if (stopwords.has(w)) continue;
      if (titleLower.includes(w)) score += 3;
      if (slugLower.includes(w)) score += 2;
      if (prodNameLower.includes(w)) score += 3;
      if (isNumLower.includes(w)) score += 6;
      if (prod.keywords.some(k => k.toLowerCase().includes(w))) score += 2;
    }

    if (score >= 3) {
      scored.push({ prod, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 4).map(s => s.prod);
}

// In-memory cache for API keys and preferred model (60-second TTL)
let cachedApiKeys = null;
let lastKeysReadTime = 0;
let cachedModelName = null;
let lastModelReadTime = 0;

function getApiKeys() {
  const now = Date.now();
  if (cachedApiKeys && cachedApiKeys.length > 0 && now - lastKeysReadTime < 60000) {
    return cachedApiKeys;
  }

  const keys = [];
  try {
    for (const fileName of ['.env.local', '.env']) {
      const envPath = path.join(process.cwd(), fileName);
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        const primaryMatch = content.match(/^(?:GEMINI_API_KEY|GOOGLE_API_KEY|GOOGLE_GEMINI_API_KEY|NEXT_PUBLIC_GEMINI_API_KEY|GEMINI_KEY)\s*=\s*["']?([^"'\r\n#]+)["']?/im);
        if (primaryMatch && primaryMatch[1]) {
          keys.push(primaryMatch[1].trim());
        }
        const backupMatch = content.match(/^(?:BACKUP_GEMINI_API_KEY|PREVIOUS_GEMINI_API_KEY)\s*=\s*["']?([^"'\r\n#]+)["']?/im);
        if (backupMatch && backupMatch[1]) {
          keys.push(backupMatch[1].trim());
        }
      }
    }
  } catch (err) {
    console.error("Error reading .env fallback:", err);
  }

  const envVars = [
    process.env.GEMINI_API_KEY,
    process.env.BACKUP_GEMINI_API_KEY,
    process.env.PREVIOUS_GEMINI_API_KEY,
    process.env.GOOGLE_API_KEY,
    process.env.GOOGLE_GEMINI_API_KEY,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    process.env.GEMINI_KEY,
  ];
  for (const v of envVars) {
    if (v && v.trim()) keys.push(v.trim());
  }

  cachedApiKeys = [...new Set(keys.filter(Boolean))];
  lastKeysReadTime = now;
  return cachedApiKeys;
}

function getPreferredModel() {
  const now = Date.now();
  if (cachedModelName && now - lastModelReadTime < 60000) {
    return cachedModelName;
  }

  try {
    for (const fileName of ['.env.local', '.env']) {
      const envPath = path.join(process.cwd(), fileName);
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        const match = content.match(/^GEMINI_MODEL\s*=\s*["']?([^"'\r\n#]+)["']?/im);
        if (match && match[1]) {
          cachedModelName = match[1].trim();
          lastModelReadTime = now;
          return cachedModelName;
        }
      }
    }
  } catch (err) {
    console.error("Error reading GEMINI_MODEL from .env:", err);
  }
  cachedModelName = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";
  lastModelReadTime = now;
  return cachedModelName;
}

// Cache the last working model name in-memory to guarantee instant, zero-retry responses
let lastWorkingModel = null;

export async function POST(req) {
  try {
    const body = await req.json();
    const { history, message } = body;
    const trimmedMsg = (message || "").trim();
    const lowerMsg = trimmedMsg.toLowerCase();

    // =========================================================================
    // INSTANT FAST-PATH 1: Closing & Gratitude Intent (< 5ms response)
    // Whenever user says "thank you", "thanks", "bye", "okay bye", "ok thanks"
    // =========================================================================
    const isClosingIntent = 
      /^(?:thank\s*you|thanks|thanks\s*a\s*lot|thank\s*u|thx|bye|goodbye|cya|see\s*you|take\s*care|ok\s*bye|okay\s*bye|ok\s*thanks|okay\s*thanks|alright\s*thanks|done|ok\s*done|okay\s*done)[.!]?$/i.test(trimmedMsg) ||
      /\b(?:thank\s*you\s*so\s*much|thanks\s*for\s*your\s*help|have\s*a\s*(?:good|great|nice)\s*day|bye\s*bye)\b/i.test(lowerMsg);

    if (isClosingIntent) {
      const closingReply = 
`You are most welcome! We are always glad to assist you.

If you ever need any further support with regulatory compliance (BIS/ISI, FMCS, CRS), certified laboratory equipment, food ingredients, or custom IT solutions, please feel free to reach out to our team at any time.

### AN Global Services Contact Details:
- **Phone:** +91 7782069184 / +91 9958820184
- **WhatsApp Support:** https://wa.me/917782069184
- **Email:** info@anglobalservices.com
- **Contact Us:** https://www.anglobalservices.com/contact-us
- **Corporate Office:** S-63, 7th Floor, Urbtech NPX, Sector-153, Noida, Uttar Pradesh - Pin 201310
- **Working Hours:** Monday to Saturday, 9:30 AM to 6:30 PM IST

Have a great day ahead!`;
      return NextResponse.json({ reply: closingReply });
    }

    // =========================================================================
    // INSTANT FAST-PATH 2: Simple Common Greetings (< 5ms response)
    // Whenever user begins with "hi", "hello", "hii", "hey"
    // =========================================================================
    const isSimpleGreeting = /^(?:hi|hello|hii|hiii|hey|heyy|good\s*(?:morning|afternoon|evening)|namaste|hola)[.!]?$/i.test(trimmedMsg);
    if (isSimpleGreeting && (!history || history.length <= 1)) {
      const greetingReply =
`Welcome to AN Global Services!

How can we assist you today? Whether you are looking for certified laboratory equipment, regulatory compliance & BIS/ISI certification, B2B food ingredients, or custom IT software solutions, please let us know your requirements.`;
      return NextResponse.json({ reply: greetingReply });
    }

    // =========================================================================
    // INSTANT FAST-PATH 3: Direct Contact & Location Queries (< 5ms response)
    // =========================================================================
    const isDirectContactInquiry = 
      /^(?:contact(?:\s*us)?|contact\s*details|phone|phone\s*number|mobile\s*number|call(?:\s*us)?|email(?:\s*id)?|whatsapp|office\s*address|location|address)[?.]?$/i.test(trimmedMsg) ||
      /(?:what\s+is\s+(?:your\s+)?|give\s+me\s+(?:your\s+)?|tell\s+me\s+(?:your\s+)?|share\s+(?:your\s+)?|how\s+to\s+contact|where\s+is\s+(?:your\s+)?)\b.*(?:phone|number|contact|email|address|location|office|whatsapp)/i.test(lowerMsg);

    if (isDirectContactInquiry) {
      const contactReply = 
`Here are the official contact details for AN Global Services:

- **Phone:** +91 7782069184 / +91 9958820184
- **WhatsApp Support:** https://wa.me/917782069184
- **Email:** info@anglobalservices.com
- **Contact Us Page:** https://www.anglobalservices.com/contact-us
- **Corporate Office:** S-63, 7th Floor, Urbtech NPX, Sector-153, Noida, Uttar Pradesh - Pin 201310
- **Working Hours:** Monday to Saturday, 9:30 AM to 6:30 PM IST

Please let us know how we can assist your project or requirement today!`;
      return NextResponse.json({ reply: contactReply });
    }

    // =========================================================================
    // COMPLEX / DOMAIN INQUIRIES: Ultra-Fast AI Processing Pipeline
    // =========================================================================
    const apiKeys = getApiKeys();

    if (!apiKeys || apiKeys.length === 0) {
      console.error("Gemini API key is missing. Please define GEMINI_API_KEY in .env.local and save the file.");
      return NextResponse.json(
        { error: "Chat service is currently unavailable. Please ensure GEMINI_API_KEY is saved in .env.local." },
        { status: 500 }
      );
    }

    // Fetch live products from Firestore (only append if there is an exact match to avoid prompt bloat)
    let dynamicContext = "";
    try {
      const liveProducts = await getLiveIsiProducts();
      const matchedProducts = findMatchingProducts(message, liveProducts);

      if (matchedProducts.length > 0) {
        dynamicContext = `\n\n=======================================================\nMATCHED PRODUCT PAGES FROM LIVE DATABASE:\n=======================================================\nFeature these exact links in your response:\n${matchedProducts.map(p => `- ${p.title} (${p.isNumber || 'BIS Scheme'}): https://www.anglobalservices.com/isi-products/${p.slug}`).join('\n')}\nPrimary BIS guide: https://www.anglobalservices.com/bis-isi-mark-certification\n`;
      }
    } catch (e) {
      console.error("Firestore product matching error:", e);
    }

    // Ultra-fast, currently supported Google Gemini models for lightning-quick replies
    const preferredModel = getPreferredModel();
    const candidateModels = [
      preferredModel,
      lastWorkingModel,
      "gemini-3.5-flash-lite",
      "gemini-flash-lite-latest",
      "gemini-3.6-flash",
      "gemini-3.5-flash",
      "gemini-3.8-flash",
      "gemini-flash-latest",
    ].filter(Boolean);

    const uniqueModels = [...new Set(candidateModels)];

    // Keep history concise (last 6 turns) to prevent latency buildup
    const trimmedHistory = Array.isArray(history) && history.length > 6 ? history.slice(-6) : (history || []);

    const speedDirective = `\n\nCRITICAL SPEED RULE: Deliver a crisp, direct, highly structured answer in under 100-130 words. Give key specifications and direct URLs immediately.`;

    let text = null;
    let lastError = null;

    // Iterate through API keys (primary then backup) and candidate models
    keyLoop: for (const key of apiKeys) {
      const genAI = new GoogleGenerativeAI(key);

      for (const modelName of uniqueModels) {
        try {
          const model = genAI.getGenerativeModel({ 
            model: modelName,
            systemInstruction: knowledgeBase + dynamicContext + speedDirective,
            generationConfig: {
              temperature: 0.1,
              maxOutputTokens: 500,
            }
          });

          const chat = model.startChat({
            history: trimmedHistory,
          });

          const result = await chat.sendMessage(message);
          const response = await result.response;
          text = response.text();
          if (text) {
            lastWorkingModel = modelName;
            break keyLoop;
          }
        } catch (err) {
          lastError = err;
          console.warn(`Model ${modelName} with key (${key.slice(0, 8)}...) failed, attempting next:`, err.message);
        }
      }
    }

    if (!text) {
      throw lastError || new Error("Failed to generate response from Gemini API.");
    }

    // Clean up any "Assistant:" prefixes the AI might accidentally generate due to prompt examples
    text = text.replace(/^(?:\*\*Assistant:\*\*|Assistant:|Bot:)\s*/i, "").trim();

    // Lead Generation Interception
    if (text.includes("LEAD_CONFIRMED")) {
      text = "Thank you! Your details have been successfully verified and sent to our team. We will contact you shortly.";
      
      try {
        // Find the bot's last confirmation message in the history
        const lastBotMessage = history.slice().reverse().find(m => m.role === "model" && m.parts[0].text.includes("Are you sure these details are correct?"));
        
        if (lastBotMessage) {
          const botText = lastBotMessage.parts[0].text;
          const nameMatch = botText.match(/Name:\s*(.+)/i);
          const phoneMatch = botText.match(/Phone:\s*(.+)/i);
          const emailMatch = botText.match(/Email:\s*(.+)/i);
          const enquiryMatch = botText.match(/Enquiry:\s*(.+)/i);

          const name = nameMatch ? nameMatch[1].trim() : "Unknown";
          const phone = phoneMatch ? phoneMatch[1].trim() : "Unknown";
          const email = emailMatch ? emailMatch[1].trim() : "Unknown";
          const enquiry = enquiryMatch ? enquiryMatch[1].trim() : "Unknown";

          // Send Email using Nodemailer
          const nodemailer = require("nodemailer");
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });

          await transporter.sendMail({
            from: `"Chatbot Assistant" <${process.env.EMAIL_USER}>`,
            to: [process.env.NOTIFY_EMAIL_1, process.env.NOTIFY_EMAIL_2].filter(Boolean),
            subject: `New Chatbot Lead - ${name}`,
            html: `
              <h2>New Lead from Chatbot</h2>
              <p><b>Name:</b> ${name}</p>
              <p><b>Phone:</b> ${phone}</p>
              <p><b>Email:</b> ${email}</p>
              <p><b>Enquiry:</b> ${enquiry}</p>
            `,
          });
          console.log("Chatbot Lead Email Sent!");
        }
      } catch (err) {
        console.error("Failed to send chatbot lead email:", err);
      }
    }

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Failed to fetch response." }, { status: 500 });
  }
}
