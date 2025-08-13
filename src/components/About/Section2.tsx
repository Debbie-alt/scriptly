'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section2 = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-purple-50 flex flex-col md:flex-row items-center gap-12" data-aos="fade-up">
      <div className="flex-1 flex justify-center" data-aos="fade-right">
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
      <div className="flex-1" data-aos="fade-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f0e47] mb-4">What We Do..</h2>
        <p className="text-lg text-gray-700 mb-6">
          At Scriptly, we are dedicated to empowering students and professionals by providing high-quality, custom academic writing and consulting services. Our mission is to make learning and achievement accessible, stress-free, and rewarding for everyone.
        </p>
        <ul className="space-y-3 text-gray-700 text-base list-disc list-inside pl-2">
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