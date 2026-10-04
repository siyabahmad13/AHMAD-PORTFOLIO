"use client";

import React, { useState, useEffect } from "react";
import { HeroPortraitVisual } from "./HeroPortraitVisual";
import { RotatingHeroText } from "./RotatingHeroText";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative pt-6 pb-8 sm:pt-8 sm:pb-10 md:pt-10 md:pb-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* LEFT: Information & Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* 1. Status line / Availability */}
            <div
              className={`inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] w-fit mb-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
              </span>
              <span className="text-[11.5px] font-mono-meta font-medium tracking-wide text-[var(--text-secondary)]">
                Available for projects &amp; full-time roles
              </span>
            </div>

            {/* 2. Greeting & Name (Staggered sequence) */}
            <div className="space-y-0.5">
              <span
                className={`text-[15px] sm:text-[16px] font-medium text-[var(--text-secondary)] tracking-tight block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "80ms" }}
              >
                Hi, I&apos;m
              </span>
              <h1
                className={`text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-extrabold tracking-[-0.03em] text-[var(--text)] leading-[1.08] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "160ms" }}
              >
                Siab Ahmad Khan
              </h1>
            </div>

            {/* 3. Professional Title */}
            <h2
              className={`text-[15px] sm:text-[17px] md:text-[18px] font-semibold text-[var(--text)] tracking-tight mt-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: "240ms" }}
            >
              Software Engineer <span className="text-[var(--accent)] mx-1">|</span> Full-Stack Developer <span className="text-[var(--accent)] mx-1">|</span> AI/ML
            </h2>

            {/* 4. 3D Rectangular Rotating Text Component */}
            <div
              className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: "320ms" }}
            >
              <RotatingHeroText />
            </div>

            {/* 5. CTA Buttons */}
            <div
              className={`flex flex-wrap items-center gap-3 mt-5 sm:mt-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {/* Primary: Hire Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-[4px] text-[13px] font-semibold tracking-wider uppercase transition-all duration-200 bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-2xs"
              >
                <span>Hire Me</span>
                <span className="text-[13px]">↗</span>
              </a>

              {/* Secondary: View Work */}
              <a
                href="#work"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[4px] text-[13px] font-semibold tracking-wider uppercase transition-all duration-200 bg-[var(--btn-bg)] text-white hover:bg-[var(--btn-hover)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-2xs"
              >
                View Work
              </a>

              {/* Tertiary / Utility: Download CV */}
              <a
                href="/resume.pdf"
                download="Siyab_Ahmad_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[4px] text-[13px] font-semibold tracking-wider uppercase transition-all duration-200 border border-[var(--border)] bg-white text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-2xs"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Compact Clean Portrait & Social Links */}
          <div
            className={`lg:col-span-5 flex justify-center lg:justify-end mt-2 lg:mt-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-[0.98]"
            }`}
            style={{ transitionDelay: "480ms" }}
          >
            <HeroPortraitVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
