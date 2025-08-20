'use client' 
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const FEEDBACK = [
  { label: "sad", emoji: "😞" },
  { label: "neutral", emoji: "😐" },
  { label: "happy", emoji: "😊" },
];

const AITools = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mx-auto py-30 px-24 flex flex-col md:flex-row gap-12 min-h-screen dark:bg-[#111111] dark:text-white ">
      <div className="flex-1">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-300 mb-6 flex items-center gap-1">
          <Link href="/faqs" className="hover:underline text-purple-800 dark:text-purple-300">FAQs</Link>
          <FiChevronRight className="inline-block text-base text-gray-400 dark:text-gray-300 mx-1" />
          <span className="text-gray-700 dark:text-gray-100">Using AI Tools</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-1 text-gray-900 dark:text-white ">
          Using AI Tools
        </h1>
        <p className="text-gray-500 dark:text-gray-200 mb-6">
          How to get the most out of Scriptly's AI-powered features
        </p>

        {/* Author */}
        <div className="flex items-center mb-8">
          <img
            src="https://via.placeholder.com/40"
            alt="Author avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-sm text-gray-800 dark:text-gray-100">Written by Scriptly Team</p>
            <p className="text-xs text-gray-500 dark:text-gray-300">Updated over a month ago</p>
          </div>
        </div>

        {/* Content */}
        <p className="mb-4 text-gray-800 dark:text-gray-100">
          Scriptly offers a suite of AI-powered tools to help you write faster, clearer, and more original work.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Step 1. Use the Text Generator
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          The <span className="font-medium">Text Generator</span> creates draft essays, outlines, and
          blog posts from your prompts.  
          <a href="/tools/text-generator" className="text-purple-800 dark:text-purple-300 hover:underline ml-1">
            You can check the Text Generator here →
          </a>
        </p>

        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Step 2. Improve with the Paraphraser
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          Use the <span className="font-medium">Paraphraser</span> to rewrite sentences for originality and
          better flow.  
          <a href="/tools/paraphraser" className="text-purple-800 dark:text-purple-300 hover:underline ml-1">
            Try the Paraphraser here →
          </a>
        </p>

        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Step 3. Humanize your writing
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          The <span className="font-medium">Humanizer</span> makes AI-generated content sound more natural and human-like.  
          <a href="/tools/humanizer" className="text-purple-800 dark:text-purple-300 hover:underline ml-1">
            Check out the Humanizer here →
          </a>
        </p>

        {/* Feedback Section */}
        <div className="border-t pt-6 mt-12">
          <p className="text-gray-800 dark:text-gray-100 font-medium mb-3">
            Did this answer your question?
          </p>
          <div className="flex gap-6 text-2xl cursor-pointer">
            {FEEDBACK.map((item) => (
              <span
                key={item.label}
                role="img"
                aria-label={item.label}
                tabIndex={0}
                onClick={() => setSelected(item.label)}
                className={`transition-transform duration-200 select-none text-2xl
                  hover:scale-125 focus:scale-125
                  ${selected && selected !== item.label ? 'text-gray-300 dark:text-gray-600' : 'text-gray-900 dark:text-white'}
                  ${selected === item.label ? 'scale-125' : ''}
                `}
                style={{ outline: 'none' }}
              >
                {item.emoji}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-64 border-l pl-6 text-sm text-gray-600 dark:text-gray-200">
        <p className="font-medium text-gray-800 dark:text-gray-100 mb-2">Steps in this article:</p>
        <ol className="space-y-1 list-decimal list-inside">
          <li>Use the Text Generator</li>
          <li>Improve with the Paraphraser</li>
          <li>Humanize your writing</li>
        </ol>
      </aside>
    </div>
  );
};

export default AITools;
