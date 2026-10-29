"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ToolsSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".tool-card");

    // Set initial state
    gsap.set(cards, { opacity: 0, y: 50 });

    // Staggered reveal animation
    ScrollTrigger.batch(cards, {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          overwrite: true
        });
      },
      start: "top 85%",
      once: true
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black text-white py-32 px-6 z-40" id="tools-section">
      <div ref={containerRef} className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <h2 className="font-syne text-4xl md:text-6xl font-bold mb-6 lowercase">
            laboratory
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            Consolidated hub of techniques, experiments, and architectural patterns.
            <br />
            Powered by Vercel AI SDK and Next.js.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: Prompt Engineering */}
          <Link
            href="/hub/snippets"
            className="tool-card group relative p-8 border border-white/10 bg-white/5 rounded-2xl overflow-hidden hover:border-white/30 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Prompt Engineering - Explore code snippets"
          >
            <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 text-white/70" />
            </div>
            <div className="h-12 w-12 mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
              <span className="font-mono text-emerald-400 font-bold">01</span>
            </div>
            <h3 className="font-syne text-2xl font-bold mb-3">Prompt Engineering</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Advanced context continuation strategies and chain-of-thought optimization patterns.
            </p>
            <div className="mt-auto">
              <span className="text-xs font-mono text-white/30 uppercase tracking-widest border border-white/10 px-2 py-1 rounded group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors">
                Technique &rarr;
              </span>
            </div>
          </Link>

          {/* Card 2: RAG Architectures */}
          <Link
            href="/hub"
            className="tool-card group relative p-8 border border-white/10 bg-white/5 rounded-2xl overflow-hidden hover:border-white/30 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="RAG Architectures - Open Hub"
          >
            <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 text-white/70" />
            </div>
            <div className="h-12 w-12 mb-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
              <span className="font-mono text-blue-400 font-bold">02</span>
            </div>
            <h3 className="font-syne text-2xl font-bold mb-3">RAG Architectures</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Retrieval-Augmented Generation using vector embeddings and semantic search.
            </p>
            <div className="mt-auto flex gap-2">
              <span className="text-xs font-mono text-white/30 uppercase tracking-widest border border-white/10 px-2 py-1 rounded group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
                Architecture &rarr;
              </span>
            </div>
          </Link>

          {/* Card 3: Vercel AI SDK */}
          <Link
            href="/hub/chat"
            className="tool-card group relative p-8 border border-white/10 bg-white/5 rounded-2xl overflow-hidden hover:border-white/30 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="AI Playground - Launch chat interface"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 text-white/70" />
            </div>

            <div className="h-12 w-12 mb-6 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
              <span className="font-mono text-purple-400 font-bold">AI</span>
            </div>
            <h3 className="font-syne text-2xl font-bold mb-3">AI Playground</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Interactive streaming chat interface powered by Vercel AI SDK.
            </p>

            {/* Placeholder Input UI */}
            <div className="bg-black/40 border border-white/10 rounded-lg p-3 mb-4 group-hover:border-purple-500/30 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-white/40 font-mono">System Ready</span>
              </div>
              <div className="mt-2 text-xs text-white/30 font-mono">
                &gt; Awaiting input keys...
              </div>
            </div>

            <div className="mt-auto">
              <span className="text-xs font-mono text-white/30 uppercase tracking-widest border border-white/10 px-2 py-1 rounded group-hover:border-purple-500/30 group-hover:text-purple-400 transition-colors">
                Launch Chat &rarr;
              </span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
