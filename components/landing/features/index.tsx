import { BookOpen, MessageCircleHeart, ShieldCheck } from "lucide-react";

export default function Features() {
    return (
        <section id="features" className="py-32 px-6 max-w-6xl mx-auto">
            <div className="mb-20">
                <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                    Designed for trust.
                </h2>
                <p className="text-xl text-zinc-500 font-light max-w-xl leading-relaxed">
                    Most AI support tools hallucinate. Ours is strictly grounded in your content, with transparent citations and guardrails that keep conversations safe and on-brand.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group p-8 rounded-3xl border border-white/5 bg-linear-to-b from-white/3 to-transparent hover:hover-white/10 transition-colors">
                    <div className="size-12 rounded-2xl bg-[#0a0a0e] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                        <BookOpen className="size-6 text-zinc-300"/>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-3">
                        Knowledge Graph
                    </h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                        We crawl your site and docs to build a structured understanding of your products. No manual training required.
                    </p>
                </div>

                <div className="group p-8 rounded-3xl border border-white/5 bg-linear-to-b from-white/3 to-transparent hover:hover-white/10 transition-colors">
                    <div className="size-12 rounded-2xl bg-[#0a0a0e] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                        <ShieldCheck className="size-6 text-zinc-300"/>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-3">
                        Strict Guardrails
                    </h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Define exactly what the AI can and cannot say. It will politely decline out-of-scope questions and stay on-brand.
                    </p>
                </div>
                
                <div className="group p-8 rounded-3xl border border-white/5 bg-linear-to-b from-white/3 to-transparent hover:hover-white/10 transition-colors">
                    <div className="size-12 rounded-2xl bg-[#0a0a0e] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                        <MessageCircleHeart className="size-6 text-zinc-300"/>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-3">
                        Tone Matching
                    </h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Whether you&apos;re professional, casual, or quirky, ChatDesk adapts to your brand voice.
                    </p>
                </div>
            </div>
        </section>
    )
}