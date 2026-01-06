

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;

const genAI = new GoogleGenerativeAI(apiKey);
export const chatModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function getChatResponse(message: string): Promise<string> {
  const result = await chatModel.generateContent(message);
  return result.response.text();
}
