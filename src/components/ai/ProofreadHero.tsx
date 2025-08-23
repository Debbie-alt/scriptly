"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wand2 } from "lucide-react";
import { proofreadText } from "@/config/proofreader";

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
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8686ac]/30 via-white to-purple-50  -z-10" />

      {/* Floating gradient orbs */}
      <div className="absolute -top-20 -left-16 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl -z-10"></div>

      <section className="max-w-5xl mx-auto py-20 px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold mb-4 ">
            Scriptly's Proofreading Tool
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Catch grammar mistakes, refine style, and improve clarity instantly.  
            Adjust creativity to fit your needs — from strict corrections to stylish rewrites.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#0f0e47]/89  dark:bg-white/70 rounded-2xl shadow-xl p-6 border border-purple-200"
        >
          <textarea
            className="w-full h-48 p-4 rounded-xl border-2 border-purple-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-400 transition outline-none mb-6 resize-none bg-white/90"
            placeholder="✍️ Paste or type your text here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-200 ">
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
            <div className="flex justify-between text-sm text-gray-300 mt-1">
              <span>Strict</span>
              <span>Creative</span>
            </div>
          </div>

          <button
            onClick={handleProofread}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white  font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            <Wand2 className="w-5 h-5" />
            {loading ? "Proofreading..." : "Proofread My Text"}
          </button>
        </motion.div>

        {output && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-white/80 border border-purple-200 p-6 rounded-2xl shadow-inner backdrop-blur"
          >
            <h2 className="text-xl font-semibold text-purple-800 mb-3">
              ✨ Corrected Text
            </h2>
            <p className="whitespace-pre-wrap text-gray-800 leading-relaxed">{output}</p>
          </motion.div>
        )}
      </section>
    </div>
  );
}
