'use client'

import React, { useState } from 'react';
import { summarizeText } from '@/config/text-generator';
import AiFeatureTabs from '@/components/ai/feature-tab';
import Faq from '@/components/LandingPage/Faq';
import TextSummarizerHero from '@/components/ai/parahraserHero';
import SummarizerShowcase from '../text-summarizer/MainContent';

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
    <div className="min-h-screen dark:bg-[#111111]  py-18">
      <AiFeatureTabs />
      <TextSummarizerHero/>
      {/* AI Feature Tabs */}
    

      {/* Main Content */}
        <SummarizerShowcase
          />
      <Faq/>
    </div>
  );
};

export default TextSummarizerPage;