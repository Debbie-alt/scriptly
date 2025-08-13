import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative px-20 py-6 flex justify-between items-center bg-white'>
      <div className="flex-1">
        <h1 className='text-5xl font-semibold text-[#0f0e47] leading-snug'> 
          Discover <span className="text-purple-800">Scriptly</span> <br/><i>Empowering Students, Elevating Results</i>
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-xl">
          Scriptly is your trusted partner for academic success. We connect you with expert writers, provide tailored essay and assignment help, and ensure every project is original, confidential, and delivered on time. Experience stress-free learning and achieve your goals with Scriptly by your side.
        </p>
      </div>
      <div className="relative flex-1 flex justify-end items-center">
        <div className="absolute -top-10 -right-10 w-[420px] h-[420px] bg-gradient-to-br from-purple-400 via-purple-200 to-transparent rounded-full blur-2xl opacity-70 z-0"></div>
        <Image
          src="/about-hero.png"
          alt="About Hero"
          width={500}
          height={400}
          className="object-cover rounded-lg mt-20 relative z-10"/>
      </div>
    </section>
  )
}

export default Hero