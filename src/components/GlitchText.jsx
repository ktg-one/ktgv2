"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export function GlitchText({ children, className = "" }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const layers = el.querySelectorAll(".g-layer");
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3.2 });
    tl.to(layers[0], { x: -5, duration: 0.05, ease: "none" }, 0)
      .to(layers[0], { x: 5, duration: 0.05 }, 0.05)
      .to(layers[0], { x: 0, duration: 0.05 }, 0.1)
      .to(layers[1], { x: 5, duration: 0.05 }, 0.02)
      .to(layers[1], { x: -5, duration: 0.05 }, 0.07)
      .to(layers[1], { x: 0, duration: 0.05 }, 0.12);
    return () => {
      tl.kill();
    };
  }, [reduced]);

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        className="g-layer absolute inset-0 text-[#00f0ff] mix-blend-screen pointer-events-none"
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className="g-layer absolute inset-0 text-[#ff2a6d] mix-blend-screen pointer-events-none"
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}
