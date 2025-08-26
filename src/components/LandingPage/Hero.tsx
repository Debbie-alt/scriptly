'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
})

const carouselItems = [
  {
    title: 'Essay Writing',
    desc: 'Professional essays tailored to your needs. Fast, original, and always on time.',
    icon: <span className="flex items-center justify-center w-10 h-10 rounded-full "><span className="text-lg">📝</span></span>,
  },
  {
    title: 'Research Papers',
    desc: 'In-depth research, citations, and expert analysis for any topic.',
    icon: <span className="flex items-center justify-center w-10 h-10 rounded-full "><span className="text-lg">📚</span></span>,
  },
  {
    title: 'Editing & Proofreading',
    desc: 'Polished, error-free documents with professional review.',
    icon: <span className="flex items-center justify-center w-10 h-10 rounded-full "><span className="text-lg">🔍</span></span>,
  },
  {
    title: 'Creative Writing',
    desc: 'Stories, scripts, and creative content by top writers.',
    icon: <span className="flex items-center justify-center w-10 h-10 rounded-full "><span className="text-lg">🎨</span></span>,
  },
]

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  cssEase: 'ease-in-out',
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1.2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
}

const Hero = () => {
  return (
    <section className="hero-bg-image relative py-16 min-h-screen px-4 md:px-8 lg:px-24 flex flex-col items-center lg:flex-row lg:items-start text-center lg:text-left bg-white dark:bg-[#111111]">
      <div className="hero-bg-left inset-0 absolute z-0" />

      <div className="w-full lg:w-2/3 flex flex-col items-center text-center relative z-10 mt-6 md:mt-0">
        <h1 className="text-black dark:text-gray-200 font-semibold text-4xl md:text-5xl md:font-medium leading-tight drop-shadow-lg mb-6 lg:mb-4">
          Unlock Your Brilliance. Write Your Success Story.
        </h1>
        <p className="text-gray-700 dark:text-purple-100 font-medium mx-auto lg:mx-0 w-full max-w-xl text-sm sm:text-base mb-6">
          Need a writer? Connect instantly with top experts for any project, any time.
        </p>

        <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
          <Link href='/writers'className="px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md shadow-lg transition-all">
            Hire a Writer
          </Link>
          <Link href='/resources' className="px-8 py-2 bg-transparent border border-[#a1a1e6] hover:opacity-80 text-black rounded-md shadow-lg transition-all dark:text-purple-100">
            Try it out
          </Link>
        </div>
      </div>

      <div className="w-full lg:absolute lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 lg:w-[80%] mt-10 lg:mt-0 z-20">
        <Slider {...carouselSettings}>
          {carouselItems.map((item, idx) => (
           <div key={idx} className="px-3">
  <div
    className="
      min-h-[180px] p-6 rounded-2xl shadow-2xl border 
      border-white/40 bg-white/60 backdrop-blur-lg 
      flex flex-col items-center justify-center 
      transition-transform hover:scale-105 hover:shadow-3xl cursor-pointer  

      /* 🌞 Light mode */
      text-black dark:text-white

      /* 🌙 Dark mode glassmorphism */
      dark:bg-black/40 dark:border-purple-200/20 dark:shadow-purple-500/10
    "
  >
    <div className="mb-3">{item.icon}</div>
    <h3 className="text-base font-bold mb-2 text-black/90 dark:text-white text-center">
      {item.title}
    </h3>
    <p className="text-gray-800/80 dark:text-gray-300 text-xs text-center leading-snug">
      {item.desc}
    </p>
  </div>
</div>

          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Hero
