'use client'
import React, { useState } from 'react';
import { generateText } from '@/config/text-generator';
import AiFeatureTabs from '@/components/ai/feature-tab';

const TextGeneratorPage = () => {
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
    <div className='py-20'>
     <AiFeatureTabs/>




    
    
    </div>


    // <div className="max-w-2xl mx-auto py-16 px-4 min-h-screen dark:bg-[#111111] dark:text-white">
    //   <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">AI Text Generator</h1>
    //   <form onSubmit={handleSubmit} className="mb-8">
    //     <textarea
    //       className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#181818] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 resize-none min-h-[100px]"
    //       placeholder="Enter your prompt..."
    //       value={prompt}
    //       onChange={e => setPrompt(e.target.value)}
    //       required
    //     />
    //     <button
    //       type="submit"
    //       className="px-6 py-2 rounded bg-purple-700 text-white font-semibold hover:bg-purple-800 transition disabled:opacity-60"
    //       disabled={loading || !prompt.trim()}
    //     >
    //       {loading ? 'Generating...' : 'Generate'}
    //     </button>
    //   </form>
    //   {error && <div className="text-red-500 mb-4">{error}</div>}
    //   <div className="bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-gray-700 rounded p-4 min-h-[120px] text-gray-900 dark:text-gray-100">
    //     {result ? <pre className="whitespace-pre-wrap break-words">{result}</pre> : <span className="text-gray-400">AI output will appear here...</span>}
    //   </div>
    // </div>
  );
};

export default TextGeneratorPage;