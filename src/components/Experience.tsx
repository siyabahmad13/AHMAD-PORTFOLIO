"use client";

import React, { useState, useEffect, useRef } from "react";
import { experiences } from "@/data/experience";

export function Experience() {
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
      id="experience"
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
              CAREER PATH
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold tracking-tight text-[var(--text)] leading-tight">
            Work Experience
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[var(--text-secondary)] mt-0.5">
            Professional roles, engineering responsibilities, and operational impact.
          </p>
        </div>

        {/* Compact Experience Cards with subtle depth & 100ms stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-[6px] border border-[var(--border)] bg-white shadow-2xs hover:shadow-md hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transitionDelay: reducedMotion ? "0ms" : `${idx * 100}ms`,
                opacity: reducedMotion || isVisible ? 1 : 0,
                transform:
                  reducedMotion || isVisible
                    ? "translateY(0)"
                    : "translateY(16px)",
              }}
            >
              {/* Subtle Red Top Accent Line */}
              <div className="absolute top-0 left-5 right-5 h-[2px] bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[var(--border)]">
                  <span className="text-[11px] font-mono-meta text-[var(--text-secondary)]">
                    {(idx + 1).toString().padStart(2, "0")} / {experiences.length.toString().padStart(2, "0")}
                  </span>
                  <span className="text-[11px] font-mono-meta px-2 py-0.5 rounded-[3px] bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]">
                    {exp.period}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[var(--text)] tracking-tight leading-snug group-hover:text-[var(--accent)] transition-colors">
                  {exp.role}
                </h3>
                <div className="text-[13.5px] font-medium text-[var(--text-secondary)] mt-0.5">
                  <span className="text-[var(--accent)] font-semibold">@ </span>
                  {exp.organization}
                  {exp.location && (
                    <span className="text-[var(--text-muted)] text-[12px] font-normal">
                      {" "}• {exp.location}
                    </span>
                  )}
                </div>

                {/* Responsibilities list */}
                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="text-[13px] text-[var(--text-secondary)] leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-[var(--accent)] text-[12px] select-none font-bold shrink-0 mt-0.5">
                        ›
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies row */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-5 pt-3 border-t border-[var(--border)] flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono-meta px-2 py-0.5 rounded-[3px] bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
