"use client";

import { useUser } from "@/hooks/useUser";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    const { email, loading } = useUser()

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Only handle internal hash links
        const href = e.currentTarget.href;
        if (href.includes("#")) {
            e.preventDefault();
            const targetId = href.replace(/.*\#/, "");
            const elem = document.getElementById(targetId);
            elem?.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-sm border-b border-white/5 bg-[#050509]/50">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href={'/'} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-sm bg-white flex items-center justify-center">
                        <div className="size-2.5 bg-black rounded-[1px]"></div>
                    </div>
                    <span className="text-base font-medium text-white/90">ChatDesk</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-light text-zinc-400">
                    <Link href={"#features"} onClick={handleScroll} className="hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href={"#how-it-works"} onClick={handleScroll} className="hover:text-white transition-colors">
                        Integration
                    </Link>
                    <Link href={"#pricing"} onClick={handleScroll} className="hover:text-white transition-colors">
                        Pricing
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    {
                        loading ? (
                            <div className="w-8 h-8 rounded-full bg-white/10 animate-pulse"></div>
                        ) : email ? (
                            <div className="flex items-center gap-3">
                                <Link href={"/dashboard"} className="text-sm font-medium text-black bg-white px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                                    Dashboard
                                </Link>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <span className="text-xs font-medium text-white/90">{email[0].toUpperCase()}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link href={"/api/auth"} className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                                    Sign In
                                </Link>
                                <Link href={"/api/auth"} className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                                    Get Started
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    );
}