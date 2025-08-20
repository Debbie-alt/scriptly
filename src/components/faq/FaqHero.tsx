"use client";

import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-26 px-6  flex flex-col justify-center  text-center h-[60vH] relative"
      style={{ backgroundImage: "url('skypic3.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="bg-black/40 absolute inset-0"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Scriptly Help Center</h1>
        <p className="mb-6">Find answers to your questions quickly</p>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-2/3 text-sm px-4 py-2 text-white rounded-l-lg focus:outline-none border-b border-t border-l border-r-[#505081] text-black"
          />
          <button className="px-4 py-2.5 bg-[#505081] rounded-r-lg text-white text-sm ">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
