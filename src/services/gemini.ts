


import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

export const getGeminiResponse = async (prompt: string) => {
  if (!API_KEY) {
    return "API Key not configured. Please add your Gemini API key to use this feature.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are Sustho AI Assistant, a friendly medical expert specializing in healthcare for Bangladesh. 
        Your goal is to explain the benefits of Sustho AI Card and answer general health queries. 
        Keep responses brief, polite, and helpful. Always include a disclaimer that you are an AI and not a substitute for a human doctor. 
        Respond in a mix of Bengali and English (Banglish) if suitable, or pure Bengali if the user asks in Bengali.`,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error communicating with Sustho AI. Please try again later.";
  }
};
