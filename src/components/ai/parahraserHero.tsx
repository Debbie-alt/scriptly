"use client";

import React, { useState } from "react";
import { summarizeText } from "@/config/text-generator";

const TextSummarizerHero = () => {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSummary("");
    try {
      const result = await summarizeText(input);
      setSummary(result);
    } catch {
      setError("⚠️ Failed to summarize text. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col items-center py-16 text-center px-4 
      bg-gradient-to-b from-white via-purple-50 to-purple-100 
      dark:from-[#111111] dark:via-[#14123a] dark:to-[#111111] 
      dark:text-white overflow-hidden"
    >
      {/* Background blobs */}
      <div className="pointer-events-none">
        {/* top left glow */}
        <div
          className="absolute -top-24 left-1/4 w-72 h-72 rounded-full opacity-20 z-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #7c3aed 0%, transparent 70%)",
            filter: "blur(35px)",
          }}
        />
        {/* right side glow */}
        <div
          className="absolute top-1/3 right-10 w-64 h-64 rounded-full opacity-20 z-0"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, #6d28d9 0%, transparent 85%)",
            filter: "blur(70px)",
          }}
        />
        {/* bottom purple under form */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[45%] rounded-full opacity-40 z-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(109,40,217,0.55) 0%, transparent 75%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Title + tagline */}
      <h1 className="relative text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg z-10 text-gray-900 dark:text-white">
        Summarize Anything{" "}
        <span className="text-[#6d28d9] dark:text-purple-300">in Seconds</span>
      </h1>
      <p className="relative max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-10 z-10 text-gray-700 dark:text-gray-200">
        Paste your text below and let Scriptly’s AI generate a concise,
        powerful summary instantly.
      </p>

      {/* Tool card */}
      <div
        className="relative z-10 w-full max-w-2xl 
        bg-white/80 dark:bg-white/10 
        backdrop-blur-2xl rounded-2xl shadow-2xl p-6 text-left 
        border border-purple-200/50 dark:border-purple-800"
      >
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            className="w-full p-3 rounded-lg bg-white/70 dark:bg-white/5 
              text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 
              focus:outline-none border border-gray-500 resize-none min-h-[120px]"
            placeholder="Paste your text here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="mt-4 px-6 py-3 rounded-xl bg-[#0f0e47] text-white hover:brightness-110 transition font-semibold shadow-md"
          >
            {loading ? "Summarizing..." : "Summarize"}
          </button>
        </form>

        {error && <div className="text-red-500 mb-3">{error}</div>}
        <div className="bg-gray-50/90 dark:bg-black/30 rounded-xl p-4 min-h-[100px] text-gray-700 dark:text-gray-200">
          {summary ? (
            <pre className="whitespace-pre-wrap break-words">{summary}</pre>
          ) : (
            <span className="text-gray-400">✨ Summary will appear here...</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextSummarizerHero;
