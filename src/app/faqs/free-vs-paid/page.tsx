'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const FEEDBACK = [
  { label: "sad", emoji: "😞" },
  { label: "neutral", emoji: "😐" },
  { label: "happy", emoji: "😊" },
];

const FreeVsPaid = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="mx-auto py-30 px-24 flex flex-col md:flex-row gap-12 min-h-screen dark:bg-[#111111] dark:text-white ">
      <div className="flex-1">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-300 mb-6 flex items-center gap-1">
          <Link href="/faqs" className="hover:underline text-purple-800 dark:text-purple-300">FAQs</Link>
          <FiChevronRight className="inline-block text-base text-gray-400 dark:text-gray-300 mx-1" />
          <span className="text-gray-700 dark:text-gray-100">Free vs Paid Features</span>
        </nav>
        {/* Title */}
        <h1 className="text-3xl font-bold mb-1 text-gray-900 dark:text-white ">Free vs Paid Features</h1>
        <p className="text-gray-500 dark:text-gray-200 mb-6">What tools and services are free, and what are premium?</p>
        {/* Author */}
        <div className="flex items-center mb-8">
          <img src="https://api.dicebear.com/7.x/identicon/svg?seed=scriptlyfree" alt="Author avatar" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="text-sm text-gray-800 dark:text-gray-100">Written by Scriptly Team</p>
            <p className="text-xs text-gray-500 dark:text-gray-300">Updated this week</p>
          </div>
        </div>
        {/* Content */}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Free Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-100 mb-6">
          <li>AI Text Generator (daily limits apply)</li>
          <li>Basic Paraphrasing Tool</li>
          <li>Grammar & Style Checker</li>
          <li>Access to writing templates</li>
        </ul>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Premium Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-100 mb-8">
          <li>Unlimited AI writing and paraphrasing</li>
          <li>Advanced research and citation tools</li>
          <li>Priority support and expert review</li>
          <li>Plagiarism detection</li>
        </ul>
        {/* Feedback Section */}
        <div className="border-t pt-6 mt-12">
          <p className="text-gray-800 dark:text-gray-100 font-medium mb-3">Did this answer your question?</p>
          <div className="flex gap-6 text-2xl cursor-pointer">
            {FEEDBACK.map((item) => (
              <span
                key={item.label}
                role="img"
                aria-label={item.label}
                tabIndex={0}
                onClick={() => setSelected(item.label)}
                className={`transition-transform duration-200 select-none text-2xl hover:scale-125 focus:scale-125 ${selected && selected !== item.label ? 'text-gray-300 dark:text-gray-600' : 'text-gray-900 dark:text-white'} ${selected === item.label ? 'scale-125' : ''}`}
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
        <p className="font-medium text-gray-800 dark:text-gray-100 mb-2">Sections in this article:</p>
        <ol className="space-y-1 list-decimal list-inside">
          <li>Free Features</li>
          <li>Premium Features</li>
        </ol>
      </aside>
    </div>
  );
};

export default FreeVsPaid;
