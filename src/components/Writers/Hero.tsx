'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className='relative px-20 py-6 flex justify-between items-center bg-white dark:bg-[#111111]'>
      
      
        <div className="relative flex-1 flex justify-start items-center">
        <div className="absolute -top-10 -right-10 w-[420px] h-[420px] bg-gradient-to-br from-purple-200 via-purple-200 to-transparent dark:from-[#6d28d9] dark:via-[#a78bfa] dark:to-transparent rounded-full blur-2xl opacity-70 z-0"></div>
        <Image
          src="/writers.png"
          alt="Writers Hero"
          width={500}
          height={400}
          className="object-cover rounded-lg mt-20 relative z-10  dark:shadow-purple-900/40"
        />
      </div>    
      
      <div className="flex-1">
        <h1 className='text-5xl font-semibold text-[#0f0e47] dark:text-purple-50 leading-snug'>
          Meet Our <span className="text-purple-800 dark:text-purple-400">Writers</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-100 max-w-xl">
          Our team of professional writers is dedicated to helping you achieve academic excellence. Each writer is carefully selected for their expertise, passion, and commitment to quality. Discover the talent behind Scriptly and see how we can support your educational journey.
        </p>
        <button
          onClick={() => {
            const el = document.getElementById('writers-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-8 flex  items-center gap-2 px-5 py-3 bg-[#0f0e47] hover:bopacity-70 text-white font-medium rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          See Writers
          <ArrowDown className="animate-bounce" size={22} />
        </button>
      </div>
    
    </section>
  )
}

export default Hero