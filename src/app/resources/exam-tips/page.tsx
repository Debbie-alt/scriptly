"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const FEEDBACK = [
  { label: "sad", emoji: "😞" },
  { label: "neutral", emoji: "😐" },
  { label: "happy", emoji: "😊" },
];

const ExamTipsPage = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mx-auto py-30 px-6 md:px-18 lg:px-24 flex flex-col md:flex-row gap-12 min-h-screen dark:bg-[#111111] dark:text-white">
      <div className="flex-1">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-300 mb-6 flex items-center gap-1">
          <Link href="/resources" className="hover:underline text-purple-800 dark:text-purple-300">Resources</Link>
          <FiChevronRight className="text-base text-gray-400 dark:text-gray-300 mx-1" />
          <span className="text-gray-700 dark:text-gray-100">Exam Tips</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl font-semibold mb-1 text-gray-900 dark:text-white">Exam Tips</h1>
        <p className="text-gray-500 dark:text-gray-200 mb-6">
          Practical strategies to prepare effectively and perform confidently in exams.
        </p>

        {/* Author */}
        <div className="flex items-center mb-8">
          <img src="https://api.dicebear.com/7.x/identicon/svg?seed=exam" alt="Author avatar" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="text-sm text-gray-800 dark:text-gray-100">Written by Scriptly Team</p>
            <p className="text-xs text-gray-500 dark:text-gray-300">Updated yesterday</p>
          </div>
        </div>

        {/* Content */}
        <ol className="list-decimal list-inside space-y-4 text-sm sm:text-base text-gray-800 dark:text-gray-100 mb-8">
          <li>Plan your study schedule well in advance.</li>
          <li>Practice past questions under timed conditions.</li>
          <li>Get enough sleep and maintain healthy habits.</li>
          <li>Stay calm and manage your exam time wisely.</li>
          <li>Review your answers if time permits.</li>
        </ol>

        {/* Feedback */}
        <div className="border-t pt-6 mt-12">
          <p className="text-gray-800 dark:text-gray-100 font-medium mb-3">Did these tips help you?</p>
          <div className="flex gap-6 text-2xl cursor-pointer">
            {FEEDBACK.map((item) => (
              <span
                key={item.label}
                role="img"
                aria-label={item.label}
                onClick={() => setSelected(item.label)}
                className={`transition-transform duration-200 select-none hover:scale-125 ${selected && selected !== item.label ? 'text-gray-300 dark:text-gray-600' : 'text-gray-900 dark:text-white'} ${selected === item.label ? 'scale-125' : ''}`}
              >
                {item.emoji}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-64 border-l pl-6 text-sm text-gray-600 dark:text-gray-200">
        <p className="font-medium text-gray-800 dark:text-gray-100 mb-2">Steps in this guide:</p>
        <ol className="space-y-1 list-decimal list-inside">
          <li>Plan early</li>
          <li>Practice past papers</li>
          <li>Sleep & health</li>
          <li>Stay calm</li>
          <li>Review answers</li>
        </ol>
      </aside>
    </div>
  );
};

export default ExamTipsPage;
