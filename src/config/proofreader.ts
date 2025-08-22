// config/proofreader.ts
import { model } from "./firebase.config";

export async function proofreadText(text: string, temperature: number) {
  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text }] }],
    generationConfig: {
      temperature, 
    },
  });

  return result.response.text();
}
