import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 bg-black/40">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <Link href={'/'} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-sm bg-white flex items-center justify-center">
                        <div className="size-2.5 bg-black rounded-[1px]"></div>
                    </div>
                    <span className="text-base font-medium text-white/90">ChatDesk</span>
                </Link> 

                <div className="flex gap-8 text-sm text-zinc-600 font-light">
                    <Link href={"#"} className="hover:text-zinc-400 transition-colors">Privacy</Link>
                    <Link href={"#"} className="hover:text-zinc-400 transition-colors">Terms</Link>
                    <Link href={"#"} className="hover:text-zinc-400 transition-colors">Contact</Link>
                </div>

                <div className="text-center text-xs text-zinc-700 font-light">
                    &copy; {new Date().getFullYear()} ChatDesk. All rights reserved.
                </div>
            </div>
        </footer>
    )
}