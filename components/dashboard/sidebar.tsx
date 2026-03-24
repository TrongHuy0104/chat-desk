'use client'

import Link from "next/link"
import { LayoutDashboard, BookOpen, Layers, Bot, Settings, MessageSquare } from "lucide-react"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { metadata } from "framer-motion/client";
import { useEffect, useState } from "react";
import { useUser } from "@/hooks/useUser";

const SIDEBAR_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Knowledge", href: "/dashboard/knowledge", icon: BookOpen },
  { label: "Sections", href: "/dashboard/sections", icon: Layers },
  { label: "Chatbot", href: "/dashboard/chatbot", icon: Bot },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
  {
    label: "Conversations",
    href: "/dashboard/conversations",
    icon: MessageSquare,
  },
];


export default function Sidebar() {
    const pathname = usePathname();
    const [metadata, setMetadata] = useState<{ business_name?: string }>();
    const { email} = useUser();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const fetchMetadata = async () => {
      const response = await fetch("/api/metadata/fetch");
      const res = await response.json();
      setMetadata(res.data);
      setIsLoading(false);
    };
    fetchMetadata();
  }, []);

    return (
        <aside className="flex flex-col h-screen w-64 border-r border-white/5 bg-[#050509]">
            {/* Top Logo */}
            <div className="flex h-16 items-center px-6 border-b border-white/5">
                <Link href={"/"} className="flex gap-2 items-center">
                    <div className="w-5 h-5 rounded-sm bg-white flex items-center justify-center">
                        <div className="size-2.5 bg-black rounded-[1px]"></div>
                    </div>
                    <span className="text-sm font-medium tracking-tight text-white/90">
                        ChatDesk
                    </span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {SIDEBAR_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-white/5 text-white"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5",
                            )}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom Profile */}
            <div className="border-t border-white/5 p-4">
                <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer group transition-colors">
                    <div className="rounded-full w-8 h-8 bg-zinc-800 flex items-center justify-center">
                        <span className="text-xs text-zinc-400 group-hover:text-white">
                            {metadata?.business_name?.slice(0, 2).toUpperCase() || ".."}
                        </span>
                    </div>

                    <div className="flex flex-col overflow-hidden">
                        <span className="text-sm font-medium truncate text-zinc-300 group-hover:text-white">
                            {isLoading
                                ? "Loading..."
                                : `${metadata?.business_name}'s Workspace`}
                        </span>
                        <span className="text-xs text-zinc-500 group-hover:text-white truncate">{email || ""}</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}