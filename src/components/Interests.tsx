"use client";

import React, { useState, useEffect, useRef } from "react";

const interests = [
  {
    title: "Technology & AI",
    description: "Tracking modern machine learning developments, LLM applications, and emerging tech stacks.",
  },
  {
    title: "Software Development",
    description: "Designing resilient backends, performant frontend architectures, and end-to-end web apps.",
  },
  {
    title: "Learning New Technologies",
    description: "Continuously experimenting with modern frameworks, developer tools, and best engineering practices.",
  },
  {
    title: "Entrepreneurship",
    description: "Building sustainable software products, identifying market gaps, and scaling digital solutions.",
  },
  {
    title: "UI/UX & Product Design",
    description: "Crafting intuitive user workflows, purposeful interactions, and clean visual design systems.",
  },
  {
    title: "Problem Solving",
    description: "Breaking down complex business logic into maintainable, elegant algorithmic solutions.",
  },
  {
    title: "Exploring New Tools",
    description: "Testing developer productivity tooling, automation scripts, and deployment infrastructure.",
  },
  {
    title: "Digital Products",
    description: "Creating functional SaaS tools, utilities, and accessible web platforms for daily users.",
  },
];

export function Interests() {
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
      id="interests"
      ref={sectionRef}
      className="py-8 sm:py-10 md:py-12 border-t border-[var(--border)] bg-[var(--bg-secondary)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div
          className={`max-w-3xl mb-6 sm:mb-8 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
              FOCUS &amp; PASSIONS
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold tracking-tight text-[var(--text)] leading-tight">
            Interests &amp; Pursuits
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[var(--text-secondary)] mt-0.5">
            Core technical interests, engineering curiosities, and product development pursuits.
          </p>
        </div>

        {/* Clean Editorial Cards Grid with Subtle Staggered Horizontal Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {interests.map((item, idx) => (
            <div
              key={item.title}
              className="group relative p-4 rounded-[4px] border border-[var(--border)] bg-white hover:border-[var(--accent)] hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              style={{
                transitionDelay: reducedMotion ? "0ms" : `${idx * 60}ms`,
                opacity: reducedMotion || isVisible ? 1 : 0,
                transform:
                  reducedMotion || isVisible
                    ? "translate(0, 0)"
                    : "translate(10px, 8px)",
                transitionProperty: "opacity, transform, border-color, box-shadow",
                transitionDuration: "400ms",
              }}
            >
              <div>
                <span className="text-[10.5px] font-mono-meta text-[var(--accent)] font-semibold block mb-1.5">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-[14.5px] font-bold text-[var(--text)] tracking-tight leading-snug group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[12px] text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Red Underline on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
