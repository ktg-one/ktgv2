"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export function GlitchText({ children, className = "" }) {
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const l1 = layer1Ref.current;
    const l2 = layer2Ref.current;
    if (!l1 || !l2) return;

    // OPTIMIZATION: Direct ref targets avoid querySelectorAll DOM traversals on mount,
    // and Tailwind `will-change-transform` promotes glitch layers to GPU layers.
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3.2 });
    tl.to(l1, { x: -5, duration: 0.05, ease: "none" }, 0)
      .to(l1, { x: 5, duration: 0.05 }, 0.05)
      .to(l1, { x: 0, duration: 0.05 }, 0.1)
      .to(l2, { x: 5, duration: 0.05 }, 0.02)
      .to(l2, { x: -5, duration: 0.05 }, 0.07)
      .to(l2, { x: 0, duration: 0.05 }, 0.12);

    return () => {
      tl.kill();
    };
  }, [reduced]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        ref={layer1Ref}
        className="g-layer absolute inset-0 text-[#00f0ff] mix-blend-screen pointer-events-none will-change-transform"
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        ref={layer2Ref}
        className="g-layer absolute inset-0 text-[#ff2a6d] mix-blend-screen pointer-events-none will-change-transform"
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}
