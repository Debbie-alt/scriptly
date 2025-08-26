'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { BookOpen } from 'lucide-react'

// ✅ Count-up hook
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const stepTime = Math.abs(Math.floor(duration / target))
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= target) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [target, duration])

  return count
}

const Hero = () => {
  const writers = useCountUp(10)
  const projects = useCountUp(25)
  const rating = useCountUp(42) // display as 4.9

  return (
    <section className="relative px-5 md:px-10 lg:px-20 py-24 flex flex-col justify-between items-center bg-white dark:bg-[#111111] overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.2),transparent_50%)]"></div>

      <div className="relative flex flex-col-reverse md:flex-row justify-between items-center w-full z-10">
        
        <div className="relative flex-1 flex justify-start items-center">
          <div className="absolute -top-10 -right-10 w-[420px] h-[420px] bg-gradient-to-br from-purple-200 via-purple-200 to-transparent dark:bg-transparent rounded-full blur-2xl opacity-70 z-0"></div>
          <Image
            src="/writers2.svg"
            alt="Writers Hero"
            width={500}
            height={400}
            className="object-cover rounded-lg mt-20 relative z-10 dark:shadow-purple-900/40"
          />
        </div>    

        {/* Text + CTA */}
        <div className="flex-1 mt-20 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl font-semibold text-[#0f0e47] dark:text-purple-50 leading-snug">
            Meet Our <span className="text-purple-800 dark:tex0">Writers</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-100 max-w-xl">
            Our team of professional writers is dedicated to helping you achieve academic excellence. 
            Each writer is carefully selected for their expertise, passion, and commitment to quality.
          </p>

          {/* CTA */}
          <button
            onClick={() => {
              const el = document.getElementById('writers-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-10 flex items-center gap-2 px-6 py-3 bg-[#0f0e47] hover:bg-opacity-80 text-white font-medium rounded-full shadow-lg transition-all focus:outline-none mx-auto md:mx-0"
          >
            See Writers
            <ArrowDown className="animate-bounce" size={22} />
          </button>

          {/* Stats with emojis */}
          <div className="flex justify-center md:justify-between w-3/4 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl">👩‍💻</span>
              <p className="text-lg font-semibold text-[#0f0e47] dark:text-purple-50">{writers}+</p>
              <span className="text-sm text-gray-600 dark:text-gray-300">Writers</span>
            </div>
            <div className="flex flex-col items-center">
            <BookOpen className="w-8 h-8 text-purple-700 dark:text-white" />
              <p className="text-lg font-semibold text-[#0f0e47] dark:text-purple-50">{projects.toLocaleString()}+</p>
              <span className="text-sm text-gray-600 dark:text-gray-300">Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">⭐</span>
              <p className="text-lg font-semibold text-[#0f0e47] dark:text-purple-50">{(rating/10).toFixed(1)}/5</p>
              <span className="text-sm text-gray-600 dark:text-gray-300">Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted logos row */}
      {/* <div className="flex flex-wrap justify-center items-center gap-8  opacity-70">
        <Image src="/logo1.png" alt="Logo 1" width={100} height={40} />
        <Image src="/logo2.png" alt="Logo 2" width={100} height={40} />
        <Image src="/logo3.png" alt="Logo 3" width={100} height={40} />
        <Image src="/logo4.png" alt="Logo 4" width={100} height={40} />
      </div> */}

      {/* Scroll cue */}
      {/* <div className="absolute bottom-6 flex justify-center w-full">
        <ArrowDown className="animate-bounce text-gray-500 dark:text-gray-400" size={28} />
      </div> */}
    </section>
  )
}

export default Hero
