"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Edit3, Laptop, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What is Scriplty?",
    a: "Scriplty is an AI-powered writing assistant that helps you brainstorm, draft, and refine content effortlessly.",
    icon: <BookOpen className="w-5 h-5 text-[#0f0e47]" />,
  },
  {
    q: "Do I need prior writing experience?",
    a: "Not at all! Whether you’re a pro or just starting, Scriplty adapts to your style and boosts your creativity.",
    icon: <Edit3 className="w-5 h-5 text-[#0f0e47]" />,
  },
  {
    q: "Is Scriplty free to use?",
    a: "We offer a free tier with essential features. For advanced tools and unlimited usage, upgrade to Pro.",
    icon: <Laptop className="w-5 h-5 text-[#0f0e47]" />,
  },
  {
    q: "Can I trust the AI’s facts?",
    a: "AI speeds up writing, but fact-checking is key. Always review important details before publishing.",
    icon: <HelpCircle className="w-5 h-5 text-[#0f0e47]" />,
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="relative py-24 px-6 overflow-hidden 
      bg-gray-50 dark:bg-[#0b0b0b]">


   
      <div className="absolute top-6 right-6 px-4 py-1.5 text-sm rounded-full 
       text-indigo-700 bg-indigo-100 rounded-full dark:bg-indigo-900/40 dark:text-indigo-300  font-medium shadow-md">
        Best Essay Helper for Students ✨
      </div>

      {/* Subtle background pattern */}
   

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
           <h1 className="font-medium text-3xl mt-3 dark:text-white md:-mt-8 text-black mb-10  ">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl text-left 
                transition-all duration-300 border
                ${active === i 
                  ? "bg-[#505081] text-white border-[#0f0e47] scale-[1.02] shadow-md" 
                  : "bg-white dark:bg-[#1a1a1a] border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:scale-[1.01]"}`}
            >
              <span>{item.icon}</span>
              <span className="font-medium">{item.q}</span>
            </button>
          ))}
        </div>
        </div>


        {/* Answer display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-white dark:bg-[#111111] 
                border border-gray-200 dark:border-gray-800 
                shadow-lg text-lg leading-relaxed 
                text-gray-700 dark:text-gray-300"
            >
              {faqs[active].a}
            </motion.div>
          </AnimatePresence>
        </div>

          <div className="mt-12 absolute bottom-0 right-10 w-screen justify-end flex hidden md:flex " data-aos="zoom-in">
        <div className="absolute right-14 -bottom-20 w-72 h-72 bg-purple-100 dark:bg-purple-900/30 blur-xl opacity-80 rounded-full"></div>
        <div className="w-28 h-28 rounded-full right-10 bg-gradient-to-br from-[#0f0e47] to-[#8686ac] relative z-10 "></div>
      </div>

      </div>
    </section>
  );
}
