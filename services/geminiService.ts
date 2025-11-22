import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini
// Note: Process.env.API_KEY is managed by the environment.
const getAiClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found. AI features will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const getPlanRecommendation = async (userPreferences: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "Our AI assistant is currently offline. We recommend the 12 Month plan for the best value.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        You are a sales assistant for "IPTVNOVA", a premium IPTV provider.
        The user tells you their viewing habits: "${userPreferences}".
        
        We have 4 main duration plans:
        1. 1 Month ($14.99) - Good for testing.
        2. 3 Months ($26.99) - Short term commitment.
        3. 6 Months ($39.99) - Good balance.
        4. 12 Months ($64.99) - Best Value, includes Anti-Freeze and 24/7 support.

        Based on their input, recommend ONE plan and explain why in 1 short sentence.
        Be enthusiastic and professional.
      `,
      config: {
        responseMimeType: "text/plain",
      }
    });
    
    return response.text || "We recommend the 12 Month plan for the best experience.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Based on typical usage, we recommend the 12 Month Gold plan for the best savings.";
  }
};