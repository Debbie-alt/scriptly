'use client'
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

import { PenTool, Mail, ShoppingBag, FileText, Type, Sparkles } from "lucide-react";

const useCases = [
  { text: "Generate blog post ideas", icon: <FileText className="w-4 h-4 text-[#505081]" /> },
  { text: "Write catchy headlines ✨", icon: <Type className="w-4 h-4 text-[#505081]" /> },
  { text: "Create ad copy instantly 🚀", icon: <Sparkles className="w-4 h-4 text-[#505081]" /> },
  { text: "Polish professional emails 📧", icon: <Mail className="w-4 h-4 text-[#505081]" /> },
  { text: "Draft product descriptions 🛍️", icon: <ShoppingBag className="w-4 h-4 text-[#505081]" /> },
  { text: "Kickstart your stories ✍️", icon: <PenTool className="w-4 h-4 text-[#505081]" /> },
];


const TextGeneratorCTA = () => {
  return (
    <div className="relative bg-white py-10 border-b border-gray-200 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 -right-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(39,39,87,0.4),_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Let AI handle the words,{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-br from-[#0f0e47] to-yellow-500">
              you focus on ideas
            </span>
          </h2>
          <p className="text-gray-600 max-w-md">
            From quick drafts to polished text, Scriptly makes writing effortless.
            See what you can create in seconds.
          </p>

          <div className="relative h-24 overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1 bg-purple-200 rounded-full overflow-hidden">
              <motion.div
                animate={{ y: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="w-full h-1/3 bg-[#8686ac] rounded-full"
              />
            </div>

            <motion.div
              animate={{ y: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 24, ease: "linear" }} 
              className="flex flex-col space-y-3 pr-4"
            >
            {useCases.concat(useCases).map((item, i) => (
    <motion.div
      whileHover={{ scale: 1.03 }}
      key={i}
      className="flex items-center gap-2 text-sm text-gray-800 font-medium 
                 bg-gradient-to-r from-purple-50 to-white border-l-4 border-[#505081] 
                 px-4 py-2 rounded-md shadow-sm"
    >
      {item.icon}
      <span>{item.text}</span>
    </motion.div>
  ))}
            </motion.div>
          </div>

          <button className="px-6 py-3 rounded-lg bg-[#272757] text-white font-semibold hover:bg-purple-800 transition shadow-sm">
            Start Writing Free
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-90 h-74 animate-pulse">
            <Image
              src="/chat-with-ai.svg" 
              alt="AI writing illustration"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TextGeneratorCTA;
