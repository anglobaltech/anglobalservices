import { NextResponse } from 'next/server';

// ============================================================================
// CHATBOT API ROUTE (TEMPORARILY DISABLED)
// The chatbot code is commented out below and will be deployed/enabled later.
// ============================================================================

export async function POST() {
  return NextResponse.json(
    { message: "Chatbot service is temporarily disabled and will be deployed later." },
    { status: 503 }
  );
}

// ----------------------------------------------------------------------------
// ORIGINAL CHATBOT IMPLEMENTATION (UNCOMMENT WHEN READY TO DEPLOY):
// ----------------------------------------------------------------------------
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { knowledgeBase } from '@/utils/knowledge_base';
// import fs from 'fs';
// import path from 'path';
// 
// function getApiKey() {
//   const envVars = [
//     process.env.GEMINI_API_KEY,
//     process.env.GOOGLE_API_KEY,
//     process.env.GOOGLE_GEMINI_API_KEY,
//     process.env.NEXT_PUBLIC_GEMINI_API_KEY,
//     process.env.GEMINI_KEY,
//   ];
//   for (const v of envVars) {
//     if (v && v.trim()) return v.trim();
//   }
// 
//   // Fallback: Read directly from .env.local and .env on disk
//   try {
//     for (const fileName of ['.env.local', '.env']) {
//       const envPath = path.join(process.cwd(), fileName);
//       if (fs.existsSync(envPath)) {
//         const content = fs.readFileSync(envPath, 'utf8');
//         const match = content.match(/^(?:GEMINI_API_KEY|GOOGLE_API_KEY|GOOGLE_GEMINI_API_KEY|NEXT_PUBLIC_GEMINI_API_KEY|GEMINI_KEY)\s*=\s*["']?([^"'\r\n#]+)["']?/im);
//         if (match && match[1]) {
//           return match[1].trim();
//         }
//       }
//     }
//   } catch (err) {
//     console.error("Error reading .env fallback:", err);
//   }
//   return null;
// }
// 
// export async function POST(req) {
//   try {
//     const apiKey = getApiKey();
// 
//     if (!apiKey) {
//       console.error("Gemini API key is missing. Please define GEMINI_API_KEY in .env.local and save the file.");
//       return NextResponse.json(
//         { error: "Chat service is currently unavailable. Please ensure GEMINI_API_KEY is saved in .env.local." },
//         { status: 500 }
//       );
//     }
// 
//     const genAI = new GoogleGenerativeAI(apiKey);
//     const body = await req.json();
//     const { history, message } = body;
// 
//     const candidateModels = [
//       process.env.GEMINI_MODEL,
//       "gemini-1.5-flash",
//       "gemini-flash-lite-latest",
//       "gemini-2.0-flash",
//       "gemini-1.5-pro",
//     ].filter(Boolean);
// 
//     let text = null;
//     let lastError = null;
// 
//     for (const modelName of candidateModels) {
//       try {
//         const model = genAI.getGenerativeModel({ 
//           model: modelName,
//           systemInstruction: knowledgeBase,
//           generationConfig: {
//             temperature: 0.2,
//             maxOutputTokens: 500,
//           }
//         });
// 
//         const chat = model.startChat({
//           history: history || [],
//         });
// 
//         const result = await chat.sendMessage(message);
//         const response = await result.response;
//         text = response.text();
//         if (text) break;
//       } catch (err) {
//         lastError = err;
//         console.warn(`Model ${modelName} failed, attempting next model:`, err.message);
//       }
//     }
// 
//     if (!text) {
//       throw lastError || new Error("Failed to generate response from Gemini API.");
//     }
// 
//     // Clean up any "Assistant:" prefixes the AI might accidentally generate due to prompt examples
//     text = text.replace(/^(?:\*\*Assistant:\*\*|Assistant:|Bot:)\s*/i, "").trim();
// 
//     // Lead Generation Interception
//     if (text.includes("LEAD_CONFIRMED")) {
//       text = "Thank you! Your details have been successfully verified and sent to our team. We will contact you shortly.";
//       
//       try {
//         // Find the bot's last confirmation message in the history
//         const lastBotMessage = history.slice().reverse().find(m => m.role === "model" && m.parts[0].text.includes("Are you sure these details are correct?"));
//         
//         if (lastBotMessage) {
//           const botText = lastBotMessage.parts[0].text;
//           const nameMatch = botText.match(/Name:\s*(.+)/i);
//           const phoneMatch = botText.match(/Phone:\s*(.+)/i);
//           const emailMatch = botText.match(/Email:\s*(.+)/i);
//           const enquiryMatch = botText.match(/Enquiry:\s*(.+)/i);
// 
//           const name = nameMatch ? nameMatch[1].trim() : "Unknown";
//           const phone = phoneMatch ? phoneMatch[1].trim() : "Unknown";
//           const email = emailMatch ? emailMatch[1].trim() : "Unknown";
//           const enquiry = enquiryMatch ? enquiryMatch[1].trim() : "Unknown";
// 
//           // Send Email using Nodemailer
//           const nodemailer = require("nodemailer");
//           const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//               user: process.env.EMAIL_USER,
//               pass: process.env.EMAIL_PASS,
//             },
//           });
// 
//           await transporter.sendMail({
//             from: `"Chatbot Assistant" <${process.env.EMAIL_USER}>`,
//             to: [process.env.NOTIFY_EMAIL_1, process.env.NOTIFY_EMAIL_2].filter(Boolean),
//             subject: `New Chatbot Lead - ${name}`,
//             html: `
//               <h2>New Lead from Chatbot</h2>
//               <p><b>Name:</b> ${name}</p>
//               <p><b>Phone:</b> ${phone}</p>
//               <p><b>Email:</b> ${email}</p>
//               <p><b>Enquiry:</b> ${enquiry}</p>
//             `,
//           });
//           console.log("Chatbot Lead Email Sent!");
//         }
//       } catch (err) {
//         console.error("Failed to send chatbot lead email:", err);
//       }
//     }
// 
//     return NextResponse.json({ reply: text });
//   } catch (error) {
//     console.error("Chat API Error:", error);
//     return NextResponse.json({ error: "Failed to fetch response." }, { status: 500 });
//   }
// }
