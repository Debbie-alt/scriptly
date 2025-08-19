"use client";

import React from "react";
import { FaBookOpen, FaRobot, FaUserGraduate, FaRegLightbulb, FaRegFileAlt, FaLifeRing } from "react-icons/fa";
import FaqCard from "./FaqCard";

const FaqGrid = () => {
  const faqItems = [
    {
      title: "How Scriptly Works",
      description: "Step-by-step guide to ordering essays and assignments.",
      icon: FaBookOpen,
      link: "/faq/how-it-works",
    },
    {
      title: "Using AI Tools",
      description: "How to use our AI-powered writing and research tools.",
      icon: FaRobot,
      link: "/faq/ai-tools",
    },
    {
      title: "Free vs Paid Features",
      description: "What tools and services are free, and what are premium?",
      icon: FaRegLightbulb,
      link: "/faq/free-vs-paid",
    },
    {
      title: "Academic Integrity",
      description: "How we ensure originality and avoid plagiarism.",
      icon: FaRegFileAlt,
      link: "/faq/integrity",
    },
    {
      title: "Meet Our Writers",
      description: "Learn about our expert writers and their qualifications.",
      icon: FaUserGraduate,
      link: "/faq/writers",
    },
    {
      title: "Support & Troubleshooting",
      description: "Get help with your orders, tools, or account.",
      icon: FaLifeRing,
      link: "/faq/support",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden " style={{ minHeight: '60vh' }}>
      {/* Gradient blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-[#505081] via-[#0f0e47] to-transparent rounded-full blur-3xl opacity-60 z-0" />
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-900 via-purple-600 to-transparent rounded-full blur-2xl opacity-50 z-0" /> */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 items-stretch sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {faqItems.map((item, index) => (
          <FaqCard key={index} {...item} iconColor="#3b2e7e" />
        ))}
      </div>
    </section>
  );
};

export default FaqGrid;
