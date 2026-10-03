import React from "react";
import Image from "next/image";

export function OtherWork() {
  return (
    <section className="py-20 md:py-28 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] block mb-3">
            INITIATIVES
          </span>
          <h2 className="text-[36px] sm:text-[46px] md:text-[52px] font-bold tracking-tight text-[var(--text)] leading-tight">
            OTHER WORK
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[var(--text-secondary)] mt-3">
            Educational platforms and independent community resources.
          </p>
        </div>

        {/* The Pakhtoon Feature Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center p-8 sm:p-12 rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)]">
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-[12px] font-mono-meta text-[var(--accent)] tracking-wider uppercase">
                LEARNING PLATFORM
              </span>
              <h3 className="text-[28px] sm:text-[34px] font-bold text-[var(--text)] tracking-tight mt-1">
                The Pakhtoon
              </h3>
            </div>

            <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed">
              A learning platform focused on practical web development
              education. Designed to provide straightforward tutorials,
              foundational concepts, and hands-on guidance for aspiring
              developers.
            </p>

            <div className="pt-2">
              <a
                href="https://www.youtube.com/@the-pakhtoons"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 bg-[var(--btn-bg)] text-[var(--btn-text)] hover:opacity-90 hover:-translate-y-0.5"
              >
                <span>VIEW WEBSITE</span>
                <span className="text-[14px]">→</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="group/pakhtoon relative w-full overflow-hidden rounded-[4px] border border-[var(--border)] bg-[var(--card-bg)] shadow-xs transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-md">
              <Image
                src="/images/The-Pakhtoon.jpg"
                alt="The Pakhtoon — Learning Platform"
                width={1920}
                height={1080}
                sizes="(max-width: 1400px) 100vw, 45vw"
                className="w-full h-auto grayscale-[15%] brightness-[0.98] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/pakhtoon:scale-[1.02] group-hover/pakhtoon:grayscale-0 group-hover/pakhtoon:brightness-[1.02]"
              />
              {/* Minimal bottom accent indicator line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)] transform scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left group-hover/pakhtoon:scale-x-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
