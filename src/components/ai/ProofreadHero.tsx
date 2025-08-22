"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wand2 } from "lucide-react";
import { proofreadText } from "@/config/proofreader"; // Gemini call

export default function Proofreader() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(0.3);

  const handleProofread = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const result = await proofreadText(input, temperature);
      setOutput(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 ">
          AI Proofreader
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Catch grammar mistakes, refine style, and improve clarity instantly.  
          Adjust creativity to fit your needs — from strict corrections to stylish rewrites.
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-purple-100"
      >
        {/* Textarea */}
        <textarea
          className="w-full h-48 p-4 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-400 transition outline-none mb-6 resize-none"
          placeholder="✍️ Paste or type your text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Temperature slider */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-purple-800">
            Style Strictness <span className="font-semibold">({temperature.toFixed(1)})</span>
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full accent-purple-700"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>Strict</span>
            <span>Creative</span>
          </div>
        </div>

        {/* Proofread button */}
        <button
          onClick={handleProofread}
          disabled={loading}
          className=" flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#272757] text-white font-semibold hover:from-purple-800 hover:to-purple-700 transition-all shadow-lg"
        >
          <Wand2 className="w-5 h-5" />
          {loading ? "Proofreading..." : "Proofread My Text"}
        </button>
      </motion.div>

      {/* Output */}
      {output && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-10 bg-gray-50 border border-purple-100 p-6 rounded-2xl shadow-inner"
        >
          <h2 className="text-xl font-semibold text-purple-800 mb-3">✨ Corrected Text</h2>
          <p className="whitespace-pre-wrap text-gray-800 leading-relaxed">{output}</p>
        </motion.div>
      )}
    </section>
  );
}
