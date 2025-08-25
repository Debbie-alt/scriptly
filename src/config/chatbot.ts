// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

// export async function getChatbotResponse(message: string) {
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//   const prompt = `
// You are a helpful FAQ assistant for Scriptly.
// Only answer questions about the product, features, pricing, or usage.
// If the question is unrelated, politely redirect to our support page.

// User: ${message}
// `;

//   const result = await model.generateContent(prompt);
//   return result.response.text();
// }

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;

const genAI = new GoogleGenerativeAI(apiKey);
export const chatModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function getChatResponse(message: string): Promise<string> {
  const result = await chatModel.generateContent(message);
  return result.response.text();
}
