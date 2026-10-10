import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { knowledgeBase } from '@/utils/knowledge_base';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { history, message } = body;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-flash-lite-latest",
      systemInstruction: knowledgeBase,
      generationConfig: {
        temperature: 0,
        maxOutputTokens: 250,
      }
    });

    const chat = model.startChat({
      history: history || [],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    let text = response.text();

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
