"use client";

import { motion } from "framer-motion";
import { Book, PenTool, GraduationCap } from "lucide-react";
import Link from "next/link";

const guides = [
  {
    slug: "study-guides",
    icon: <Book className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: "Study Guides",
    description: "Step-by-step guides to help you summarize, learn, and revise effectively.",
  },
  {
    slug: "writing-tutorials",
    icon: <PenTool className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
    title: "Writing Tutorials",
    description: "Learn how to craft essays, reports, and notes with clear structure and style.",
  },
  {
    slug: "exam-tips",
    icon: <GraduationCap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
    title: "Exam Tips",
    description: "Proven techniques to prepare smarter and retain knowledge longer.",
  },
];


const GuidesSection = () => {
  return (
<section className="relative py-20 px-6 
  bg-gradient-to-b from-gray-50 via-white to-gray-100 
  dark:from-[#0d0d0d] dark:via-[#0b0b0b] dark:to-[#0a0a0a]">        
  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100"
        >
          Guides & Tutorials
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Explore practical resources that teach you how to write, summarize, and learn more effectively.
        </motion.p>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group bg-white dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-md p-6 text-left hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
            >
            <Link href={`/resources/${guide.slug}`}>
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#1e1e1e] mb-4">
      {guide.icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
      {guide.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      {guide.description}
    </p>
  </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
