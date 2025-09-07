// config/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyC1sila0DAILu6vGLw8YWUlGdec5K9JDcE"; // Replace with actual Gemini API key

const genAI = new GoogleGenerativeAI(API_KEY);

async function runChat(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // or 2.5 if supported

  const result = await model.generateContent([prompt]); // ✅ Just pass string inside array
  const response = await result.response;
  return response.text();
}

export default runChat;
