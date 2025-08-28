'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

/**
 * OurStorySection – Next.js (App Router) friendly component
 * TailwindCSS only. Drop into any page.
 *
 * Props let you customize copy, images, and stats without touching JSX.
 */
export type OurStoryProps = {
  companyName?: string
  foundedYear?: string
  coverImageSrc?: string
  coverImageAlt?: string
  mission?: string
  vision?: string
  highlights?: string[]
  stats?: {
    papersDelivered?: string
    satisfactionRate?: string
    experts?: string
    countriesServed?: string
  }
}

const defaultContent: Required<OurStoryProps> = {
  companyName: 'Scriptly',
  foundedYear: '2024',
  coverImageSrc: '/our-story2.jpg',
  coverImageAlt: 'Students collaborating with a mentor while writing',
  mission:
    'To make high‑quality academic and professional writing support accessible, ethical, and on‑time for learners and teams everywhere.',
  vision:
    'A world where clarity wins—where every idea, application, and research project is communicated with confidence.',
  highlights: [
    'Human experts first, AI‑assisted where helpful',
    'Zero‑plagiarism, originality reports on request',
    'Secure, confidential, deadline‑driven delivery',
  ],
  stats: {
    papersDelivered: '10,000+',
    satisfactionRate: '95%+',
    experts: '150+',
    countriesServed: '30+',
  },
}

export default function OurStorySection(props: OurStoryProps) {
  const content = {
    ...defaultContent,
    ...props,
    stats: { ...defaultContent.stats, ...(props.stats || {}) },
  }

  return (
    <section
      aria-labelledby="our-story-heading"
      className="relative overflow-hidden"
    >
      {/* soft gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-violet-50 via-white to-white dark:from-violet-950/40 dark:via-background dark:to-background" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1 text-xs font-medium text-violet-700 shadow-sm dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden
            >
              <path d="M11.7 2.3a1 1 0 0 1 1.6 0l1.9 2.8a1 1 0 0 0 .7.4l3.3.5a1 1 0 0 1 .6 1.7l-2.4 2.3a1 1 0 0 0-.3.9l.6 3.3a1 1 0 0 1-1.4 1.1l-3-1.6a1 1 0 0 0-1 0l-3 1.6a1 1 0 0 1-1.4-1.1l.6-3.3a1 1 0 0 0-.3-.9L4.2 7.7a1 1 0 0 1 .6-1.7l3.3-.5a1 1 0 0 0 .7-.4l1.9-2.8Z" />
            </svg>
            Our Story
          </span>
          <h2
            id="our-story-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
          >
            How {content.companyName} began—and where we’re headed
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Founded in {content.foundedYear}, {content.companyName} started as a small group of
            educators and editors helping classmates meet tough deadlines. Today, we’re a
            full‑service writing partner for students, researchers, and teams who want
            quality without the stress.
          </p>
        </motion.div>

        {/* Grid: copy left, image right */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Mission & Vision cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm dark:border-violet-800 dark:bg-slate-900">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {content.mission}
                </p>
              </div>
              <div className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm dark:border-violet-800 dark:bg-slate-900">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  Our Vision
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {content.vision}
                </p>
              </div>
            </div>

            {/* Highlights list */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-300">
                What we stand for
              </h3>
              <ul className="mt-3 space-y-3">
                {content.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700 ring-1 ring-inset ring-violet-200 dark:bg-violet-900/40 dark:text-violet-200 dark:ring-violet-800">
                      {/* check icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-3.5 w-3.5"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-2.59a.75.75 0 1 0-1.22-.92l-3.3 4.37-1.51-1.51a.75.75 0 0 0-1.06 1.06l2.1 2.1c.31.31.82.28 1.08-.07l3.93-5.03Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-sm leading-6">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Stat label="Papers delivered" value={content.stats.papersDelivered!} />
              <Stat label="Satisfaction" value={content.stats.satisfactionRate!} />
              <Stat label="Experts" value={content.stats.experts!} />
              <Stat label="Countries" value={content.stats.countriesServed!} />
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200 shadow-2xl shadow-violet-200/40 dark:border-slate-800 dark:shadow-violet-900/20">
              <Image
                src={content.coverImageSrc!}
                alt={content.coverImageAlt!}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="text-2xl font-medium tracking-tight text-slate-900 dark:text-slate-50">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </div>
    </div>
  )
}

/*
USAGE (App Router):

import OurStorySection from '@/components/OurStorySection'

export default function AboutPage() {
  return (
    <main>
      <OurStorySection
        companyName="Scriptly"
        foundedYear="2023"
        coverImageSrc="/hero/study-collab.jpg"
        mission="To deliver ethical, expertly crafted writing that helps our clients win scholarships, jobs, and grades."
        vision="To be the most trusted writing partner across Africa and beyond."
        highlights={[
          'Expert academics & industry writers',
          'Originality checks on request',
          'Private & deadline‑reliable',
        ]}
        stats={{ papersDelivered: '2,500+', satisfactionRate: '97%', experts: '60+', countriesServed: '12+' }}
      />
    </main>
  )
}
*/
