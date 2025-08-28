"use client";

import { FileText, Wand2, Bot, Settings, Clock } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

// Scriptly dashboard nav items
const items = [
  {
    title: "Generate",
    url: "#",
    icon: Wand2,
  },
  {
    title: "Proofread",
    url: "#",
    icon: FileText,
  },
  {
    title: "AI Chat",
    url: "#",
    icon: Bot,
  },
  {
    title: "History",
    url: "#",
    icon: Clock,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r bg-gradient-to-b from-gray-900 to-gray-800 dark:text-white">
      <SidebarContent>
        {/* Brand */}
        <div className="px-4 py-6 text-center border-b border-gray-700">
          <h1 className="text-2xl font-bold">✍️ Scriptly</h1>
          {/* <p className="text-xs text-gray-400">Dashboard</p> */}
        </div>

        {/* Main Nav */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">
            Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-700 transition"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Construction Placeholder */}
        <div className="mt-6 px-4">
          <p className="text-sm text-gray-400 mb-3">🚧 Coming Soon</p>
          <div className="space-y-2">
            <Skeleton className="h-6 w-3/4 rounded-md bg-gray-700" />
            <Skeleton className="h-6 w-2/3 rounded-md bg-gray-700" />
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
