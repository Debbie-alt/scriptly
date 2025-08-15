"use client";

import React, { useState } from "react";

const mockWriters = [
  {
    id: 1,
    name: "Jane Doe",
    subject: "Literature",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Expert in English Literature and creative writing with 10+ years of experience.",
  },
  {
    id: 2,
    name: "John Smith",
    subject: "Mathematics",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Mathematics PhD, specializes in calculus, statistics, and problem solving.",
  },
  {
    id: 3,
    name: "Emily Carter",
    subject: "History",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "History buff with a knack for research and academic writing.",
  },
  {
    id: 4,
    name: "Michael Lee",
    subject: "Science",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Science communicator and academic writer in biology and chemistry.",
  },
  {
    id: 5,
    name: "Sophia Turner",
    subject: "Business",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "MBA graduate, specializes in business plans and case studies.",
  },
];

const subjects = [
  "All",
  ...Array.from(new Set(mockWriters.map((w) => w.subject))),
];

const Writers = () => {
  const [filter, setFilter] = useState("All");
  const filteredWriters =
    filter === "All"
      ? mockWriters
      : mockWriters.filter((w) => w.subject === filter);

  return (
    <section className="relative min-h-screen py-16 px-4 md:px-10 bg-white dark:bg-[#0a0a14] overflow-hidden">
      {/* Light Mode Gradient */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-400 via-purple-200 to-transparent rounded-full blur-2xl opacity-60 z-0 dark:hidden" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-300 via-purple-100 to-transparent rounded-full blur-2xl opacity-50 z-0 dark:hidden" />

      {/* Dark Mode Gradient */}
      <div className="hidden dark:block absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#0b0f2c] via-[#162447] to-transparent rounded-full blur-2xl opacity-60 z-0" />
      <div className="hidden dark:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#1b2a4b] via-[#23395d] to-transparent rounded-full blur-2xl opacity-50 z-0" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-[#18113a] dark:text-[#c7d4f7]">
          Meet Our Writers
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {subjects.map((subj) => (
            <button
              key={subj}
              onClick={() => setFilter(subj)}
              className={`px-4 py-2 rounded-full border transition-all text-sm font-medium shadow-sm
                ${
                  filter === subj
                    ? "bg-yellow-400 text-black"
                    : `
                        bg-white text-purple-800 border-purple-200 hover:bg-yellow-100
                        dark:bg-[#121a33] dark:text-[#b8c7f0] dark:border-[#2e4470] dark:hover:bg-[#1a264a]
                      `
                }`}
            >
              {subj}
            </button>
          ))}
        </div>

        {/* Writer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {filteredWriters.map((writer) => (
            <div
              key={writer.id}
              className="bg-white dark:bg-[#121a33] rounded-2xl shadow-lg dark:shadow-[#0b0f2c]/40 p-6 flex flex-col items-center text-center relative"
            >
              <img
                src={writer.image}
                alt={writer.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-purple-200 dark:border-[#2e4470] mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-[#18113a] dark:text-[#d4e0ff] mb-1">
                {writer.name}
              </h3>
              <span className="text-sm text-purple-700 dark:text-[#a4b6e6] font-medium mb-2">
                {writer.subject}
              </span>
              <p className="text-gray-700 dark:text-[#e3e9ff] mb-4">
                {writer.bio}
              </p>
              <button className="mt-auto px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md shadow transition-all font-semibold">
                Contact Writer
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writers;
