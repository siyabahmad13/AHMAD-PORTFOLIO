import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-16 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Identity */}
          <div className="space-y-2">
            <Link
              href="/"
              className="text-[15px] font-bold tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)] transition-colors inline-block"
            >
              SIYAB AHMAD
            </Link>
            <div className="text-[14px] text-[var(--text-secondary)]">
              Software Engineer
            </div>
            <div className="text-[13px] font-mono-meta text-[var(--text-secondary)]">
              Full-Stack Developer · AI / ML
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8 items-center text-[13px] font-medium tracking-wider uppercase">
            <Link
              href="/#work"
              className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
            >
              WORK
            </Link>
            <Link
              href="/#about"
              className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/#experience"
              className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
            >
              EXPERIENCE
            </Link>
            <Link
              href="/#contact"
              className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
            >
              CONTACT
            </Link>
            <a
              href="https://problos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
            >
              PROBLOS
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
            >
              RESUME
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-center gap-4 text-[12px] font-mono-meta text-[var(--text-secondary)]">
          <div>© 2026 Siyab Ahmad. All rights reserved.</div>
          
        </div>
      </div>
    </footer>
  );
}
