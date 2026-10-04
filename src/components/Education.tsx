"use client";

import React, { useState, useEffect, useRef } from "react";
import { educationList } from "@/data/education";

export function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-8 sm:py-10 md:py-12 border-t border-[var(--border)] bg-[var(--bg-secondary)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div
          className={`max-w-3xl mb-5 sm:mb-6 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            reducedMotion || isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`h-[2px] bg-[var(--accent)] transition-all duration-500 ease-out ${
                reducedMotion || isVisible ? "w-4 opacity-100" : "w-0 opacity-0"
              }`}
            />
            <span className="text-[11.5px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] font-semibold">
              ACADEMIC BACKGROUND
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold tracking-tight text-[var(--text)] leading-tight">
            Education
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[var(--text-secondary)] mt-0.5">
            Formal technical education, foundational sciences, and academic background.
          </p>
        </div>

        {/* Compact Timeline Grid */}
        <div className="relative max-w-4xl">
          {/* Vertical Connecting Line with reveal */}
          <div
            className={`absolute top-4 bottom-4 left-[15px] sm:left-[19px] w-[2px] bg-[var(--border)] transition-transform duration-700 ease-out origin-top ${
              reducedMotion || isVisible ? "scale-y-100" : "scale-y-0"
            }`}
          />

          <div className="space-y-4">
            {educationList.map((item, idx) => (
              <div
                key={item.id}
                className={`relative flex items-start gap-4 sm:gap-6 p-4 sm:p-5 rounded-[6px] border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  item.isLatest
                    ? "border-[var(--accent)] shadow-2xs"
                    : "border-[var(--border)] hover:border-[var(--accent)]"
                }`}
                style={{
                  transitionDelay: reducedMotion ? "0ms" : `${idx * 110}ms`,
                  opacity: reducedMotion || isVisible ? 1 : 0,
                  transform:
                    reducedMotion || isVisible
                      ? "translateY(0)"
                      : "translateY(14px)",
                }}
              >
                {/* Timeline Node Indicator */}
                <div className="relative mt-1 z-10 flex items-center justify-center shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center text-[12px] font-mono-meta font-bold ${
                      item.isLatest
                        ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                        : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--border)]"
                    }`}
                  >
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-[16px] sm:text-[18px] font-bold text-[var(--text)] tracking-tight">
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-mono-meta px-2 py-0.5 rounded-[3px] font-medium ${
                          item.isLatest
                            ? "bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent-border)]"
                            : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]"
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <div className="text-[13.5px] font-semibold text-[var(--text-secondary)]">
                    {item.institution}
                  </div>

                  {item.details && (
                    <p className="text-[13px] text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
