import React from "react";
import { Typewriter } from "./Typewriter";
import { HeroPortraitVisual } from "./HeroPortraitVisual";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Information & Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* 1. HERO NAME — PRIMARY FOCUS */}
            <h1 className="text-[42px] sm:text-[56px] md:text-[66px] lg:text-[72px] font-bold tracking-[-0.03em] text-[var(--text)] leading-[1.06]">
              SIYAB AHMAD KHAN
            </h1>

            {/* 2. PROFESSIONAL TITLE — SUBHEADING (Small gap) */}
            <p className="text-[17px] sm:text-[20px] md:text-[22px] font-normal text-[var(--text-secondary)] tracking-tight mt-2.5 sm:mt-3">
              Software Engineer · Full-Stack Developer · AI / ML
            </p>

            {/* 3. TYPEWRITER — VISUAL ACCENT (Moderate gap) */}
            <div className="mt-6 sm:mt-8">
              <Typewriter />
            </div>

            {/* 4. HERO BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] text-[13px] sm:text-[14px] font-semibold tracking-wider uppercase transition-all duration-300 bg-[var(--btn-bg)] text-[var(--btn-text)] hover:opacity-90 hover:-translate-y-0.5 cursor-pointer shadow-xs"
              >
                VIEW MY WORK
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] text-[13px] sm:text-[14px] font-semibold tracking-wider uppercase transition-all duration-300 border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-secondary)] hover:-translate-y-0.5 cursor-pointer"
              >
                LET&apos;S WORK TOGETHER
              </a>
            </div>
          </div>

          {/* RIGHT: Editorial Portrait & Abstract Design System */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroPortraitVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

