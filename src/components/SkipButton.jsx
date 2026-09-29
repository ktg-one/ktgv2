"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export function SkipButton() {
  const buttonRef = useRef(null);

  useGSAP(() => {
    if (!buttonRef.current) return;
    // Fade in after a delay to allow initial hero impact
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, delay: 2, duration: 1, ease: "power2.out" }
    );
  }, { scope: buttonRef });

  const handleSkip = () => {
    // Scroll directly to main content immediately following the hero
    const mainContent = document.getElementById('main-content');

    if (mainContent) {
      if (window.lenis) {
        window.lenis.scrollTo(mainContent);
      } else {
        mainContent.scrollIntoView({ behavior: "smooth" });
      }
      // Move focus to main content for screen readers and keyboard navigation
      mainContent.focus({ preventScroll: true });
    } else {
      // Fallback: scroll past hero height
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }

    // Set session flags so subsequent animations/intros know user bypassed intro
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('hero-animated', 'true');
      sessionStorage.setItem('hero-transition-played', 'true');
      sessionStorage.setItem('intro-completed', 'true');
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleSkip}
      aria-label="Skip introduction animation and navigate to main content"
      className="absolute bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors border border-white/10 hover:border-white/30 rounded-full bg-black/20 backdrop-blur-sm opacity-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <span>Skip Intro</span>
      <ArrowDown className="w-3 h-3" aria-hidden="true" />
    </button>
  );
}
