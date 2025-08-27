"use client";

import { motion } from "framer-motion";
import { Book, PenTool, GraduationCap } from "lucide-react";

const guides = [
  {
    icon: <Book className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: "Study Guides",
    description: "Step-by-step guides to help you summarize, learn, and revise effectively.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
    title: "Writing Tutorials",
    description: "Learn how to craft essays, reports, and notes with clear structure and style.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
    title: "Exam Tips",
    description: "Proven techniques to prepare smarter and retain knowledge longer.",
  },
];

const GuidesSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gray-50 dark:bg-[#0d0d0d]">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100"
        >
          Guides & <span className="text-purple-700 dark:text-purple-400">Tutorials</span>
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
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#1e1e1e] mb-4">
                {guide.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {guide.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {guide.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
