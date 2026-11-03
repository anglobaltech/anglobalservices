import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { knowledgeBase } from '@/utils/knowledge_base';
import { db } from '@/src/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';

// In-memory cache for live Firestore ISI products (5-minute TTL)
let cachedProducts = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 5 * 60 * 1000;

async function getLiveIsiProducts() {
  const now = Date.now();
  if (cachedProducts && now - lastCacheTime < CACHE_TTL_MS) {
    return cachedProducts;
  }
  try {
    const snap = await getDocs(collection(db, "isi_products"));
    cachedProducts = snap.docs.map(doc => {
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

function getApiKey() {
  const envVars = [
    process.env.GEMINI_API_KEY,
    process.env.GOOGLE_API_KEY,
    process.env.GOOGLE_GEMINI_API_KEY,
    process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    process.env.GEMINI_KEY,
  ];
  for (const v of envVars) {
    if (v && v.trim()) return v.trim();
  }

  // Fallback: Read directly from .env.local and .env on disk
  try {
    for (const fileName of ['.env.local', '.env']) {
      const envPath = path.join(process.cwd(), fileName);
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        const match = content.match(/^(?:GEMINI_API_KEY|GOOGLE_API_KEY|GOOGLE_GEMINI_API_KEY|NEXT_PUBLIC_GEMINI_API_KEY|GEMINI_KEY)\s*=\s*["']?([^"'\r\n#]+)["']?/im);
        if (match && match[1]) {
          return match[1].trim();
        }
      }
    }
  } catch (err) {
    console.error("Error reading .env fallback:", err);
  }
  return null;
}

export async function POST(req) {
  try {
    const apiKey = getApiKey();

    if (!apiKey) {
      console.error("Gemini API key is missing. Please define GEMINI_API_KEY in .env.local and save the file.");
      return NextResponse.json(
        { error: "Chat service is currently unavailable. Please ensure GEMINI_API_KEY is saved in .env.local." },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const body = await req.json();
    const { history, message } = body;

    // Fetch live products from Firestore (cached in-memory for speed)
    let dynamicContext = "";
    try {
      const liveProducts = await getLiveIsiProducts();
      const matchedProducts = findMatchingProducts(message, liveProducts);

      if (matchedProducts.length > 0) {
        dynamicContext = `\n\n=======================================================\nDYNAMICALLY MATCHED LIVE PRODUCT PAGES FROM DATABASE:\n=======================================================\nThe user's query specifically matches the following product page(s) from our live database. In your response, ALWAYS provide a dedicated markdown section (e.g., "### Relevant Standards & Guides") featuring these exact live links and Indian Standard numbers:\n${matchedProducts.map(p => `- ${p.title} (${p.isNumber || 'BIS Scheme'}): https://www.anglobalservices.com/isi-products/${p.slug}`).join('\n')}\nAlso include our primary BIS guide: https://www.anglobalservices.com/bis-isi-mark-certification\n`;
      } else {
        dynamicContext = `\n\n=======================================================\nPRODUCT FALLBACK REDIRECTION DIRECTIVE:\n=======================================================\nIf the user is inquiring about BIS ISI Mark Certification, standard compliance, or registration for ANY specific product where no dedicated individual product page was matched above, you MUST still provide an authoritative response and REDIRECT them to our primary certification service pages:\n- Primary Domestic BIS ISI Mark Certification: https://www.anglobalservices.com/bis-isi-mark-certification\n- For Foreign / Overseas Manufacturers: https://www.anglobalservices.com/foreign-manufacturers-certification-scheme-fmcs\n- For Electronic & IT Goods (CRS Scheme): https://www.anglobalservices.com/bis-crs-registration-electronic-products\nReassure the user that AN Global Services provides complete end-to-end turnkey consultancy for all 600+ mandatory BIS notified products under Indian Quality Control Orders (QCOs), and invite them to share their Name, Phone Number, Email, and Requirement for a customized consultation.\n`;
      }
    } catch (e) {
      console.error("Firestore product matching error:", e);
    }

    const candidateModels = [
      process.env.GEMINI_MODEL,
      "gemini-3.5-flash-lite",
      "gemini-flash-lite-latest",
      "gemini-3.5-flash",
      "gemini-3.8-flash",
      "gemini-flash-latest",
      "gemini-2.5-flash",
      "gemini-1.5-flash",
    ].filter(Boolean);

    let text = null;
    let lastError = null;

    for (const modelName of candidateModels) {
      try {
        const model = genAI.getGenerativeModel({ 
          model: modelName,
          systemInstruction: knowledgeBase + dynamicContext,
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 2500,
          }
        });

        const chat = model.startChat({
          history: history || [],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        text = response.text();
        if (text) break;
      } catch (err) {
        lastError = err;
        console.warn(`Model ${modelName} failed, attempting next model:`, err.message);
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
