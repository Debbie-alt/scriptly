"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { motion } from "framer-motion"

const components: { title: string; href: string }[] = [
  { title: "Custom Essay Writing", href: "/writers" },
  { title: "Research Papers", href: "/writers" },
  { title: "Editing & Proofreading", href: "/proofreading" },
  { title: "Academic Consulting", href: "/academic-consulting" },
  { title: "Plagiarism Checking", href: "/plagiarism-checking" },
  { title: "Paraphraser / Summarizer", href: "/paraphraser" },
  { title: "Text Generator", href: "/text-generator" },
  // { title: "Text to Speech", href: "/services/text-to-speech" },
]

export function NavMenu({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    // 📱 Mobile Vertical Menu
    return (
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-4 w-full"
      >
        <li>
          <Link href="/" className="block text-base font-medium hover:text-purple-600 dark:text-white">
            Home
          </Link>
        </li>

        <li>
          <p className="font-semibold text-sm text-gray-600 dark:text-gray-300">Services</p>
          <ul className="pl-3 flex flex-col gap-2 mt-2">
            {components.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="block text-sm hover:text-purple-600 dark:text-gray-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <Link
            href="/about"
            className="block text-base font-medium hover:text-purple-600 dark:text-white"
          >
            About us
          </Link>
        </li>

        <li>
          <p className="font-semibold text-sm text-gray-600 dark:text-gray-300">Resources</p>
          <ul className="pl-3 flex flex-col gap-2 mt-2">
            <li>
              <Link href="/resources" className="block text-sm hover:text-purple-600 dark:text-gray-200">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block text-sm hover:text-purple-600 dark:text-gray-200">
                Blog
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <p className="font-semibold text-sm text-gray-600 dark:text-gray-300">Writers</p>
          <ul className="pl-3 flex flex-col gap-2 mt-2">
            <li>
              <Link href="/writers" className="block text-sm hover:text-purple-600 dark:text-gray-200">
                Meet Our Writers
              </Link>
            </li>
            <li>
              <Link href="/writers/apply" className="block text-sm hover:text-purple-600 dark:text-gray-200">
                Become a Writer
              </Link>
            </li>
          </ul>
        </li>
      </motion.ul>
    )
  }

  // 💻 Desktop Dropdown Menu
  return (
    <NavigationMenu viewport={false} className="z-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="bg-inherit text-sm hover:text-black dark:text-white dark:hover:text-purple-300">
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base bg-inherit text-sm dark:text-white dark:hover:text-purple-300">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-2">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + " text-base bg-inherit text-sm dark:text-white dark:hover:text-purple-300"}>
            <Link href="/about">About us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base bg-inherit text-sm dark:text-white dark:hover:text-purple-300">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/resources">
                    <div className="font-medium">Resources</div>
                    <div className="text-muted-foreground">Access helpful guides, tools, and academic resources.</div>
                  </Link>
                </NavigationMenuLink>
                {/* <NavigationMenuLink asChild> */}
                  {/* <Link href="/blog">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">Read our latest blog posts and academic tips.</div>
                  </Link>
                </NavigationMenuLink> */}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base bg-inherit text-sm dark:text-white dark:hover:text-purple-300">
            Writers
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/writers">Meet Our Writers</Link>
                </NavigationMenuLink>
                {/* <NavigationMenuLink asChild>
                  <Link href="/writers/apply">Become a Writer</Link>
                </NavigationMenuLink> */}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({ title, href }: { title: string; href: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
