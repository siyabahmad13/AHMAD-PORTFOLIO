import React from "react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 border-t border-[var(--border)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl space-y-8">
          <div>
            <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] block mb-3">
              CONNECT
            </span>
            <h2 className="text-[36px] sm:text-[46px] md:text-[56px] font-bold tracking-tight text-[var(--text)] leading-tight">
              LET&apos;S WORK TOGETHER
            </h2>
            <p className="text-[18px] sm:text-[20px] text-[var(--text-secondary)] mt-4">
              Have a project, opportunity or idea? Let&apos;s talk.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://wa.me/923435022880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] text-[13px] sm:text-[14px] font-semibold tracking-wider uppercase transition-all duration-300 bg-[var(--btn-bg)] text-[var(--btn-text)] hover:opacity-90 hover:-translate-y-0.5 cursor-pointer shadow-xs"
            >
              GET IN TOUCH
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] text-[13px] sm:text-[14px] font-semibold tracking-wider uppercase transition-all duration-300 border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-secondary)] hover:-translate-y-0.5 cursor-pointer"
            >
              VIEW RESUME
            </a>
          </div>

          {/* Text-based Connection Details (Strictly No Icons) */}
          <div className="pt-8 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="group">
              <a
                href="mailto:msiyab10492@gmail.com"
                className="relative inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">EMAIL</span>
                <span className="text-[12px] font-mono-meta opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5">↗</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--accent)] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </a>
              <span className="text-[12px] font-mono-meta text-[var(--text-secondary)] block mt-0.5">
                msiyab10492@gmail.com
              </span>
            </div>

            <div className="group">
              <a
                href="https://github.com/siyabahmad13"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">GITHUB</span>
                <span className="text-[12px] font-mono-meta opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5">↗</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--accent)] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </a>
              <span className="text-[12px] font-mono-meta text-[var(--text-secondary)] block mt-0.5">
                github.com/siabahmad
              </span>
            </div>

            <div className="group">
              <a
                href="https://www.linkedin.com/in/siab-ahmad-khan/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">LINKEDIN</span>
                <span className="text-[12px] font-mono-meta opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5">↗</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--accent)] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </a>
              <span className="text-[12px] font-mono-meta text-[var(--text-secondary)] block mt-0.5">
                linkedin.com/in/siabahmad
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
