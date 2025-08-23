"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

export default function ProofreaderShowcase() {
  const examples = [
    {
      before: "She go to market yesterday.",
      after: "She went to the market yesterday.",
    },
    {
      before: "Their going to the party later.",
      after: "They’re going to the party later.",
    },
   
  ];

  return (
    <section className="relative  mx-auto py-20 px-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50  -z-10" />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-center mb-14 text-[#272757]"
      >
        See the Difference ✨
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {examples.map((ex, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/30 backdrop-blur-xl shadow-lg border transition-all duration-300"
          >
            {/* Before */}
            <div className="mb-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-red-600">
                <XCircle className="w-5 h-5" /> Before
              </h3>
              <p className="mt-2 text-gray-600 italic border-l-4 border-red-200 pl-3">
                “{ex.before}”
              </p>
            </div>

            {/* After */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-green-700">
                <CheckCircle className="w-5 h-5 text-green-600" /> After
              </h3>
              <p className="mt-2 text-gray-900 font-medium border-l-4 border-green-200 pl-3">
                “{ex.after}”
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Gradient Orbs */}     

      <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-300/30 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
