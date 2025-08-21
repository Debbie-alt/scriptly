'use client'

import React, { useState } from 'react';
import { summarizeText } from '@/config/text-generator';
import AiFeatureTabs from '@/components/ai/feature-tab';
import Faq from '@/components/LandingPage/Faq';

const TextSummarizerPage = () => {
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSummary('');
    try {
      const result = await summarizeText(input);
      setSummary(result);
    } catch {
      setError('Failed to summarize text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#111111] dark:text-white">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-br from-[#6d28d9] via-[#4b206b] to-[#18113a] text-white text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">AI Text Summarizer</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90 mb-2">Paste any text and get a clear, concise summary instantly using Scriptly's AI.</p>
      </section>
      {/* AI Feature Tabs */}
      <AiFeatureTabs />
      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 pb-16">
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#181818] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6d28d9] mb-4 resize-none min-h-[120px]"
            placeholder="Paste your text here..."
            value={input}
            onChange={e => setInput(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-2 rounded bg-gradient-to-r from-[#6d28d9] via-[#4b206b] to-[#18113a] text-white font-semibold shadow-md hover:brightness-110 transition disabled:opacity-60"
            disabled={loading || !input.trim()}
          >
            {loading ? 'Summarizing...' : 'Summarize'}
          </button>
        </form>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-gray-700 rounded p-4 min-h-[100px] text-gray-900 dark:text-gray-100">
          {summary ? <pre className="whitespace-pre-wrap break-words">{summary}</pre> : <span className="text-gray-400">Summary will appear here...</span>}
        </div>
      </div>
      <Faq/>
    </div>
  );
};

export default TextSummarizerPage;