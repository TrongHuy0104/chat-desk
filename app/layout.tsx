import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Vortex } from "@/components/ui/vortex";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ChatDesk - AI Powered Customer Support",
  description: "Instantly resolve customer queries with AI assistant that reads your docs and answers questions with empathy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    className="no-scrollbar"
      lang="en"
    >
      <body className={`${inter.variable} bg-[#050509] min-h-screen flex flex-col p-0 text-zinc-100 antialiased font-sans`}>
        <div className="fixed inset-0 -z-20 pointer-events-none">
          <Vortex backgroundColor="transparent" particleCount={500} baseHue={220} className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[#050509] via-transparent to-transparent opacity-80 pointer-events-none"/>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}