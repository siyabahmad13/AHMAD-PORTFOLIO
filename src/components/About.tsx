
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export function About() {
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

  const highlights = [
    { label: "Engineering", detail: "Full-Stack Web & Scalable Systems" },
    { label: "Intelligence", detail: "AI / Machine Learning Integration" },
    { label: "Architecture", detail: "Clean, Maintainable & Performant Code" },
    { label: "Product Focus", detail: "Practical Solutions for Real-World Impact" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        border-t
        border-[var(--border)]
        bg-white
        py-8
        sm:py-10
        md:py-12
        overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        {/* Section Kicker */}
        <div className="flex items-center gap-2 mb-5 sm:mb-6">
          <span className="h-[2px] w-4 bg-[var(--accent)]" />

          <span
            className="
              text-[11.5px]
              font-mono-meta
              tracking-[0.2em]
              uppercase
              text-[var(--accent)]
              font-semibold
            "
          >
            ABOUT ME
          </span>
        </div>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-7
            lg:gap-10
            items-center
          "
        >

          {/* =====================================
              LEFT: PROFESSIONAL PORTRAIT (Reveals from Left)
          ===================================== */}
          <div
            className={`
              lg:col-span-5
              flex
              justify-center
              lg:justify-start
              transition-all
              duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                reducedMotion || isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-5"
              }
            `}
          >
            <div
              className="
                group
                relative
                w-full
                max-w-[230px]
                sm:max-w-[250px]
                lg:max-w-[260px]
              "
            >
              <div
                className="
                  relative
                  aspect-[4/5]
                  w-full
                  overflow-hidden
                  rounded-[4px]
                  border
                  border-[var(--border)]
                  bg-[var(--bg-secondary)]
                  shadow-[0_14px_35px_-25px_rgba(0,0,0,0.3)]
                  transition-all
                  duration-300
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:scale-[1.02]
                  hover:border-[var(--accent)]
                  hover:shadow-md
                "
              >
                <Image
                  src="/images/about.jpeg"
                  alt="Siyab Ahmad Khan"
                  fill
                  sizes="
                    (max-width: 1024px) 250px,
                    260px
                  "
                  className="
                    object-cover
                    object-[center_18%]
                    transition-transform
                    duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:scale-[1.03]
                  "
                />
              </div>
            </div>
          </div>

          {/* =====================================
              RIGHT: PROFILE CONTENT (Reveals from Right)
          ===================================== */}
          <div
            className={`
              lg:col-span-7
              space-y-3.5
              transition-all
              duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                reducedMotion || isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-5"
              }
            `}
            style={{ transitionDelay: reducedMotion ? "0ms" : "120ms" }}
          >

            <h2
              className="
                text-[22px]
                sm:text-[26px]
                md:text-[28px]
                font-bold
                tracking-tight
                text-[var(--text)]
                leading-snug
              "
            >
              Software Engineer crafting scalable web
              platforms &amp; AI-driven solutions.
            </h2>


            <div
              className="
                space-y-2.5
                text-[14px]
                sm:text-[15px]
                text-[var(--text-secondary)]
                leading-relaxed
              "
            >

              <p>
                I am a Software Engineer and Full-Stack Developer
                specializing in modern web applications, AI/ML
                integrations, and production-ready systems. My focus
                is on turning complex business requirements into
                intuitive, reliable, and high-performance digital
                products.
              </p>

              <p>
                From architecting database schemas and crafting
                resilient APIs to implementing responsive, accessible
                user interfaces, I emphasize clean architecture,
                maintainability, and real-world utility over
                unnecessary abstraction.
              </p>

            </div>


            {/* =====================================
                KEY INFORMATION
            ===================================== */}

            <div className="pt-1">

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-2.5
                  pt-3
                  border-t
                  border-[var(--border)]
                "
              >

                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="
                      p-2.5
                      rounded-[4px]
                      border
                      border-[var(--border)]
                      bg-[var(--bg-secondary)]
                      flex
                      flex-col
                      justify-center
                      transition-colors
                      duration-200
                      hover:border-[var(--accent)]
                    "
                  >

                    <span
                      className="
                        text-[10.5px]
                        font-mono-meta
                        uppercase
                        tracking-wider
                        text-[var(--accent)]
                        font-semibold
                      "
                    >
                      {item.label}
                    </span>

                    <span
                      className="
                        text-[13px]
                        font-medium
                        text-[var(--text)]
                        mt-0.5
                      "
                    >
                      {item.detail}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

