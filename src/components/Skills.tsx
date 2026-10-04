"use client";

import React, { useState, useEffect, useRef } from "react";
import { skillCategories } from "@/data/skills";

export function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-8 sm:py-10 md:py-12 border-t border-[var(--border)] bg-white overflow-hidden"
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
              TECHNICAL ARSENAL
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold tracking-tight text-[var(--text)] leading-tight">
            Skills &amp; Proficiencies
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[var(--text-secondary)] mt-0.5">
            Core full-stack engineering stack, modern frameworks, machine learning, and developer tooling.
          </p>
        </div>

        {/* Compact Professional Skill Groups Grid with ~100ms Category Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-5 sm:p-6 rounded-[6px] border border-[var(--border)] bg-[var(--bg-secondary)] flex flex-col justify-between hover:border-[var(--accent)] hover:bg-white hover:shadow-xs transition-all duration-300"
              style={{
                transitionDelay: reducedMotion ? "0ms" : `${idx * 100}ms`,
                opacity: reducedMotion || isVisible ? 1 : 0,
                transform:
                  reducedMotion || isVisible
                    ? "translateY(0)"
                    : "translateY(14px)",
              }}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border)]">
                  <h3 className="text-[14px] font-bold text-[var(--text)] tracking-tight">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono-meta text-[var(--text-muted)]">
                    {(idx + 1).toString().padStart(2, "0")} / 05
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] bg-white border border-[var(--border)] text-[12.5px] font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-default select-none shadow-2xs"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
