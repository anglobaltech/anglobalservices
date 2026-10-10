const { GoogleGenerativeAI } = require('@google/generative-ai');

async function test() {
  const apiKey = process.env.GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  for (const m of data.models) {
    if (m.name.includes("embedding") || m.name.includes("aqa")) continue;
    
    console.log("Testing:", m.name);
    try {
      const modelName = m.name.replace('models/', '');
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("Hello");
      console.log("SUCCESS:", modelName, "->", result.response.text());
      return; // Stop on first success
    } catch (e) {
      console.log("FAILED:", m.name, "->", e.message.substring(0, 100));
    }
  }
}
test();
