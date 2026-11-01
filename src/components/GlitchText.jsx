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

    // OPTIMIZATION: Start timeline paused initially. Use IntersectionObserver to play
    // timeline only when visible in viewport, eliminating main-thread ticks and style re-evaluations
    // when off-screen.
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3.2, paused: true });
    tl.to(layers[0], { x: -5, duration: 0.05, ease: "none" }, 0)
      .to(layers[0], { x: 5, duration: 0.05 }, 0.05)
      .to(layers[0], { x: 0, duration: 0.05 }, 0.1)
      .to(layers[1], { x: 5, duration: 0.05 }, 0.02)
      .to(layers[1], { x: -5, duration: 0.05 }, 0.07)
      .to(layers[1], { x: 0, duration: 0.05 }, 0.12);

    let observer;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            tl.play();
          } else {
            tl.pause();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    } else {
      tl.play();
    }

    return () => {
      if (observer) observer.disconnect();
      tl.kill();
    };
  }, [reduced]);

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      {/* OPTIMIZATION: Added will-change-transform so layer shifts run on GPU compositor */}
      <span
        className="g-layer absolute inset-0 text-[#00f0ff] mix-blend-screen pointer-events-none will-change-transform"
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className="g-layer absolute inset-0 text-[#ff2a6d] mix-blend-screen pointer-events-none will-change-transform"
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}
