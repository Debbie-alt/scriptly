'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { generateText } from '@/config/text-generator';
import Link from 'next/link';

const TextGeneratorHero = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Left: Heading + CTA + Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            Generate Creative <span className="text-purple-800">Text</span> Instantly
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Unleash ideas, marketing copy, and fresh content with the power of AI.
            Just type your thought, and let Scriptly bring it to life.
          </p>
          <Link href='/signin' className="px-6 py-3 rounded-xl bg-yellow-600/70  font-medium hover:bg-yellow-500 transition">
            Explore Features
          </Link>

          {/* Illustration */}
          <div className="relative w-72 h-56 mt-5">
            <Image
              src="/data-input.svg"
              alt="AI writing illustration"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 border border-gray-200 rounded-2xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Try it out 👇
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-purple-300 min-h-[120px]"
              placeholder="Enter your prompt..."
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#272757] text-white font-semibold hover:opacity-70  transition disabled:opacity-90"
              disabled={loading || !prompt.trim()}
            >
              {loading ? 'Generating...' : 'Generate Text'}
            </button>
          </form>
          
          {/* Error */}
          {error && <div className="text-red-500 mt-3">{error}</div>}
          
          {/* Result */}
          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4 min-h-[100px] text-gray-800">
            {result ? (
              <pre className="whitespace-pre-wrap break-words">{result}</pre>
            ) : (
              <span className="text-gray-400">AI output will appear here...</span>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TextGeneratorHero;
