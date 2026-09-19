"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 right-0 z-[9999] p-6 flex justify-end items-start pointer-events-none">
      <nav aria-label="Header navigation" className="pointer-events-auto flex gap-4">

        <Button variant="ghost" asChild className="text-white/50 hover:text-white tracking-widest text-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
          <Link href="/">
            home
          </Link>
        </Button>

        <Button variant="outline" asChild className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:text-white text-white/80 transition-all duration-300 font-syne tracking-widest text-xs h-9 px-4 rounded-full font-bold focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
          <Link href="/blog">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" aria-hidden="true" />
            insights
          </Link>
        </Button>

        <Button variant="outline" asChild className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:text-white text-white/80 transition-all duration-300 font-syne tracking-widest text-xs h-9 px-4 rounded-full font-bold focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
          <Link href="/hub">
            hub
          </Link>
        </Button>

      </nav>
    </header>
  );
}
