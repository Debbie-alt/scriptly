"use client"

import React, { useState } from "react"
import Link from "next/link"
import { NavMenu } from "./NavMenu"
import { FiLogOut, FiMenu, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/40 dark:bg-black/40 backdrop-blur-md px-4 md:px-8 py-2 flex items-center justify-between z-40">
      <div className="flex items-center gap-3">
        <img
          src="/logo2.png"
          alt="Logo"
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="hidden lg:block">
          <NavMenu />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="signin"
          className="hidden sm:block dark:text-white text-sm font-medium"
        >
          Login
        </Link>

        <Link href="signin" className="hidden lg:block">
          <span className="bg-[#0f0e47] text-white px-5 sm:px-7 py-2.5 rounded-md text-sm hover:bg-[#272757]/80 transition flex items-center gap-2">
            <FiLogOut className="w-4 h-4" />
           Book a Demo
          </span>
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          className="lg:hidden text-2xl dark:text-white ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav (Slide-down) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-[#111] shadow-md flex flex-col items-center p-6 z-50 lg:hidden"
          >
            {/* NavMenu inside panel */}
            <NavMenu />

            {/* Extra links for mobile */}
            <Link
              href="signin"
              className="mt-6 text-gray-800 dark:text-gray-200 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="signin"
              onClick={() => setIsOpen(false)}
              className="mt-3 bg-[#0f0e47] text-white px-5 py-2.5 rounded-md text-sm hover:bg-[#272757]/80 transition flex items-center gap-2 justify-center"
            >
              <FiLogOut className="w-4 h-4" /> Book a Demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
