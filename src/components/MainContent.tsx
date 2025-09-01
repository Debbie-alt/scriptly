"use client";

import React, { useState } from "react";
import { summarizeText } from "@/config/text-generator";
import { motion } from "framer-motion";

const SummarizerShowcase = () => {
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
      setError("Failed to summarize text. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full py-20 px-6 
      bg-gradient-to-br from-white via-gray-50 to-gray-100 
      dark:from-[#0a0a0a] dark:via-[#111111] dark:to-[#1a1a1a] 
      transition-colors duration-500 hero-grid-lines"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Summarizer Tool */}
        <div
          className="relative rounded-3xl shadow-2xl p-8 space-y-6
          bg-white/90 border border-gray-200 
          dark:bg-[#111111] dark:border-[#222222] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              className="w-full rounded-2xl p-4 text-base font-medium 
              bg-gradient-to-br from-white to-gray-50
              dark:from-[#0d0d0d] dark:to-[#1a1a1a]
              text-gray-900 dark:text-gray-100 
              border border-gray-300 dark:border-[#2a2a2a]
              focus:outline-none focus:ring-2 focus:ring-indigo-400/40
              resize-none min-h-[160px] shadow-inner"
              placeholder="✨ Paste your text here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-full md:w-auto px-8 py-3 rounded-full
                bg-[#8686ac] dark:bg-gradient-to-r  dark:from-[#222222] dark:to-[#333333]
                text-white font-semibold tracking-wide
                shadow-lg hover:shadow-indigo-500/30 
                hover:scale-[1.02] active:scale-[0.98] 
                transition-all duration-300 disabled:opacity-60"
            >
              {loading ? "Summarizing..." : "Summarize"}
            </button>
          </form>

          {error && <div className="text-red-500 font-medium">{error}</div>}

          <div
            className="rounded-2xl p-6 min-h-[140px] 
            bg-gray-50 dark:bg-[#0f0f0f]
            border border-gray-200 dark:border-[#2a2a2a]
            shadow-inner text-gray-900 dark:text-gray-100"
          >
            {summary ? (
              <pre className="whitespace-pre-wrap break-words leading-relaxed">
                {summary}
              </pre>
            ) : (
              <span className="text-gray-400 dark:text-gray-500">
                💡 Your summary will appear here...
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="/signup"
              className="w-full block text-center px-6 py-3 rounded-full
              bg-indigo-950 text-white font-semibold shadow-lg
              hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-300 
              dark:bg-[#222222] dark:hover:bg-[#2d2d2d]"
            >
              🚀 Get full features
            </a>
          </div>
        </div>

        {/* Right Showcase Side */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-medium 
            text-gray-900 dark:text-gray-100"
          >
            Write Smarter. Save Time.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-md leading-relaxed"
          >
            Scriptly AI helps you create concise summaries, essays, and more —
            empowering students, professionals, and creators to write with ease.
          </motion.div>

          {/* Scrolling Text */}
          <div className="overflow-hidden h-12 w-full max-w-sm relative">
            <motion.div
              animate={{ y: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "linear",
              }}
              className="flex flex-col space-y-7 text-lg font-semibold 
              text-indigo-800 dark:text-gray-200"
            >
              <span>✨ Summarize instantly</span>
              <span>⚡ Save hours of work</span>
              <span>🎯 Improve clarity</span>
              <span>📚 Perfect for students</span>
              <span>📝 Boost productivity</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarizerShowcase;
