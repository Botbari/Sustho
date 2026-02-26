import OpenAI from "openai";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true, // Note: For production, use a backend proxy
});

export const getOpenAIResponse = async (prompt: string) => {
  if (!API_KEY) {
    return "API Key not configured. Please add your OpenAI API key to use this feature.";
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are Sustho AI Assistant, a friendly medical expert specializing in healthcare for Bangladesh. 
        Your goal is to explain the benefits of Sustho AI Card and answer general health queries. 
        Keep responses brief, polite, and helpful. Always include a disclaimer that you are an AI and not a substitute for a human doctor. 
        Respond in a mix of Bengali and English (Banglish) if suitable, or pure Bengali if the user asks in Bengali.`,
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return (
      completion.choices[0]?.message?.content ||
      "I'm sorry, I couldn't process that request."
    );
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return "Error communicating with Sustho AI. Please try again later.";
  }
};

// Keep the old function name for backward compatibility
export const getGeminiResponse = getOpenAIResponse;
