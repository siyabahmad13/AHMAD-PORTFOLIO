"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ProjectsDropdown } from "./ProjectsDropdown";
import { projects } from "@/data/projects";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-[var(--border)] ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1.5"
      } ${
        scrolled
          ? "py-3 bg-[var(--bg)]/90 backdrop-blur-md shadow-xs"
          : "py-5 bg-[var(--bg)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* LEFT: Identity */}
        <div className="flex-1">
          <Link
            href="/"
            className="text-[14px] font-semibold tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)] transition-colors inline-block"
          >
            SIAB AHMAD
          </Link>
        </div>

        {/* CENTER: Main Navigation Links (Desktop) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-2 lg:gap-4 justify-center"
        >
          <Link
            href="/"
            className="relative px-2.5 py-1 rounded-[4px] text-[13px] font-medium tracking-wider uppercase text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200 group"
          >
            <span>HOME</span>
            <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[var(--accent)] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center" />
          </Link>
          <Link
            href="/#work"
            className="relative px-2.5 py-1 rounded-[4px] text-[13px] font-medium tracking-wider uppercase text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200 group"
          >
            <span>WORK</span>
            <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[var(--accent)] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center" />
          </Link>
          <Link
            href="/#about"
            className="relative px-2.5 py-1 rounded-[4px] text-[13px] font-medium tracking-wider uppercase text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200 group"
          >
            <span>ABOUT</span>
            <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[var(--accent)] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center" />
          </Link>
          <Link
            href="/#experience"
            className="relative px-2.5 py-1 rounded-[4px] text-[13px] font-medium tracking-wider uppercase text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200 group"
          >
            <span>EXPERIENCE</span>
            <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[var(--accent)] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center" />
          </Link>
          <Link
            href="/#contact"
            className="relative px-2.5 py-1 rounded-[4px] text-[13px] font-medium tracking-wider uppercase text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200 group"
          >
            <span>CONTACT</span>
            <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[var(--accent)] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center" />
          </Link>
        </nav>

        {/* RIGHT: Actions (Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-3 lg:gap-4">
          <ProjectsDropdown />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-3 py-1.5 rounded-[4px] text-[13px] font-medium tracking-wider uppercase text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group shadow-2xs"
          >
            <span>RESUME</span>
            <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[var(--accent)] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center" />
          </a>
        </div>

        {/* Mobile Text-Based Trigger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="text-[13px] font-medium tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)] px-2.5 py-1 border border-[var(--border)] rounded cursor-pointer"
          >
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)] px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-medium tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)]"
            >
              HOME
            </Link>
            <Link
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-medium tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)]"
            >
              WORK
            </Link>
            <div className="pt-2 pb-1 border-y border-[var(--border)]">
              <span className="text-[11px] font-mono-meta text-[var(--text-secondary)] uppercase tracking-wider block mb-2">
                PROJECT CASE STUDIES
              </span>
              <div className="grid grid-cols-2 gap-2 pl-2">
                {projects.map((proj, idx) => (
                  <Link
                    key={proj.id}
                    href={`/work/${proj.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text)] py-1 flex items-baseline gap-1.5"
                  >
                    <span className="text-[10px] font-mono-meta text-[var(--accent)] font-medium">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="truncate">{proj.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-medium tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)]"
            >
              ABOUT
            </Link>
            <Link
              href="/#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-medium tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)]"
            >
              EXPERIENCE
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-medium tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)]"
            >
              CONTACT
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-medium tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)]"
            >
              RESUME (PDF)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
