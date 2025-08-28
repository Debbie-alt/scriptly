"use client";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export default function SignUpCta() {
  return (
    <section className="relative flex items-center justify-center px-6 py-20 overflow-hidden ">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-black transition-colors duration-300" />

      {/* Layered Spheres (bottom-lit) */}
      <div className="absolute left-0 top-0">
        {/* Largest sphere */}
        <div className="absolute -left-30 -top-3 w-[37rem] h-[37rem] rounded-full 
          bg-gradient-to-t from-gray-100 via-gray-300 to-gray-700 
          dark:from-gray-400 dark:via-gray-700 dark:to-black shadow-2xl" />

        {/* Second sphere */}
        <div className="absolute -left-14 -top-10 w-[30rem] h-[30rem] rounded-full 
          bg-gradient-to-t from-gray-50 via-gray-200 to-gray-600 
          dark:from-gray-300 dark:via-gray-600 dark:to-gray-900 shadow-xl" />

        {/* Third sphere */}
        <div className="absolute -left-12 -top-20 w-[26rem] h-[26rem] rounded-full 
          bg-gradient-to-t from-white via-gray-150 to-gray-500 
          dark:from-gray-200 dark:via-gray-500 dark:to-gray-800 shadow-lg" /> 

        {/* Fourth sphere */}
        <div className="absolute -left-6 -top-28 w-[22rem] h-[22rem] rounded-full 
          bg-gradient-to-t from-white via-gray-100 to-gray-400 
          dark:from-gray-100 dark:via-gray-400 dark:to-gray-700 shadow-md" />

        {/* Fifth sphere */}
        <div className="absolute -top-40 left-4 w-[18rem] h-[18rem] rounded-full 
          bg-gradient-to-t from-gray-50 via-gray-200 to-gray-300 
          dark:from-gray-100 dark:via-gray-300 dark:to-gray-600 shadow" /> 
      </div> 

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-left ml-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black  md:dark:text-white sm:max-w-xl lg:w-full">
          Sign up on Scriptly today
        </h2>
        <p className="text-lg mb-8 text-gray-700 md:dark:text-gray-300">
          Get instant access to powerful AI tools for writing, editing, and brainstorming.
        </p>
        <Link  href='/signup' className="px-6 py-3 w-fit rounded-full bg-[#0f0e47] hover:bg-[#10105a] text-white transition-colors shadow-md flex items-center gap-2">
          Get Started <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
