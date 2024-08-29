"use client";
import { useState } from "react";
import { getGeminiResponse } from "@/config/gemini";

export default function PlagiarismHero() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function runCheck() {
    setLoading(true);
    setResult("");
    try {
      const prompt = `
You are a plagiarism checker. 
Respond in plain text, short and clear.
Give me:
- A verdict: Low, Medium, or High similarity
- One-sentence reasoning
- If possible, show key phrases that look copied
Ignore generic/common phrases.

Text to check:
${text}
`;
      const res = await getGeminiResponse(prompt);
      setResult(res);
    } catch (err) {
      console.error(err);
      setResult("Error while checking.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">Plagiarism Checker</h1>
        <p className="text-gray-300">
          Paste your text below and get an instant similarity verdict.
        </p>

        <textarea
          className="w-full h-48 p-4 rounded-2xl text-black"
          placeholder="Paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={runCheck}
          disabled={loading || !text.trim()}
          className="px-6 py-3 rounded-2xl bg-white text-black font-semibold disabled:opacity-50"
        >
          {loading ? "Checking…" : "Check Plagiarism"}
        </button>

        {result && (
          <div className="mt-6 p-4 bg-white/10 rounded-2xl text-left">
            <h3 className="font-semibold mb-2">Result</h3>
            <p className="whitespace-pre-wrap">{result}</p>
          </div>
        )}
      </div>
    </section>
  );
}
