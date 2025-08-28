'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section2 = () => {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <section
      className="py-20 px-6 md:px-20 relative flex flex-col md:flex-row items-center gap-12 bg-white dark:bg-[#111111]"
      data-aos="fade-up"
    >
      {/* Left: Image */}
      <div className="flex-1 flex justify-center relative z-10" data-aos="fade-right">
        <div className="relative w-full max-w-lg">
          <img
            src="/man_writing.jpg"
            alt="Scriptly Mission"
            className="w-full h-auto object-cover shadow-2xl rounded-3xl"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex-1 relative z-10" data-aos="fade-left">
        <h2 className="text-3xl md:text-4xl font-semibold  text-[#0f0e47] dark:text-white mb-6">
          What We Do
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          At Scriptly, we are dedicated to empowering students and professionals by providing
          high-quality, custom academic writing and consulting services. Our mission is to make
          learning and achievement accessible, stress-free, and rewarding for everyone.
        </p>

        <ul className="space-y-4 text-gray-700 dark:text-gray-200 text-base">
          <li className="flex items-start gap-2">
            <span className="text-purple-700 dark:text-purple-400 mt-1">✔</span>
            <span>
              <span className="font-semibold">Custom Writing:</span> Essays, assignments, and
              research papers tailored to your needs.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-700 dark:text-purple-400 mt-1">✔</span>
            <span>
              <span className="font-semibold">Academic Support:</span> Editing, proofreading, and
              expert consulting for all academic levels.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-700 dark:text-purple-400 mt-1">✔</span>
            <span>
              <span className="font-semibold">Integrity & Excellence:</span> We guarantee
              originality, confidentiality, and timely delivery in every project.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-700 dark:text-purple-400 mt-1">✔</span>
            <span>
              <span className="font-semibold">Student Success:</span> Our goal is to help you
              achieve your academic and professional dreams with confidence.
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Section2
