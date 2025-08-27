"use client";

import { ArrowRight } from "lucide-react";

export default function SignUpCta() {
  return (
    <section className="relative py-20 px-6 flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-[#0f0e47]" />

      {/* Decorative concentric circles (like the reference) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gray-700/40 to-transparent blur-3xl" />
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-gray-600/30 to-transparent blur-2xl" />
      <div className="absolute left-20 top-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-gray-500/40 to-transparent blur-xl" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Sign up on <span className="text-[#0f0e47]">Scriptly</span> today
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Unlock the power of AI writing – streamline your essays, articles, and content in minutes.
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
          bg-[#0f0e47] hover:bg-[#10105a] transition-colors shadow-lg">
          Get Started <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
