// app/privacy-policy/page.tsx
"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="text-gray-800 dark:text-gray-100 bg-white dark:bg-[#111111]" >
      {/* Hero Section */}
      <section
        className="w-full relative h-[70vh] flex flex-col justify-center items-center text-white py-20 px-6 text-center bg-white overflow-hidden"
      >
        {/* Gradient background for light mode */}
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-br from-purple-400 via-purple-200 to-transparent  blur-2xl opacity-70 z-0" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-300 via-purple-100 to-transparent blur-2xl opacity-60 z-0" />
        {/* Gradient for dark mode */}
        <div className="absolute inset-0 w-full h-full dark:bg-gradient-to-r dark:from-[#272757] dark:via-[#8686ac] dark:to-[#272757] z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#18113a] dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90 text-gray-700 dark:text-white">
            Your privacy matters to us. Here’s how we protect and use your
            information when you use our writing services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 space-y-10 leading-relaxed dark:bg-inherit  dark:shadow-purple-900/30">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: August 14, 2025
        </p>

        {[
          {
            title: "1. Introduction",
            content: (
              <p>
                Welcome to <strong>Scriptly</strong> (“we,” “our,” “us”). We
                respect your privacy and are committed to protecting your
                personal information. This Privacy Policy explains how we
                collect, use, and safeguard your information when you use our
                writing services.
              </p>
            ),
          },
          {
            title: "2. Information We Collect",
            content: (
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Personal Information</strong>: Name, email address,
                  phone number, payment details.
                </li>
                <li>
                  <strong>Order Information</strong>: Assignment details,
                  academic level, deadlines, and related files.
                </li>
                <li>
                  <strong>Technical Information</strong>: IP address, browser
                  type, device information, and cookies.
                </li>
              </ul>
            ),
          },
          {
            title: "3. How We Use Your Information",
            content: (
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide and improve our writing services.</li>
                <li>Communicate with you about orders and updates.</li>
                <li>Process secure payments.</li>
                <li>Prevent fraud and ensure service integrity.</li>
              </ul>
            ),
          },
          {
            title: "4. Data Sharing",
            content: (
              <>
                <p>
                  We do <strong>not</strong> sell, rent, or trade your personal
                  data. Your information is only shared with:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Trusted writers (for fulfilling your order).</li>
                  <li>Payment processors (for secure transactions).</li>
                  <li>Legal authorities (if required by law).</li>
                </ul>
              </>
            ),
          },
          {
            title: "5. Data Security",
            content: (
              <p>
                We implement industry-standard security measures to protect
                your information. While no system is 100% secure, we work hard
                to safeguard your data.
              </p>
            ),
          },
          {
            title: "6. Cookies",
            content: (
              <p>
                We use cookies to improve website functionality and enhance your
                experience. You can disable cookies in your browser settings.
              </p>
            ),
          },
          {
            title: "7. Your Rights",
            content: (
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal information we hold about you.</li>
                <li>Request corrections or deletion of your data.</li>
                <li>
                  Withdraw consent for data processing (may affect service).
                </li>
              </ul>
            ),
          },
          {
            title: "8. Third-Party Links",
            content: (
              <p>
                Our website may contain links to other sites. We are not
                responsible for their privacy practices.
              </p>
            ),
          },
          {
            title: "9. Changes to This Policy",
            content: (
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with the updated date.
              </p>
            ),
          },
          {
            title: "10. Contact Us",
            content: (
              <p>
                For questions about this Privacy Policy, contact us at:{" "}
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
