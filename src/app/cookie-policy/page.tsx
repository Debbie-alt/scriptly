"use client";

import React from "react";

export default function CookiePolicy() {
  return (
    <main className="text-gray-800 dark:text-gray-100 bg-white dark:bg-[#111111]">
      <section className="w-full relative h-[60vh] flex flex-col justify-center items-center text-white py-20 px-6 text-center bg-white overflow-hidden">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-br from-purple-400 via-purple-200 to-transparent blur-2xl opacity-70 z-0" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-300 via-purple-100 to-transparent blur-2xl opacity-60 z-0" />
        <div className="absolute inset-0 w-full h-full dark:bg-gradient-to-r dark:from-[#272757] dark:via-[#8686ac] dark:to-[#272757] z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-[#18113a] dark:text-white">
            Cookie Policy
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90 text-gray-700 dark:text-white">
            This Cookie Policy explains how Scriptly uses cookies and similar
            technologies to recognize you when you visit our website. It explains
            what these technologies are, why we use them, and your rights to
            control our use of them.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 space-y-10 leading-relaxed dark:bg-inherit dark:shadow-purple-900/30">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: August 20, 2025
        </p>

        {[
          {
            title: "1. What Are Cookies?",
            content: (
              <p>
                Cookies are small data files placed on your device when you visit
                a website. They are widely used to make websites work, or work
                more efficiently, as well as to provide reporting information and
                assist with personalized experiences.
              </p>
            ),
          },
          {
            title: "2. How We Use Cookies",
            content: (
              <ul className="list-disc pl-6 space-y-1">
                <li>To remember your preferences and settings.</li>
                <li>To keep you logged in and maintain your session.</li>
                <li>To analyze site traffic and usage for improvement.</li>
                <li>To provide relevant content and features.</li>
              </ul>
            ),
          },
          {
            title: "3. Types of Cookies We Use",
            content: (
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the website to
                  function and cannot be switched off.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Help us understand how
                  visitors interact with our site.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> Enable enhanced
                  functionality and personalization.
                </li>
                <li>
                  <strong>Targeting Cookies:</strong> May be set through our site
                  by advertising partners to build a profile of your interests.
                </li>
              </ul>
            ),
          },
          {
            title: "4. Managing Cookies",
            content: (
              <p>
                You can control and/or delete cookies as you wish. Most browsers
                allow you to refuse or accept cookies, as well as to delete them.
                Please note that disabling cookies may affect the functionality
                of our website.
              </p>
            ),
          },
          {
            title: "5. Third-Party Cookies",
            content: (
              <p>
                Some cookies may be set by third-party services that appear on
                our pages. We do not control the use of these cookies and
                recommend checking the respective privacy policies for more
                information.
              </p>
            ),
          },
          {
            title: "6. Updates to This Policy",
            content: (
              <p>
                We may update this Cookie Policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            ),
          },
          {
            title: "7. Contact Us",
            content: (
              <p>
                If you have any questions about our use of cookies, please
                contact us at:{" "}
                <a
                  href="mailto:support@scriptly.com"
                  className="text-purple-600 dark:text-purple-400 underline"
                >
                  support@scriptly.com
                </a>
              </p>
            ),
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <div className="text-gray-700 dark:text-gray-300">
              {section.content}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
