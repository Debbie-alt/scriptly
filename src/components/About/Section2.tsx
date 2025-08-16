'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section2 = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 relative flex flex-col md:flex-row items-center gap-12 overflow-hidden bg-white/70" data-aos="fade-up">
      {/* Random gradient blobs */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-purple-400 via-purple-200 to-white rounded-full blur-2xl opacity-60 z-0" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-tr from-[#0f0e47] via-purple-300 to-transparent rounded-full blur-3xl opacity-40 z-0" style={{transform: 'translate(-50%, -50%)'}} />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-purple-200 via-white to-white rounded-full blur-2xl opacity-50 z-0" />
      <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-gradient-to-br from-[#0f0e47] via-purple-400 to-white rounded-full blur-2xl opacity-40 z-0" />
      {/* Main content */}
      <div className="flex-1 flex justify-center relative z-10" data-aos="fade-right">
        <div className="relative w-full max-w-lg">
          <img 
            src="/man_writing.jpg" 
            alt="Scriptly Mission" 
            className="w-full h-auto object-cover shadow-lg irregular-mask" 
          />
          <style jsx>{`
            .irregular-mask {
              clip-path: polygon(0 10%, 10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 20% 100%, 0 80%);
              border-radius: 40% 60% 50% 70%/60% 40% 70% 50%;
            }
          `}</style>
        </div>
      </div>
      <div className="flex-1 relative z-10" data-aos="fade-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f0e47] dark:text-white mb-4">What We Do..</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          At Scriptly, we are dedicated to empowering students and professionals by providing high-quality, custom academic writing and consulting services. Our mission is to make learning and achievement accessible, stress-free, and rewarding for everyone.
        </p>
        <ul className="space-y-3 text-gray-700 dark:text-gray-200 text-base list-disc list-inside pl-2">
          <li><span className="font-semibold">Custom Writing:</span> Essays, assignments, and research papers tailored to your needs.</li>
          <li><span className="font-semibold">Academic Support:</span> Editing, proofreading, and expert consulting for all academic levels.</li>
          <li><span className="font-semibold">Integrity & Excellence:</span> We guarantee originality, confidentiality, and timely delivery in every project.</li>
          <li><span className="font-semibold">Student Success:</span> Our goal is to help you achieve your academic and professional dreams with confidence.</li>
        </ul>
      </div>
    </section>
  )
}

export default Section2