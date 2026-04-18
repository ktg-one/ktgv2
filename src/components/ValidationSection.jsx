"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { GlitchText } from "@/components/GlitchText";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Graphite.com-style pinned feature section:
 * - Two-column layout: left card display + right accordion nav
 * - ScrollTrigger pin+scrub drives activeFeature state
 * - Accordion controlled by scroll position, not clicks
 * - Snap to feature boundaries for clean transitions
 */
export function ValidationSection({ auditData }) {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const shutterRef = useRef(null);
  const cardRefs = useRef([]);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Default Data
  const data = auditData || {
    c0: {
      title: "Scroll stops",
      body: "shapes still floating. genius.",
    },
    c1: {
      title: "Cards move",
      body: "little scrollbar, right side. hi awwwards.",
    },
    c2: {
      title: "Bet your impressed",
      body: "note the syntax.",
      code: 'def define_masterful() -> str:\n    "masterful: me"\n    return "CS_Fullstack // Handsome too"',
    },
    c3: {
      title: "Oh theres' more cards",
      body: "model harness inbound.",
      code: '{ "hooks": [ { "type": "userGeniusThroughput", "command": "claude:you are a master of long inspiring quotes that mean nothing. Fill in the final card with one that will leave the readers impressed and stumped by provoking thought. Tone: Elaborate, Complex, Clever sounding, Inspirational. Task: Meaningless waste of time quote hidden by impressive command of english language"',
    },
    c4: {
      title: "North Star",
      quote:
        "True mastery is not the absence of struggle, but the geometry of it — the careful, intentional architecture of friction through which effort becomes elegance, and elegance, in its highest form, becomes indistinguishable from intuition. To build is to listen. To ship is to believe. To iterate, at last, is to know.",
    },
  };

  // Feature definitions — drives both left card and right accordion
  const features = [
    {
      id: "c0",
      label: "00",
      title: data.c0.title,
      accordionDesc: data.c0.body,
      card: (
        <div className="digital-text">
          <h3 className="text-4xl md:text-6xl font-[family-name:var(--font-syne)] font-bold leading-tight mb-8 lowercase">
            {data.c0.title}
          </h3>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            {data.c0.body}
          </p>
        </div>
      ),
    },
    {
      id: "c1",
      label: "01",
      title: data.c1.title,
      accordionDesc: data.c1.body,
      card: (
        <div className="digital-text">
          <h3 className="text-4xl md:text-6xl font-[family-name:var(--font-syne)] font-bold leading-tight mb-8 lowercase">
            {data.c1.title}
          </h3>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            {data.c1.body}
          </p>
        </div>
      ),
    },
    {
      id: "c2",
      label: "02",
      title: data.c2.title,
      accordionDesc: data.c2.body,
      card: (
        <div className="digital-text">
          <h3 className="text-4xl md:text-6xl font-[family-name:var(--font-syne)] font-bold leading-tight mb-6 lowercase">
            <GlitchText>{data.c2.title}</GlitchText>
          </h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            {data.c2.body}
          </p>
          <pre className="text-xs md:text-sm font-[family-name:var(--font-iosevka)] text-foreground bg-black/40 border border-border rounded-lg p-5 overflow-auto whitespace-pre-wrap">
            {data.c2.code}
          </pre>
        </div>
      ),
    },
    {
      id: "c3",
      label: "03",
      title: data.c3.title,
      accordionDesc: data.c3.body,
      card: (
        <div className="digital-text">
          <h3 className="text-4xl md:text-6xl font-[family-name:var(--font-syne)] font-bold leading-tight mb-6 lowercase">
            {data.c3.title}
          </h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            {data.c3.body}
          </p>
          <pre className="text-xs md:text-sm font-[family-name:var(--font-iosevka)] text-foreground bg-black/40 border border-border rounded-lg p-5 overflow-auto whitespace-pre-wrap">
            {data.c3.code}
          </pre>
        </div>
      ),
    },
    {
      id: "c4",
      label: "04",
      title: data.c4.title,
      accordionDesc: data.c4.quote,
      card: (
        <div className="digital-text relative h-full flex flex-col justify-center rounded-2xl bg-foreground text-background p-8 md:p-12 -m-8 md:-m-12">
          <div className="absolute top-6 right-6 opacity-50 text-xs tracking-widest lowercase">
            {data.c4.title}
          </div>
          <blockquote className="text-lg md:text-2xl italic leading-relaxed font-[family-name:var(--font-syne)] pr-8">
            {data.c4.quote}
          </blockquote>
        </div>
      ),
    },
  ];

  const NUM_FEATURES = features.length;

  // Check sessionStorage on client side to prevent hydration mismatch
  useEffect(() => {
    const played = sessionStorage.getItem("validation-animated") === "true";
    if (played) setHasPlayed(true);
  }, []);

  // HOOK 1: Shutter + text reveal (depends on hasPlayed, safe to revert)
  useGSAP(
    () => {
      if (!shutterRef.current) return;

      if (hasPlayed) {
        gsap.set(shutterRef.current.children, { scaleY: 0 });
        gsap.set(".digital-text", { opacity: 1, x: 0 });
      } else {
        gsap.to(shutterRef.current.children, {
          scaleY: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power3.inOut",
          transformOrigin: "bottom",
          onComplete: () => {
            sessionStorage.setItem("validation-animated", "true");
          },
        });

        const textElements = gsap.utils.toArray(".digital-text");
        gsap.set(textElements, { opacity: 0, x: 30 });
        textElements.forEach((text, index) => {
          gsap.to(text, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.8 + index * 0.1,
          });
        });
      }
    },
    { scope: sectionRef, dependencies: [hasPlayed], revertOnUpdate: true }
  );

  // HOOK 2: GSAP timeline + ScrollTrigger pin — animates cards directly
  useGSAP(
    () => {
      if (!pinRef.current || !cardRefs.current[0]) return;

      const cards = cardRefs.current.filter(Boolean);

      // Card 0 starts visible, cards 1+ start off-screen below
      gsap.set(cards[0], { yPercent: 0, opacity: 1 });
      cards.slice(1).forEach((card) => gsap.set(card, { yPercent: 100, opacity: 0 }));

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "validation-hx",
          trigger: pinRef.current,
          start: "top top",
          end: () => `+=${NUM_FEATURES * window.innerHeight}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: "labels",
            duration: { min: 0.2, max: 0.6 },
            delay: 0.1,
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            const idx = Math.min(
              Math.round(self.progress * (NUM_FEATURES - 1)),
              NUM_FEATURES - 1
            );
            setActiveFeature(idx);
          },
        },
      });

      // Build timeline: each card slides up over the previous
      tl.addLabel("card0");
      cards.slice(1).forEach((card, i) => {
        const prev = cards[i]; // previous card (i is 0-based from slice)
        tl.to(prev, { opacity: 0, duration: 0.3, ease: "power2.in" }, `>${0}`)
          .fromTo(
            card,
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1, ease: "power2.out", force3D: true },
            "<0.1"
          )
          .addLabel(`card${i + 1}`);
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative w-full z-40">
      {/* SHUTTERS (White -> Black Swoop) */}
      <div
        ref={shutterRef}
        className="absolute inset-0 z-50 flex pointer-events-none h-full w-full"
        style={{ contain: "layout paint" }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-1/5 h-full bg-white border-r border-black/5 ${
              !hasPlayed ? "will-change-transform" : ""
            }`}
            style={{ contain: "strict" }}
          />
        ))}
      </div>

      {/* Scroll Feature Container */}
      <div className="w-full scroll-feature-container">
        {/* Full-height wrapper — THIS gets pinned by ScrollTrigger */}
        <div
          ref={pinRef}
          className="h-dvh w-full flex items-center justify-center p-4 md:p-8 lg:p-12 z-40"
        >
          {/* Two-column Graphite layout */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 md:gap-10 items-center">
            {/* LEFT: Card display — content swaps based on activeFeature */}
            <Card className="relative h-[55vh] md:h-[60vh] overflow-hidden bg-card/40 backdrop-blur-sm shadow-[0_0_60px_-10px_#00f0ff40,0_0_120px_-20px_#00f0ff20]">
              {features.map((feature, i) => (
                <CardContent
                  key={feature.id}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center"
                >
                  {feature.card}
                </CardContent>
              ))}
            </Card>

            {/* RIGHT: Accordion navigation — scroll-driven, not click-driven */}
            <div className="flex flex-col justify-center">
              <div className="text-xs text-muted-foreground tracking-widest mb-6 font-mono">
                VALIDATION LOG
              </div>

              <Accordion
                type="single"
                value={`item-${activeFeature}`}
                className="space-y-1"
              >
                {features.map((feature, i) => (
                  <AccordionItem
                    key={feature.id}
                    value={`item-${i}`}
                    className={`border-b-0 border-l-2 pl-5 transition-colors duration-300 ${
                      activeFeature === i
                        ? "border-l-[#00f0ff]"
                        : "border-l-border"
                    }`}
                  >
                    <AccordionTrigger className="hover:no-underline py-3 [&>svg]:hidden">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-mono transition-colors duration-300 ${
                            activeFeature === i
                              ? "text-[#00f0ff]"
                              : "text-muted-foreground"
                          }`}
                        >
                          {feature.label}
                        </span>
                        <span
                          className={`font-syne text-sm font-medium transition-colors duration-300 ${
                            activeFeature === i
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {feature.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground text-xs leading-relaxed pl-7">
                        {feature.accordionDesc}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Progress indicator */}
              <div className="mt-8 flex items-center gap-2">
                {features.map((_, i) => (
                  <div
                    key={i}
                    className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${
                      i <= activeFeature ? "bg-[#00f0ff]" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
