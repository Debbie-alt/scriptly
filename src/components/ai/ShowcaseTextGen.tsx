'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { generateText } from '@/config/text-generator';
import { Sparkles } from 'lucide-react';

const samplePrompt = "Write a short welcome message for new users of an app.";
const sampleResult = "✨ Welcome aboard! We’re thrilled to have you here. Explore, create, and make the most of your journey with us.";

const ShowcaseGenerator = () => {
  const [typedPrompt, setTypedPrompt] = useState('');
  const [typedResult, setTypedResult] = useState('');
  const [isLive, setIsLive] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Demo animation only runs when not live
  useEffect(() => {
    if (isLive) return;
    let i = 0;
    const interval = setInterval(() => {
      setTypedPrompt(samplePrompt.slice(0, i + 1));
      i++;
      if (i === samplePrompt.length) {
        clearInterval(interval);
        setTimeout(() => {
          let j = 0;
          const resultInterval = setInterval(() => {
            setTypedResult(sampleResult.slice(0, j + 1));
            j++;
            if (j === sampleResult.length) clearInterval(resultInterval);
          }, 25);
        }, 600);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [isLive]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult('');
    try {
      const text = await generateText(prompt);
      setResult(text);
    } catch {
      setError('Failed to generate text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-28 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200 via-purple-100 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 border border-gray-200 rounded-2xl shadow-xl p-6 lg:p-10 relative"
        >
          <Sparkles className="absolute -top-5 -left-5 w-10 h-10 text-yellow-500 animate-pulse" />

          {/* Prompt */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Prompt</label>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-purple-300 min-h-[100px] font-mono text-sm"
                placeholder="Enter your prompt..."
                value={isLive ? prompt : typedPrompt}
                onFocus={() => setIsLive(true)}
                onChange={(e) => isLive && setPrompt(e.target.value)}
              />
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-[#272757] text-white font-semibold hover:opacity-80 transition disabled:opacity-50"
                disabled={loading || !prompt.trim()}
              >
                {loading ? 'Generating...' : 'Generate'}
              </button>
            </form>
          </div>

          {/* Result */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">AI Output</label>
            <div className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 min-h-[100px] font-sans text-sm leading-relaxed">
              {isLive ? (
                result ? (
                  <pre className="whitespace-pre-wrap break-words">{result}</pre>
                ) : error ? (
                  <span className="text-red-500">{error}</span>
                ) : (
                  <span className="text-gray-400">AI output will appear here...</span>
                )
              ) : (
                typedResult || <span className="text-gray-400">AI is generating...</span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShowcaseGenerator;
