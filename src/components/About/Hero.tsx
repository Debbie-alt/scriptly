import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Clock, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-24 flex flex-col-reverse md:flex-row justify-between items-center bg-white dark:bg-[#0b0b12]">
        {/* Left Section */}
        <div className="flex-1 relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0f0e47] dark:text-white leading-snug">
            Discover <span className="text-purple-800 ">Scriptly</span> <br />
            Empowering Students, Elevating Results
          </h1>

          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-xl">
            Scriptly is your trusted partner for academic success. We connect you with expert writers, provide tailored essay and assignment help, and ensure every project is original, confidential, and delivered on time.
          </p>

          <span className="inline-block px-3 py-1 mt-3 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full dark:bg-indigo-900/40 dark:text-indigo-300">
            🎓 Academic Success Simplified
          </span>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/signin"
              className="px-6 py-3 hover:bg-[#505081] text-white rounded-lg shadow bg-[#3e3e6d] transition-all font-semibold "
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg shadow hover:bg-gray-200 transition-all font-semibold dark:bg-white/10 dark:text-gray-200 dark:hover:bg-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex-1 flex flex-col justify-end items-center">
          {/* Gradient Glow Behind Image (dark mode subtle) */}
          <div className="absolute -top-12 -right-12 w-[420px] h-[420px] bg-gradient-to-br from-purple-400 via-blue-200 to-purple-100 rounded-full blur-3xl opacity-60 z-0 dark:from-purple-600 dark:via-blue-900 dark:to-transparent dark:opacity-30"></div>
          <div className="absolute bottom-0 left-8 w-[160px] h-[160px] bg-gradient-to-tr from-purple-200 to-purple-100 rounded-full blur-2xl opacity-40 z-0 dark:from-purple-700 dark:to-blue-800 dark:opacity-20"></div>

          <Image
            src="/about1.svg"
            alt="About Hero"
            width={500}
            height={400}
            className="object-cover rounded-2xl relative z-10"
          />

          <div className="flex flex-wrap gap-4 mt-8 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" /> Confidential
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" /> On-Time
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500 dark:text-yellow-300" /> Original Work
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-12 lg:px-20 pb-8 bg-white dark:bg-[#0b0b12]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-[#0f0e47] dark:text-white">5k+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Students Helped</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#0f0e47] dark:text-white">98%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#0f0e47] dark:text-white">1,200+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#0f0e47] dark:text-white">24/7</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Support Available</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
