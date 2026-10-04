"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { certifications } from "@/data/certifications";

export function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const total = certifications.length;

  // Check prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const goToCert = useCallback(
    (index: number) => {
      const nextIdx = (index + total) % total;
      setActiveIndex(nextIdx);
    },
    [total]
  );

  const handlePrev = useCallback(() => {
    goToCert(activeIndex - 1);
  }, [activeIndex, goToCert]);

  const handleNext = useCallback(() => {
    goToCert(activeIndex + 1);
  }, [activeIndex, goToCert]);

  // Dynamic 3-second Autoplay Loop (3000ms)
  useEffect(() => {
    if (isPaused || isDragging || reducedMotion) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPaused, isDragging, reducedMotion, total, activeIndex]);

  // Pointer / Drag handlers for swipe
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDeltaX(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX;
    setDragDeltaX(delta);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    const threshold = 40;
    if (dragDeltaX < -threshold) {
      handleNext();
    } else if (dragDeltaX > threshold) {
      handlePrev();
    }
    setIsDragging(false);
    setDragDeltaX(0);
  };

  const activeCert = certifications[activeIndex];

  // Helper to calculate circular relative offset (-2, -1, 0, 1, 2)
  const getOffset = (idx: number) => {
    let diff = idx - activeIndex;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section id="certifications" className="py-8 sm:py-10 md:py-12 border-t border-[var(--border)] bg-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-6 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-[2px] w-5 bg-[var(--accent)]" />
              <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] font-semibold">
                CREDENTIALS
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold tracking-tight text-[var(--text)] leading-tight">
              Certifications
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[var(--text-secondary)] mt-1">
              Verified professional credentials, software engineering specializations, and industry certifications.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous certification"
              className="h-9 w-9 rounded-[4px] border border-[var(--border)] bg-white flex items-center justify-center text-[15px] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-pointer shadow-2xs"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next certification"
              className="h-9 w-9 rounded-[4px] border border-[var(--border)] bg-white flex items-center justify-center text-[15px] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-pointer shadow-2xs"
            >
              →
            </button>
          </div>
        </div>

        {/* HORIZONTAL CERTIFICATE CAROUSEL STAGE */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            setIsDragging(false);
            setDragDeltaX(0);
          }}
          className="relative w-full h-[240px] sm:h-[300px] md:h-[340px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
        >
          {certifications.map((cert, idx) => {
            const offset = getOffset(idx);
            const isActive = offset === 0;
            const isPrev = offset === -1;
            const isNext = offset === 1;
            const isFar = Math.abs(offset) >= 2;

            let translateX = "0%";
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;
            let pointerEvents: "auto" | "none" = "auto";

            if (isActive) {
              scale = 1;
              opacity = 1;
              zIndex = 30;
              translateX = "0%";
            } else if (isPrev) {
              scale = 0.86;
              opacity = 0.65;
              zIndex = 20;
              translateX = "-68%";
            } else if (isNext) {
              scale = 0.86;
              opacity = 0.65;
              zIndex = 20;
              translateX = "68%";
            } else if (isFar) {
              scale = 0.72;
              opacity = 0;
              zIndex = 5;
              translateX = offset < 0 ? "-120%" : "120%";
              pointerEvents = "none";
            }

            return (
              <div
                key={cert.id}
                onClick={() => {
                  if (!isActive) goToCert(idx);
                }}
                style={{
                  transform: `translateX(${translateX}) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents,
                  transition: isDragging
                    ? "none"
                    : "transform 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease",
                }}
                className={`absolute w-[78%] sm:w-[58%] md:w-[46%] lg:w-[40%] max-w-[460px] aspect-[10/7] rounded-[6px] overflow-hidden border bg-white ${
                  isActive
                    ? "border-[var(--accent)] shadow-lg ring-1 ring-[var(--accent)]/30 cursor-default"
                    : "border-[var(--border)] shadow-xs hover:border-[var(--accent-border)] hover:opacity-85 cursor-pointer"
                }`}
              >
                <div className="relative w-full h-full p-2 bg-[#FAFAFA] flex items-center justify-center">
                  <Image
                    src={cert.image}
                    alt={`${cert.issuer} - ${cert.title}`}
                    fill
                    sizes="(max-width: 768px) 78vw, 460px"
                    className="object-contain p-2"
                    draggable={false}
                    priority={isActive}
                  />

                  {/* Active subtle red border bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[var(--accent)]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ACTIVE CERTIFICATE METADATA - Compact */}
        <div className="mt-6 text-center max-w-lg mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-2">
            <span className="text-[12px] font-mono-meta font-bold text-[var(--accent)] uppercase tracking-wider">
              {activeCert.issuer}
            </span>
            <span className="text-[12px] text-[var(--text-muted)]">•</span>
            <span className="text-[12px] font-mono-meta text-[var(--text-secondary)]">
              {activeCert.year || "VERIFIED"}
            </span>
          </div>

          <h3 className="text-[19px] sm:text-[22px] font-bold tracking-tight text-[var(--text)]">
            {activeCert.title}
          </h3>

          {activeCert.credentialId && (
            <p className="text-[12px] font-mono-meta text-[var(--text-muted)] tracking-wider">
              ID: {activeCert.credentialId}
            </p>
          )}

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 pt-3">
            {certifications.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToCert(i)}
                aria-label={`Go to certificate ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "w-6 bg-[var(--accent)]"
                    : "w-1.5 bg-[var(--border)] hover:bg-[var(--accent-border)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
