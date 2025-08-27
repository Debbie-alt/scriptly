"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark"

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-9 h-9 bg-white rounded-full border border-gray-300 bg-inherit hover:bg-gray-100 dark:bg-gray-800 transition-colors duration-200 focus:outline-none"
      type="button"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          isDark ? "scale-0 rotate-90 absolute" : "scale-100 rotate-0"
        }`}
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] text-white transition-all duration-300 ${
          isDark ? "scale-100 text-white rotate-0" : "scale-0 -rotate-90 absolute"
        }`}
      />
    </button>
  )
}
