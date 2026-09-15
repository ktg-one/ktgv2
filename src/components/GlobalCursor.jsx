"use client";

import { useEffect, useRef } from 'react';

export function GlobalCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let rafId = null;
    let latestX = 0;
    let latestY = 0;

    // OPTIMIZATION: Throttle DOM style updates to animation frames (60-120fps)
    // using requestAnimationFrame instead of running synchronous layout work on
    // high-frequency mousemove events (up to 1000Hz on gaming hardware).
    const updatePosition = () => {
      cursor.style.transform = `translate3d(${latestX}px, ${latestY}px, 0) translate(-50%, -50%)`;
      rafId = null;
    };

    const handleMouseMove = (e) => {
      latestX = e.clientX;
      latestY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    // Use passive listener to avoid blocking main thread scrolling/input
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  );
}
