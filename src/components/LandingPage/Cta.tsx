import React from 'react';
import Image from 'next/image';

const Cta = () => {
  return (
    <section
      className="bg-[#272757] text-white flex flex-col text-center min-h-[70%] justify-center py-20 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to left, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.2) 100%, rgba(0,0,0,0)), url('/partner-hero.jpg')"
      }}
    >
      <div className="pointer-events-none select-none">
        <Image src="https://img.icons8.com/color/96/open-book--v2.png" alt="Open Book" width={56} height={56} className="absolute left-[25%] top-[12%] animate-bounce" />
        <Image src="https://img.icons8.com/color/96/paper.png" alt="Paper" width={56} height={56} className="absolute left-[18%] top-1/2 -translate-y-1/2 animate-pulse" />
        <Image src="https://img.icons8.com/color/96/contract.png" alt="Contract" width={56} height={56} className="absolute right-[18%] top-1/2 -translate-y-1/2 animate-pulse" />
        <Image src="https://img.icons8.com/color/96/graduation-cap.png" alt="Graduation Cap" width={56} height={56} className="absolute left-[40%] bottom-[14%] animate-bounce" />
        <Image src="https://img.icons8.com/color/96/reading.png" alt="Reading" width={56} height={56} className="absolute right-[26%] top-[22%] animate-bounce" />
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto space-y-4 relative z-10">
        <span className="px-4 py-1 text-white border mt-5 mb-4 rounded-sm border-yellow-500/70 text-sm font-semibold">
          Achieve Academic Excellence with Scriptly
        </span>
        <h1 className="text-5xl font-semibold leading-[4rem] mt-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0f0e47] to-yellow-500">
            Your Essay, Perfected
          </span>{" "}
          by Professional Writers
        </h1>
        <p className="text-lg text-gray-200">
          Get plagiarism-free, custom-written essays and assignments delivered on time. Trusted by students worldwide for quality, speed, and support. Let Scriptly help you succeed—stress-free!
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-semibold border border-gray-800">
            Start for free →
          </button>
          <button className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-md font-semibold">
           Get a Writer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
