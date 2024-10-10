
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
}  from "@google/generative-ai"

// import { response } from "express";

  const MODEL_NAME = "vitR.AI";
  const API_KEY = "AIzaSyA5IqznieTbkdlPMDpnif08_cpeY34LqLY"
  
  // const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(API_KEY);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function runChat(prompt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    // return response.text();
   }
  
   export default runChat;