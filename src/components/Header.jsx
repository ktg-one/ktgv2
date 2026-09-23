"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();

  const isHomeActive = pathname === "/";
  const isBlogActive = pathname === "/blog" || pathname.startsWith("/blog/");
  const isHubActive = pathname === "/hub" || pathname.startsWith("/hub/");

  return (
    <header className="fixed top-0 right-0 z-[9999] p-6 flex justify-end items-start pointer-events-none">
      <nav aria-label="Header quick links" className="pointer-events-auto flex gap-4">

        <Button variant="ghost" asChild className="text-white/50 hover:text-white tracking-widest text-xs cursor-pointer">
          <Link href="/" aria-current={isHomeActive ? "page" : undefined}>
            home
          </Link>
        </Button>

        <Button variant="outline" asChild className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:text-white text-white/80 transition-all duration-300 font-syne tracking-widest text-xs h-9 px-4 rounded-full font-bold">
          <Link href="/blog" aria-current={isBlogActive ? "page" : undefined}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" />
            insights
          </Link>
        </Button>

        <Button variant="outline" asChild className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:text-white text-white/80 transition-all duration-300 font-syne tracking-widest text-xs h-9 px-4 rounded-full font-bold">
          <Link href="/hub" aria-current={isHubActive ? "page" : undefined}>
            hub
          </Link>
        </Button>

      </nav>
    </header>
  );
}
