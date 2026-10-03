"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const [autoplayProgress, setAutoplayProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalProjects = projects.length; // 10 projects
  const AUTOPLAY_DURATION = 5000; // 5 seconds
  const PROGRESS_TICK = 50;

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const goToProject = useCallback(
    (index: number) => {
      const nextIdx = (index + totalProjects) % totalProjects;
      setCurrentIndex(nextIdx);
      setAutoplayProgress(0);
    },
    [totalProjects]
  );

  const nextProject = useCallback(() => {
    goToProject(currentIndex + 1);
  }, [currentIndex, goToProject]);

  const prevProject = useCallback(() => {
    goToProject(currentIndex - 1);
  }, [currentIndex, goToProject]);

  // Autoplay and progress bar handling
  useEffect(() => {
    if (isPaused || isDragging) return;

    setAutoplayProgress(0);
    const startTime = Date.now();

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);
      setAutoplayProgress(progress);
    }, PROGRESS_TICK);

    timerRef.current = setTimeout(() => {
      nextProject();
    }, AUTOPLAY_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentIndex, isPaused, isDragging, nextProject]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevProject();
    } else if (e.key === "ArrowRight") {
      nextProject();
    }
  };

  // Drag / Swipe handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDeltaX(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX;
    setDragDeltaX(delta);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    const threshold = 40; // Drag threshold in px
    if (dragDeltaX < -threshold) {
      nextProject();
    } else if (dragDeltaX > threshold) {
      prevProject();
    }
    setIsDragging(false);
    setDragDeltaX(0);
  };

  const activeProject = projects[currentIndex];

  // Circular offset relative to active project (-5 to +5 for 10 items)
  const getOffset = (idx: number) => {
    let diff = idx - currentIndex;
    while (diff > totalProjects / 2) diff -= totalProjects;
    while (diff < -totalProjects / 2) diff += totalProjects;
    return diff;
  };

  return (
    <section
      id="work"
      aria-label="Selected Work Showcase"
      className="py-14 sm:py-20 border-t border-[var(--border)] overflow-hidden select-none focus:outline-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] block mb-2 font-medium">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-[34px] sm:text-[44px] md:text-[50px] font-bold tracking-tight text-[var(--text)] leading-none">
              SELECTED WORK
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] mt-2">
              A selection of software projects and digital products.
            </p>
          </div>

          {/* Minimal Controls on Desktop Top Right */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={prevProject}
              aria-label="Previous project"
              className="h-10 w-10 rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] flex items-center justify-center text-[16px] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-pointer"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="h-10 w-10 rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] flex items-center justify-center text-[16px] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-pointer"
            >
              →
            </button>
          </div>
        </div>

        {/* 3D CAROUSEL STAGE */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            if (isDragging) {
              setIsDragging(false);
              setDragDeltaX(0);
            }
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            setIsDragging(false);
            setDragDeltaX(0);
          }}
          style={{ perspective: "1300px" }}
          className="relative w-full h-[250px] sm:h-[350px] md:h-[440px] lg:h-[490px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y rounded-[8px] bg-[var(--carousel-bg)] border border-[var(--carousel-stage-border)] transition-colors duration-300"
        >
          {projects.map((project, idx) => {
            const offset = getOffset(idx);
            const isActive = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isFar = Math.abs(offset) >= 2;

            let translateX = "0%";
            let translateZ = "0px";
            let rotateY = "0deg";
            let scale = 1;
            let opacity: number | string = 1;
            let zIndex = 10;
            let pointerEvents: "auto" | "none" = "auto";
            let filter = "none";

            if (isActive) {
              scale = 1;
              opacity = 1;
              zIndex = 30;
              translateX = "0%";
              translateZ = "30px";
              rotateY = "0deg";
              filter = "none";
            } else if (isLeft) {
              scale = 0.84;
              opacity = "var(--side-card-opacity)";
              zIndex = 20;
              translateX = "-58%";
              translateZ = "-60px";
              rotateY = reducedMotion ? "0deg" : "9deg";
              filter = "var(--side-card-filter)";
            } else if (isRight) {
              scale = 0.84;
              opacity = "var(--side-card-opacity)";
              zIndex = 20;
              translateX = "58%";
              translateZ = "-60px";
              rotateY = reducedMotion ? "0deg" : "-9deg";
              filter = "var(--side-card-filter)";
            } else if (isFar) {
              scale = 0.68;
              opacity = 0;
              zIndex = 5;
              translateX = offset < 0 ? "-100%" : "100%";
              translateZ = "-180px";
              rotateY = offset < 0 ? "15deg" : "-15deg";
              pointerEvents = "none";
              filter = "none";
            }

            const formattedNum = (idx + 1).toString().padStart(2, "0");

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (!isActive) goToProject(idx);
                }}
                style={{
                  transform: `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents,
                  filter,
                  transition: isDragging
                    ? "none"
                    : reducedMotion
                    ? "opacity 200ms ease"
                    : "transform 750ms cubic-bezier(0.16, 1, 0.3, 1), opacity 750ms ease, filter 750ms ease",
                }}
                className={`group/card absolute w-[86%] sm:w-[68%] md:w-[60%] lg:w-[56%] max-w-[760px] aspect-[16/9] rounded-[6px] overflow-hidden border bg-[var(--bg-secondary)] shadow-xl ${
                  isActive
                    ? "border-[var(--accent)] shadow-2xl cursor-default"
                    : "border-[var(--border)] cursor-pointer hover:border-[var(--accent)]/50 hover:opacity-95"
                }`}
              >
                <div className="relative w-full h-full bg-[#141413]">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    fill
                    sizes="(max-width: 768px) 85vw, 680px"
                    priority={isActive || isLeft || isRight}
                    className="object-cover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-[1.025] group-hover/card:contrast-[1.03] group-hover/card:saturate-[1.05]"
                    draggable={false}
                  />

                  {/* Corner Badge on Side Cards */}
                  {!isActive && (
                    <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono-meta text-[#F5F5F2] border border-[#333330]">
                      {formattedNum} — {project.title}
                    </div>
                  )}

                  {/* Active Accent Line */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ACTIVE PROJECT INFORMATION (Displayed exclusively for the center project) */}
        <div className="mt-8 sm:mt-12 text-center max-w-2xl mx-auto space-y-3">
          <h3 className="text-[28px] sm:text-[34px] font-bold tracking-tight text-[var(--text)]">
            {activeProject.title}
          </h3>

          <div className="text-[13px] font-mono-meta tracking-wider uppercase text-[var(--accent)] font-medium">
            {activeProject.category}
          </div>

          <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] leading-relaxed pt-1">
            {activeProject.description}
          </p>

          <div className="pt-3">
            <Link
              href={`/work/${activeProject.slug}`}
              className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold tracking-wider uppercase text-[var(--text)] hover:text-[var(--accent)] transition-colors group"
            >
              <span>VIEW CASE STUDY</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* PROGRESS INDICATOR & NAVIGATION BAR */}
        <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center justify-between">
          {/* Mobile Arrow Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={prevProject}
              aria-label="Previous project"
              className="h-8 w-8 rounded-[3px] border border-[var(--border)] bg-[var(--bg-secondary)] flex items-center justify-center text-[13px] text-[var(--text)] active:bg-[var(--accent)] active:text-black cursor-pointer"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="h-8 w-8 rounded-[3px] border border-[var(--border)] bg-[var(--bg-secondary)] flex items-center justify-center text-[13px] text-[var(--text)] active:bg-[var(--accent)] active:text-black cursor-pointer"
            >
              →
            </button>
          </div>

          {/* Thin Progress Bar Indicator */}
          <div className="flex-1 max-w-xs mx-4 hidden sm:block">
            <div className="h-[2px] w-full bg-[var(--border)] overflow-hidden rounded-full">
              <div
                style={{ width: `${autoplayProgress}%` }}
                className="h-full bg-[var(--accent)] transition-all duration-75 ease-linear"
              />
            </div>
          </div>

          {/* Step Counter: 01 / 10 */}
          <div className="text-[13px] font-mono-meta text-[var(--text-secondary)] tracking-wider">
            <span className="text-[var(--text)] font-semibold">
              {(currentIndex + 1).toString().padStart(2, "0")}
            </span>{" "}
            / {totalProjects.toString().padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}
