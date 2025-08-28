"use client";

import React from "react";

export default function TermsOfService() {
  return (
    <main className="text-gray-800 dark:text-gray-100 bg-white dark:bg-[#111111]">
      <section className="w-full relative h-[70vh] flex flex-col justify-center items-center text-white py-20 px-6 text-center bg-white overflow-hidden">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-br from-purple-400 via-purple-200 to-transparent blur-2xl opacity-70 z-0" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-300 via-purple-100 to-transparent blur-2xl opacity-60 z-0" />
        <div className="absolute inset-0 w-full h-full dark:bg-gradient-to-r dark:from-[#272757] dark:via-[#8686ac] dark:to-[#272757] z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-[#18113a] dark:text-white">
            Terms of Service
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90 text-gray-700 dark:text-white">
            Please read these Terms of Service carefully before using Scriptly.
            By accessing or using our writing services, you agree to be bound by
            these terms.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 space-y-10 leading-relaxed dark:bg-inherit dark:shadow-purple-900/30">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: August 14, 2025
        </p>

        {[
          {
            title: "1. Acceptance of Terms",
            content: (
              <p>
                By using <strong>Scriptly</strong> (“we,” “our,” “us”), you
                confirm that you have read, understood, and agree to these Terms
                of Service. If you do not agree, please discontinue use of our
                platform immediately.
              </p>
            ),
          },
          {
            title: "2. Services Provided",
            content: (
              <p>
                Scriptly offers academic and professional writing, editing, and
                consulting services. These services are intended for reference,
                learning, and guidance purposes only. You may not submit our
                work as your own without proper acknowledgment.
              </p>
            ),
          },
          {
            title: "3. User Responsibilities",
            content: (
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Provide accurate and complete information when placing orders.
                </li>
                <li>Use our services for lawful purposes only.</li>
                <li>
                  Do not misuse or distribute our work in violation of
                  applicable laws or academic integrity policies.
                </li>
              </ul>
            ),
          },
          {
            title: "4. Orders and Payments",
            content: (
              <p>
                All orders must be paid in full before work begins. Payments are
                processed securely through trusted third-party providers. Prices
                and turnaround times will be provided before checkout.
              </p>
            ),
          },
          {
            title: "5. Revisions and Refunds",
            content: (
              <>
                <p>
                  We provide free revisions within the agreed scope of work.
                  Refunds are available in specific cases, including:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Non-delivery of an order.</li>
                  <li>Work that does not meet the agreed specifications.</li>
                  <li>Duplicate or accidental payments.</li>
                </ul>
              </>
            ),
          },
          {
            title: "6. Intellectual Property",
            content: (
              <p>
                All content provided by Scriptly remains the intellectual
                property of Scriptly until full payment is received. Upon full
                payment, the user is granted limited rights to use the content
                for personal, educational, or professional purposes as intended.
              </p>
            ),
          },
          {
            title: "7. Limitation of Liability",
            content: (
              <p>
                Scriptly is not liable for any indirect, incidental, or
                consequential damages arising from the use of our services. We
                do not guarantee grades, academic performance, or professional
                outcomes.
              </p>
            ),
          },
          {
            title: "8. Termination of Use",
            content: (
              <p>
                We reserve the right to suspend or terminate access to our
                services if a user violates these Terms of Service or engages in
                harmful activities.
              </p>
            ),
          },
          {
            title: "9. Changes to Terms",
            content: (
              <p>
                We may update these Terms of Service from time to time. Any
                changes will be effective immediately upon posting on this page,
                with the updated date noted.
              </p>
            ),
          },
          {
            title: "10. Contact Us",
            content: (
              <p>
                If you have any questions about these Terms of Service, please
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
