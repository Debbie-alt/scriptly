'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
      settings: { slidesToShow: 1.5 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
}

const Hero = () => {
  return (
    <section className="hero-bg-image relative py-16 min-h-screen hero-grid-ines px-4 md:px-8 lg:px-24 flex hero-s text-center relative"
    >
      <div className="hero-bg-left   inset-0 hero-bg age z-0      absolute"/>
      <div className="w-full md:w-2/3  flex flex-col items-start">
        <h1 className="text-black  text-3xl md:text-5xl font-medium -translate-y-[50%] leading-tight text-center drop-shadow-lg">
          Unlock Your Brilliance. Write Your Success Story.
        </h1>
        <p className="text-gray-700 font-medium -mt-8 mx-auto w-full max-w-xl text-center">
          Need a writer? Connect instantly with top experts for any project, any time.
          cum qui delectus voluptatum ea eaque voluptate similique, laudantium nesciunt et
        </p>
        <div className='flex gap-5 items-center mx-auto'>
           <button className="mt-4 mb-2 px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md shadow-lg transition-all self-center">
          Hire a Writer
        </button>
         <button className="mt-4 mb-2 px-10 py-2 bg-transparen border border-[#a1a1e6] hover:opacity-80 text-black rounded-md shadow-lg transition-all self-center">
          Try it out
        </button>

        </div>
       

      <div className="absolute bottom-[0%] mb-6 left-0 right-0 w-[80%] mt-3 mx-auto   pb-6 z-20">
          
          <Slider {...carouselSettings}>
            {carouselItems.map((item, idx) => (
              <div key={idx} className="px-3">
                <div className="glassmorph-card min-h-[180px] p-6 rounded-2xl shadow-2xl border border-white/40 bg-white/60 backdrop-blur-lg flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-3xl cursor-pointer z-20">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="text-base font-bold mb-2 text-black/90 text-center">{item.title}</h3>
                  <p className="text-gray-800/80 text-xs text-center leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10" />
      </div>
    </section>
  )
}

export default Hero;