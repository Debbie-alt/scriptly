"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Custom Essay Writing",
    href: "/services/essay-writing",
    description:
      "Original, custom-written essays tailored to your requirements and academic level.",
  },
  {
    title: "Assignment Help",
    href: "/services/assignment-help",
    description:
      "Expert assistance with assignments across all subjects and disciplines.",
  },
  {
    title: "Research Papers",
    href: "/services/research-papers",
    description:
      "Comprehensive research and well-structured papers for any topic or field.",
  },
  {
    title: "Editing & Proofreading",
    href: "/services/editing-proofreading",
    description:
      "Professional editing and proofreading to ensure clarity, accuracy, and quality.",
  },
  {
    title: "Academic Consulting",
    href: "/services/academic-consulting",
    description:
      "Personalized academic advice and support for your educational journey.",
  },
  {
    title: "Plagiarism Checking",
    href: "/services/plagiarism-checking",
    description:
      "Advanced plagiarism detection to guarantee originality in your work.",
  },
]

export function NavMenu() {
  return (
    <NavigationMenu viewport={false} className="z-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="bg-inherit font text-sm hover:bg-transparent hover:text-black dark:text-white dark:hover:text-purple-300">
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base bg-inherit font text-sm dark:text-white dark:hover:text-purple-300">Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ' text-base bg-inherit font text-sm dark:text-white dark:hover:text-purple-300'}>
            <Link href="/about">About us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base bg-inherit font text-sm dark:text-white dark:hover:text-purple-300">Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/resources">
                    <div className="font-medium">Resources</div>
                    <div className="text-muted-foreground">
                      Access helpful guides, tools, and academic resources.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/blog">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts and academic tips.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base bg-inherit font text-sm dark:text-white dark:hover:text-purple-300">Writers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/writers">Meet Our Writers</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/writers/apply">Become a Writer</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
     
       
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}