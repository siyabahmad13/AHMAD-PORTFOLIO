"use client";

import React, { useState, useEffect, useRef } from "react";

export function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="py-8 sm:py-10 md:py-12 border-t border-[var(--border)] bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              reducedMotion || isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <span
              className={`h-[2px] bg-[var(--accent)] transition-all duration-500 ease-out ${
                reducedMotion || isVisible ? "w-4 opacity-100" : "w-0 opacity-0"
              }`}
            />
            <span className="text-[11.5px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] font-semibold">
              GET IN TOUCH
            </span>
          </div>

          {/* Heading & Supporting statement */}
          <div>
            <h2
              className={`text-[26px] sm:text-[34px] md:text-[38px] font-extrabold tracking-tight text-[var(--text)] leading-tight transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                reducedMotion || isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: reducedMotion ? "0ms" : "80ms" }}
            >
              Let&apos;s build something useful.
            </h2>
            <p
              className={`text-[14px] sm:text-[15px] text-[var(--text-secondary)] mt-1 max-w-2xl leading-relaxed transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                reducedMotion || isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: reducedMotion ? "0ms" : "160ms" }}
            >
              Have a project, full-time engineering role, or digital product in mind? Reach out directly via WhatsApp or email.
            </p>
          </div>

          {/* Compact Primary Actions */}
          <div
            className={`flex flex-wrap items-center gap-3 pt-2 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              reducedMotion || isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: reducedMotion ? "0ms" : "240ms" }}
          >
            <a
              href="https://wa.me/923435022880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-[4px] text-[13px] sm:text-[14px] font-semibold tracking-wider uppercase transition-all duration-200 bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-2xs"
            >
              <span>Message on WhatsApp</span>
              <span className="text-[14px]">↗</span>
            </a>

            <a
              href="mailto:msiyab10492@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-[4px] text-[13px] sm:text-[14px] font-semibold tracking-wider uppercase transition-all duration-200 bg-[var(--btn-bg)] text-white hover:bg-[var(--btn-hover)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-2xs"
            >
              <span>Send Email</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 sm:px-5 sm:py-3 rounded-[4px] text-[13px] sm:text-[14px] font-semibold tracking-wider uppercase transition-all duration-200 border border-[var(--border)] bg-white text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-2xs"
            >
              Resume (PDF)
            </a>
          </div>

          {/* Clean Contact Metadata Grid */}
          <div className="pt-6 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-colors">
              <span className="text-[11px] font-mono-meta text-[var(--accent)] font-semibold uppercase block">
                WHATSAPP
              </span>
              <a
                href="https://wa.me/923435022880"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-[var(--text)] hover:text-[var(--accent)] mt-0.5 block truncate"
              >
                +92 343 5022880
              </a>
            </div>

            <div className="p-3.5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-colors">
              <span className="text-[11px] font-mono-meta text-[var(--accent)] font-semibold uppercase block">
                EMAIL
              </span>
              <a
                href="mailto:contact@siabahmad.problos.com"
                className="text-[13px] font-semibold text-[var(--text)] hover:text-[var(--accent)] mt-0.5 block truncate"
              >
                msiyab10492@gmail.com
              </a>
            </div>

            <div className="p-3.5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-colors">
              <span className="text-[11px] font-mono-meta text-[var(--accent)] font-semibold uppercase block">
                GITHUB
              </span>
              <a
                href="https://github.com/siyabahmad13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-[var(--text)] hover:text-[var(--accent)] mt-0.5 block truncate"
              >
                github.com/siyabahmad13
              </a>
            </div>

            <div className="p-3.5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-colors">
              <span className="text-[11px] font-mono-meta text-[var(--accent)] font-semibold uppercase block">
                LINKEDIN
              </span>
              <a
                href="https://www.linkedin.com/in/siab-ahmad-khan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-[var(--text)] hover:text-[var(--accent)] mt-0.5 block truncate"
              >
                linkedin.com/in/siab-ahmad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
