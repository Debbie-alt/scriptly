"use client";

import { motion } from "framer-motion";
import { Book } from "lucide-react";

export default function StudyGuidesPage() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50 via-white to-purple-100 dark:from-[#0d0d0d] dark:via-[#111] dark:to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
            <Book className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Study Guides
          </h1>
        </motion.div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-[#141414] p-6 rounded-2xl shadow border">
            <h2 className="text-xl font-semibold mb-2">How to Summarize</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Break chapters into key points, use mind maps, and highlight only
              essential facts.
            </p>
          </div>

          <div className="bg-white dark:bg-[#141414] p-6 rounded-2xl shadow border">
            <h2 className="text-xl font-semibold mb-2">Revision Techniques</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Practice active recall, spaced repetition, and schedule short
              review sessions regularly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
