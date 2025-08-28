"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import Link from 'next/link'

const mockWriters = [
  { id: 1, name: "Jane Doe", subject: "Literature", image: "https://randomuser.me/api/portraits/women/44.jpg", bio: "Expert in English Literature and creative writing with 10+ years of experience.", rating: 5 },
  { id: 2, name: "John Smith", subject: "Mathematics", image: "https://randomuser.me/api/portraits/men/32.jpg", bio: "Mathematics PhD, specializes in calculus, statistics, and problem solving.", rating: 4 },
  { id: 3, name: "Emily Carter", subject: "History", image: "https://randomuser.me/api/portraits/women/68.jpg", bio: "History buff with a knack for research and academic writing.", rating: 5 },
  { id: 4, name: "Michael Lee", subject: "Science", image: "https://randomuser.me/api/portraits/men/65.jpg", bio: "Science communicator and academic writer in biology and chemistry.", rating: 4 },
  { id: 5, name: "Sophia Turner", subject: "Business", image: "https://randomuser.me/api/portraits/women/12.jpg", bio: "MBA graduate, specializes in business plans and case studies.", rating: 5 },
  { id: 6, name: "Daniel Kim", subject: "Philosophy", image: "https://randomuser.me/api/portraits/men/75.jpg", bio: "Philosophy enthusiast, experienced in ethics, logic, and critical essays.", rating: 3 },
];

const subjects = ["All", ...Array.from(new Set(mockWriters.map((w) => w.subject)))];

const Writers = () => {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 3;

  const filteredWriters =
    filter === "All" ? mockWriters : mockWriters.filter((w) => w.subject === filter);

  const totalPages = Math.ceil(filteredWriters.length / perPage);
  const displayedWriters = filteredWriters.slice((page - 1) * perPage, page * perPage);

  return (
    <section className="relative min-h-screen py-16 px-4 md:px-10 bg-white dark:bg-[#111111] overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#1a1a1a]/40 via-[#111111]/30 to-transparent rounded-full blur-2xl opacity-30 z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#1a1a1a]/40 via-[#111111]/30 to-transparent rounded-full blur-2xl opacity-20 z-0" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10 text-[#0f0e47] dark:text-[#f5f5f5]">
          Meet Our Writers
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {subjects.map((subj) => (
            <button
              key={subj}
              onClick={() => {
                setFilter(subj);
                setPage(1);
              }}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all
                ${
                  filter === subj
                    ? "bg-gray-800 text-white border-gray-600 shadow"
                    : "bg-white text-[#0f0e47] border-gray-200 hover:border-gray-400 dark:bg-[#1a1a1a] dark:text-[#ccc] dark:border-[#222] dark:hover:border-gray-500"
                }`}
            >
              {subj}
            </button>
          ))}
        </div>

        {/* Writer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedWriters.map((writer) => (
            <div
              key={writer.id}
              className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-md dark:shadow-black/30 p-6 flex flex-col items-center text-center relative hover:shadow-xl hover:-translate-y-1 transition"
            >
              <img
                src={writer.image}
                alt={writer.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 dark:border-[#222] mb-4 shadow-md"
              />
              <h3 className="text-lg font-semibold text-[#0f0e47] dark:text-[#f5f5f5] mb-1">
                {writer.name}
              </h3>
              <span className="text-sm text-[#272757] dark:text-[#aaa] font-medium mb-2">
                {writer.subject}
              </span>

              {/* ⭐ Ratings */}
              <div className="flex justify-center mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < writer.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-[#bbb] mb-4 text-sm">
                {writer.bio}
              </p>
              <Link href='/signup' className="mt-auto px-5 py-2 bg-[#0f0e47] hover:bg-[#272757] dark:bg-[#222] dark:hover:bg-[#333] text-white rounded-md shadow transition-all font-medium">
                Contact Writer
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-3">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`w-9 h-9 flex items-center justify-center rounded-full font-medium transition-all
                  ${
                    page === num
                      ? "border-[#0f0e47] dark:border-gray-400 border-2 text-black dark:text-white"
                      : "bg-gray-100 dark:bg-[#1a1a1a] text-[#0f0e47] dark:text-[#ccc] hover:bg-gray-200 dark:hover:bg-[#2a2a2a]"
                  }`}
              >
                {num}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Writers;
