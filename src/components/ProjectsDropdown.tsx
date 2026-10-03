"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

interface ProjectsDropdownProps {
  onNavigate?: () => void;
}

export function ProjectsDropdown({ onNavigate }: ProjectsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeProject = projects[activeProjectIndex] || projects[0];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="text-[13px] font-medium tracking-wider uppercase transition-colors hover:text-[var(--accent)] flex items-center gap-1.5 cursor-pointer py-1"
      >
        <span>PROJECTS</span>
        <span className="text-[10px] transform transition-transform duration-200">
          {isOpen ? "▴" : "▾"}
        </span>
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Projects Menu"
          className="absolute right-0 top-full pt-2 z-50 w-[740px] max-w-[92vw] animate-in fade-in-0 slide-in-from-top-2 duration-200"
        >
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-md shadow-2xl p-5 grid grid-cols-12 gap-6 backdrop-blur-md">
            {/* Left Column: All 10 Projects List */}
            <div className="col-span-7 space-y-1 max-h-[460px] overflow-y-auto pr-2">
              <div className="text-[11px] font-mono-meta uppercase tracking-widest text-[var(--text-secondary)] pb-2 mb-1 border-b border-[var(--border)] flex justify-between">
                <span>Selected Projects</span>
                <span>{projects.length} Total</span>
              </div>

              {projects.map((proj, idx) => {
                const isActive = idx === activeProjectIndex;
                const formattedNumber = (idx + 1).toString().padStart(2, "0");
                return (
                  <Link
                    key={proj.id}
                    href={`/work/${proj.slug}`}
                    onClick={() => {
                      setIsOpen(false);
                      onNavigate?.();
                    }}
                    onMouseEnter={() => setActiveProjectIndex(idx)}
                    onFocus={() => setActiveProjectIndex(idx)}
                    className={`block p-2 rounded transition-all group ${
                      isActive
                        ? "bg-[var(--bg-secondary)] border-l-2 border-[var(--accent)] pl-2.5"
                        : "border-l-2 border-transparent hover:bg-[var(--bg-secondary)]"
                    }`}
                  >
                    <div className="flex items-baseline justify-between">
                      <span
                        className={`text-[13.5px] font-medium tracking-tight transition-colors ${
                          isActive
                            ? "text-[var(--text)] font-semibold"
                            : "text-[var(--text-secondary)] group-hover:text-[var(--text)]"
                        }`}
                      >
                        <span className="text-[11px] font-mono-meta text-[var(--accent)] mr-2">
                          {formattedNumber} —
                        </span>
                        {proj.title}
                      </span>
                      <span className="text-[10px] font-mono-meta text-[var(--text-secondary)] uppercase">
                        {proj.category.split("/")[0].trim()}
                      </span>
                    </div>
                    <p className="text-[11.5px] text-[var(--text-secondary)] line-clamp-1 mt-0.5 pl-6">
                      {proj.description}
                    </p>
                  </Link>
                );
              })}
            </div>

            {/* Right Column: Dynamic Preview */}
            <div className="col-span-5 flex flex-col justify-between border-l border-[var(--border)] pl-5">
              <div>
                <div className="text-[11px] font-mono-meta uppercase tracking-widest text-[var(--text-secondary)] mb-2 flex justify-between items-center">
                  <span>Preview</span>
                  <span className="text-[10px] text-[var(--accent)]">
                    {(activeProjectIndex + 1).toString().padStart(2, "0")} / {projects.length.toString().padStart(2, "0")}
                  </span>
                </div>

                <div className="relative aspect-[19/9] w-full overflow-hidden rounded border border-[var(--border)] bg-[#111111] mb-3">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover transition-opacity duration-300"
                    priority
                  />
                </div>

                <div className="text-[14px] font-bold text-[var(--text)]">
                  {activeProject.title}
                </div>
                <div className="text-[11px] font-mono-meta text-[var(--accent)] mt-0.5">
                  {activeProject.category}
                </div>
                <p className="text-[11.5px] text-[var(--text-secondary)] line-clamp-3 mt-2 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border)] mt-3">
                <Link
                  href={`/work/${activeProject.slug}`}
                  onClick={() => {
                    setIsOpen(false);
                    onNavigate?.();
                  }}
                  className="inline-flex items-center text-[12px] font-semibold tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                >
                  <span>VIEW CASE STUDY</span>
                  <span className="ml-1.5 font-sans">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
