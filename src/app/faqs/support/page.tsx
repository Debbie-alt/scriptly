'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const FEEDBACK = [
  { label: "sad", emoji: "😞" },
  { label: "neutral", emoji: "😐" },
  { label: "happy", emoji: "😊" },
];

const Support = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-12 min-h-screen mt-20">
      <div className="flex-1">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4 flex items-center gap-1">
          <Link href="/faqs" className="hover:underline text-purple-800">FAQs</Link>
          <FiChevronRight className="inline-block text-base text-gray-400 mx-1" />
          <span className="text-gray-700">Support & Troubleshooting</span>
        </nav>
        {/* Title */}
        <h1 className="text-3xl font-bold mb-1 text-gray-900">Support & Troubleshooting</h1>
        <p className="text-gray-500 mb-6">Get help with your orders, tools, or account</p>
        {/* Author */}
        <div className="flex items-center mb-8">
          <img src="https://api.dicebear.com/7.x/identicon/svg?seed=scriptlysupport" alt="Author avatar" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="text-sm text-gray-800">Written by Scriptly Team</p>
            <p className="text-xs text-gray-500">Updated this week</p>
          </div>
        </div>
        {/* Content */}
        <ul className="list-disc list-inside space-y-2 text-gray-800 mb-8">
          <li>Visit our <Link href="/faqs" className="text-purple-800 hover:underline">FAQ page</Link> for quick answers.</li>
          <li>Contact support via live chat or email for personalized help.</li>
          <li>Check your dashboard for order status and updates.</li>
        </ul>
        {/* Feedback Section */}
        <div className="border-t pt-6 mt-12">
          <p className="text-gray-800 font-medium mb-3">Did this answer your question?</p>
          <div className="flex gap-6 text-2xl cursor-pointer">
            {FEEDBACK.map((item) => (
              <span
                key={item.label}
                role="img"
                aria-label={item.label}
                tabIndex={0}
                onClick={() => setSelected(item.label)}
                className={`transition-transform duration-200 select-none text-2xl hover:scale-125 focus:scale-125 ${selected && selected !== item.label ? 'text-gray-300' : 'text-gray-900'} ${selected === item.label ? 'scale-125' : ''}`}
                style={{ outline: 'none' }}
              >
                {item.emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-l pl-6 text-sm text-gray-600">
        <p className="font-medium text-gray-800 mb-2">Topics in this article:</p>
        <ol className="space-y-1 list-decimal list-inside">
          <li>FAQ access</li>
          <li>Contacting support</li>
          <li>Order status</li>
        </ol>
      </aside>
    </div>
  );
};

export default Support;
