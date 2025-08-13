import React from 'react'
import Hero from '@/components/About/Hero'
import Section2 from '@/components/About/Section2'

const AboutPage = () => {
  return (
    <>
    <Hero/>
    <Section2/>
    <div className='bg-[#505081] w-full px-20 py-22'  style={{
        backgroundImage:
          "linear-gradient(to left, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.2) 100%, rgba(0,0,0,0)), url('/partner-hero.jpg')"
      }}> lorem </div>
    </>
  )
}

export default AboutPage