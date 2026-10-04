"use client";

import React, { useState, useEffect, useRef } from "react";

const phrases = [
  "Practical Digital Solutions",
  "Scalable Web Applications",
  "AI-Powered Products",
  "Full-Stack Applications",
  "Production-Ready Software",
  "Digital Products That Matter",
];

const HOLD_DURATION = 2800; // Hold active text for ~2.8s
const TRANSITION_DURATION = 800; // Transition takes 800ms

export function RotatingHeroText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    // Schedule the next transition after the hold duration
    timeoutRef.current = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % phrases.length;
      setOutgoingIndex(currentIndex);
      setCurrentIndex(nextIndex);
      setIsTransitioning(true);

      // Once the transition finishes, clean up the outgoing phrase
      setTimeout(() => {
        setOutgoingIndex(null);
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    }, HOLD_DURATION);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <div
      className="relative mt-3.5 sm:mt-4 h-[32px] sm:h-[36px] md:h-[40px] flex items-center select-none"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Fixed text prefix */}
      <span className="text-[17px] sm:text-[21px] md:text-[23px] font-bold tracking-tight text-[var(--text)] mr-2 shrink-0">
        I build
      </span>

      {/* 3D Rotating container for the phrases */}
      <div
        className="relative h-full flex items-center"
        style={{
          perspective: "900px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* 
          Out-going rotating rectangular face:
          Rotates upward and away around the horizontal axis (rotateX: 0deg -> 75deg)
        */}
        {outgoingIndex !== null && !reducedMotion && (
          <span
            key={`out-${outgoingIndex}`}
            className="absolute left-0 text-[17px] sm:text-[21px] md:text-[23px] font-bold tracking-tight text-[var(--accent)] whitespace-nowrap pointer-events-none"
            style={{
              transformOrigin: "center center -14px",
              animation: `rectFaceRotateOut ${TRANSITION_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
              backfaceVisibility: "hidden",
              willChange: "transform, opacity, filter",
            }}
          >
            {phrases[outgoingIndex]}
          </span>
        )}

        {/* 
          Active / Incoming rotating rectangular face:
          Enters from below around the horizontal axis (rotateX: -75deg -> 0deg)
        */}
        <span
          key={`current-${currentIndex}`}
          className="text-[17px] sm:text-[21px] md:text-[23px] font-bold tracking-tight text-[var(--accent)] whitespace-nowrap"
          style={{
            transformOrigin: "center center -14px",
            animation:
              isTransitioning && !reducedMotion
                ? `rectFaceRotateIn ${TRANSITION_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1) forwards`
                : "none",
            backfaceVisibility: "hidden",
            willChange: isTransitioning ? "transform, opacity, filter" : "auto",
          }}
        >
          {phrases[currentIndex]}
        </span>
      </div>
    </div>
  );
}
