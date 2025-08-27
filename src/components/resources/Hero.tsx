"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, Download } from "lucide-react";

const ResourcesHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-[#0b0b0b] dark:to-[#141414] py-30 px-6">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100"
        >
          Free Learning <span className="text-purple-800 dark:text-purple-400">Resources</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Explore guides, templates, and tips crafted to help you write smarter,
          learn faster, and achieve academic success with Scriptly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="px-6 py-3 rounded-full bg-[#0f0f0f] text-white hover:bg-[#1a1a1a] transition-all shadow-md flex items-center gap-2 border border-gray-800">
            <BookOpen size={20} />
            Browse Guides
          </button>
          <button className="px-6 py-3 rounded-full bg-white text-[#0f0f0f] border border-gray-200 hover:shadow-md transition-all flex items-center gap-2 dark:bg-[#1c1c1c] dark:text-gray-100 dark:border-gray-700">
            <Download size={20} />
            Free Templates
          </button>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-300/25 dark:bg-purple-500/10 rounded-full blur-3xl z-0"></div>
    </section>
  );
};

export default ResourcesHero;
