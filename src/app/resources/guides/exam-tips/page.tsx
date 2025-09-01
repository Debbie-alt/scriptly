"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function ExamTipsPage() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 via-white to-yellow-100 dark:from-[#0d0d0d] dark:via-[#111] dark:to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30">
            <GraduationCap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Exam Tips
          </h1>
        </motion.div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-[#141414] p-6 rounded-2xl shadow border">
            <h2 className="text-xl font-semibold mb-2">Prep Smarter</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Plan your study schedule, prioritize weak topics, and revise
              regularly instead of cramming.
            </p>
          </div>

          <div className="bg-white dark:bg-[#141414] p-6 rounded-2xl shadow border">
            <h2 className="text-xl font-semibold mb-2">On Exam Day</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Sleep well, manage your time, and start with easier questions to
              build confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
