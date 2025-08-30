import { model } from "./firebase.config";

export async function checkPlagiarism(text: string) {
  const prompt = `
You are a plagiarism checker.
Respond in plain text, short and clear.
- Give a verdict: Low, Medium, or High similarity.
- Add one-sentence reasoning.
- If possible, show key phrases that look copied.
Ignore common knowledge.

Text to check:
${text}
`;

  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.2 },
  });

  return result.response.text();
}
