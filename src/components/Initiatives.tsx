"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface InitiativeItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image?: string;
  linkUrl: string;
  linkLabel: string;
}



const initiatives: InitiativeItem[] = [
  {
    id: "problos",
    category: "YOUNG ENTREPRENEUR",
    title: "Problos",
    description:
      "Building a software venture focused on practical digital solutions.",
    image: "/images/problos.jpg",
    linkUrl: "https://problos.com",
    linkLabel: "VISIT PROBLOS",
  },
  {
    id: "the-pakhtoon",
    category: "TECH CREATOR",
    title: "The Pakhtoon",
    description:
      "Creating practical technology and AI content to make modern development easier to learn.",
    image: "/images/The-Pakhtoon.jpg",
    linkUrl: "https://www.youtube.com/@the-pakhtoons",
    linkLabel: "VISIT CHANNEL",
  },
  {
    id: "ai-learning",
    category: "AI EDUCATION",
    title: "AI Learning Platform",
    description:
      "An AI-powered learning platform designed to make modern technology education easier and more accessible.",
    linkUrl: "",
    linkLabel: "VISIT APP",
  },
];





/* -------------------------------------------------------------------------- */
/* 16:9 Dummy Visual for Tech Creator                                          */
/* Clean, minimal, typographic, matches the portfolio's visual identity       */
/* -------------------------------------------------------------------------- */
function TechCreatorVisual() {
  return (
    <div className="relative aspect-video w-full bg-[#f6f6f4] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden border-b border-[var(--border)]">
      {/* Subtle background technical grid */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Typography content */}
      <div className="relative z-10 flex flex-col items-center">
        <span className="h-[2px] w-6 bg-[var(--accent)] mb-2.5 transition-all duration-300 group-hover:w-10" />
        <span className="text-[10px] sm:text-[11px] font-mono-meta tracking-[0.24em] uppercase text-[var(--accent)] font-semibold mb-1">
          TECH CREATOR
        </span>
        <h4 className="text-[17px] sm:text-[19px] font-extrabold tracking-tight text-[var(--text)]">
          BUILD • LEARN • SHARE
        </h4>
        <span className="text-[11px] sm:text-[11.5px] font-mono-meta text-[var(--text-secondary)] mt-1 tracking-wide">
          Practical Engineering &amp; Development
        </span>
      </div>
    </div>
  );
}

export function Initiatives() {
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Subtle on-scroll reveal observer
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
      id="initiatives"
      ref={sectionRef}
      className="py-8 sm:py-10 md:py-12 border-t border-[var(--border)] bg-[var(--bg-secondary)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="h-[2px] w-4 bg-[var(--accent)]" />
            <span className="text-[11.5px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] font-semibold">
              INITIATIVES
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold tracking-tight text-[var(--text)] leading-tight">
            Initiatives
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[var(--text-secondary)] mt-0.5">
            Things I&apos;m building beyond everyday development.
          </p>
        </div>

        {/* 3 Equal Cards Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {initiatives.map((item, index) => (
            <a
              key={item.id}
              href={item.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full rounded-[6px] border border-[var(--border)] bg-white overflow-hidden shadow-2xs hover:shadow-md hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--accent)] cursor-pointer"
              style={{
                transitionDelay:
                  reducedMotion || isVisible ? "0ms" : `${index * 100}ms`,
                opacity: reducedMotion || isVisible ? 1 : 0,
                transform:
                  reducedMotion || isVisible
                    ? "translateY(0)"
                    : "translateY(14px)",
                transitionProperty:
                  "opacity, transform, box-shadow, border-color",
                transitionDuration: "350ms",
              }}
            >
              {/* 16:9 Image Container */}
              {item.image ? (
                <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-secondary)] border-b border-[var(--border)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={95}
                    className="object-cover object-top transition-transform duration-350 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <TechCreatorVisual />
              )}

              {/* Card Content Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Small Category Label */}
                  <span className="text-[11px] font-mono-meta tracking-[0.18em] uppercase text-[var(--accent)] font-semibold block mb-1.5">
                    {item.category}
                  </span>

                  {/* Initiative Title */}
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--text)] tracking-tight group-hover:text-[var(--accent)] transition-colors duration-250">
                    {item.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[13.5px] sm:text-[14px] text-[var(--text-secondary)] leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Visible Link / Button Footer */}
                <div className="pt-4 mt-5 border-t border-[var(--border)]/70 flex items-center justify-between">
                  <span className="text-[12px] font-mono-meta uppercase tracking-wider font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {item.linkLabel}
                  </span>
                  <span className="text-[12px] text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
