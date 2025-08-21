import { model } from "./firebase.config";

export async function generateText(prompt: string) {
  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  return result.response.text();
};


export async function summarizeText(text: string) {
  const result = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `Summarize the following text in a clear and concise way:\n\n${text}`
          }
        ]
      }
    ]
  });

  return result.response.text();
}

