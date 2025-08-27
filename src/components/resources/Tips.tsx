"use client";

import { motion } from "framer-motion";

const tips = [
  { icon: "✍️", title: "Start with Clarity", desc: "Give the AI a clear, focused prompt to get the best results." },
  { icon: "🤖", title: "Use AI Creativity", desc: "Try new tones, voices, and perspectives. AI shines in variety." },
  { icon: "🎯", title: "Stay Concise", desc: "Shorter inputs often lead to sharper, more accurate outputs." },
  { icon: "⚡", title: "Refine Iteratively", desc: "Don’t stop at the first draft. Adjust, rerun, and polish." },
  { icon: "📚", title: "Balance with Research", desc: "AI speeds writing up, but fact-checking makes it credible." },
  { icon: "💡", title: "Break Writer’s Block", desc: "Stuck? Ask AI to brainstorm hooks, headlines, or outlines." },
  { icon: "🧩", title: "Mix Human + AI", desc: "Blend your voice with AI’s speed for a unique final draft." },
  { icon: "🕰️", title: "Set Time Limits", desc: "Give AI boundaries for faster, cleaner brainstorming." },
];

export default function WritingTips() {
  return (
    <section className="relative py-28 px-6 overflow-hidden
      bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200
      dark:from-[#0a0a0f] dark:via-[#0d0d17] dark:to-[#08080d]">
      
      {/* Deep purple radial blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#0f0e47]/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0f0e47]/20 rounded-full blur-[160px]"></div>
      <div className="absolute -top-40 -right-20 w-[400px] h-[400px] bg-[#272757]/25 rounded-full blur-[140px]"></div>

      {/* Subtle dotted grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] 
        [background-size:24px_24px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white"
        >
          AI Writing Tips
        </motion.h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-20">
          Level up your workflow with these practical AI-powered writing strategies.
        </p>

        {/* Tips grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tips.map((tip, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -1 : 1 }}
              className={`relative bg-white/70 dark:bg-[#1a1a1a]/60 
                backdrop-blur-xl border border-gray-200/40 dark:border-gray-700
                rounded-2xl p-6 shadow-lg transition-all
                ${i % 3 === 0 ? "rotate-1" : i % 3 === 1 ? "-rotate-1" : "rotate-0"}`}
            >
              {/* Decorative corner gradient */}
              
              <div className="text-3xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {tip.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
