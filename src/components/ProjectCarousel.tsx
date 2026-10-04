"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragDeltaY, setDragDeltaY] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [progress, setProgress] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const totalProjects = projects.length;
  const AUTOPLAY_DURATION = 5000;

  /*
   * ----------------------------------------
   * REDUCED MOTION
   * ----------------------------------------
   */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  /*
   * ----------------------------------------
   * SCROLL REVEAL
   * ----------------------------------------
   */

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  /*
   * ----------------------------------------
   * PROJECT NAVIGATION
   * ----------------------------------------
   */

  const goToProject = useCallback(
    (index: number, moveDirection?: 1 | -1) => {
      const nextIndex =
        (index + totalProjects) % totalProjects;

      setDirection(moveDirection ?? 1);
      setCurrentIndex(nextIndex);
      setProgress(0);
    },
    [totalProjects]
  );

  const nextProject = useCallback(() => {
    goToProject(currentIndex + 1, 1);
  }, [currentIndex, goToProject]);

  const prevProject = useCallback(() => {
    goToProject(currentIndex - 1, -1);
  }, [currentIndex, goToProject]);

  /*
   * ----------------------------------------
   * AUTOPLAY
   * ----------------------------------------
   */

  useEffect(() => {
    if (isPaused || isDragging || reducedMotion) {
      return;
    }

    setProgress(0);

    const startTime = Date.now();

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;

      const value = Math.min(
        (elapsed / AUTOPLAY_DURATION) * 100,
        100
      );

      setProgress(value);
    }, 50);

    timerRef.current = setTimeout(() => {
      nextProject();
    }, AUTOPLAY_DURATION);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [
    currentIndex,
    isPaused,
    isDragging,
    reducedMotion,
    nextProject,
  ]);

  /*
   * ----------------------------------------
   * POINTER / SWIPE
   * ----------------------------------------
   */

  const handlePointerDown = (
    event: React.PointerEvent
  ) => {
    if (event.button !== 0) return;

    setIsDragging(true);
    setDragStartY(event.clientY);
    setDragDeltaY(0);
  };

  const handlePointerMove = (
    event: React.PointerEvent
  ) => {
    if (!isDragging) return;

    setDragDeltaY(event.clientY - dragStartY);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;

    const threshold = 45;

    if (dragDeltaY < -threshold) {
      nextProject();
    }

    if (dragDeltaY > threshold) {
      prevProject();
    }

    setIsDragging(false);
    setDragDeltaY(0);
  };

  const activeProject = projects[currentIndex];

  const nextProjectData =
    projects[(currentIndex + 1) % totalProjects];

  const prevProjectData =
    projects[
      (currentIndex - 1 + totalProjects) %
        totalProjects
    ];

  /*
   * ----------------------------------------
   * PROJECT CHANGE ANIMATION
   * ----------------------------------------
   */

  const getAnimationClass = () => {
    if (reducedMotion) {
      return "";
    }

    return direction === 1
      ? "project-enter-up"
      : "project-enter-down";
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-label="Selected Work"
      className="
        relative
        overflow-hidden
        border-t
        border-[var(--border)]
        bg-[var(--bg-secondary)]
        py-10
        sm:py-12
        md:py-14
        transition-all
        duration-1000
      "
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="mb-7 sm:mb-8">

          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-5 bg-[var(--accent)]" />

            <span
              className="
                text-[10px]
                sm:text-[11px]
                font-mono-meta
                tracking-[0.18em]
                uppercase
                text-[var(--accent)]
                font-semibold
              "
            >
              SELECTED WORK
            </span>
          </div>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-end
              sm:justify-between
              gap-3
            "
          >

            <div>
              <h2
                className="
                  text-[27px]
                  sm:text-[32px]
                  md:text-[36px]
                  font-bold
                  tracking-tight
                  leading-none
                  text-[var(--text)]
                "
              >
                Projects I&apos;ve Built
              </h2>

              <p
                className="
                  mt-2
                  max-w-xl
                  text-[13px]
                  sm:text-[14px]
                  leading-relaxed
                  text-[var(--text-secondary)]
                "
              >
                Web applications, AI systems and digital
                products built to solve real problems.
              </p>
            </div>

            {/* PROJECT NUMBER */}

            <div
              className="
                flex
                items-center
                gap-2
                font-mono-meta
                text-[11px]
                text-[var(--text-secondary)]
              "
            >
              <span className="text-[var(--accent)] font-bold">
                {(currentIndex + 1)
                  .toString()
                  .padStart(2, "0")}
              </span>

              <span>/</span>

              <span>
                {totalProjects
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>

          </div>
        </div>


        {/* =====================================
            MAIN PRODUCT DECK
        ===================================== */}

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);

            if (isDragging) {
              setIsDragging(false);
              setDragDeltaY(0);
            }
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            setIsDragging(false);
            setDragDeltaY(0);
          }}
          className={`
            product-reveal
            ${isRevealed ? "product-reveal-visible" : ""}
            relative
            grid
            grid-cols-1
            lg:grid-cols-[0.72fr_1.28fr]
            gap-6
            lg:gap-8
            items-center
            select-none
            touch-pan-y
          `}
        >

          {/* ===================================
              LEFT INFORMATION PANEL
          =================================== */}

          <div className="order-2 lg:order-1">

            <div
              className="
                flex
                items-center
                gap-2
                mb-3
              "
            >

              <span
                className="
                  text-[11px]
                  font-mono-meta
                  uppercase
                  tracking-[0.15em]
                  text-[var(--accent)]
                  font-semibold
                "
              >
                {activeProject.category}
              </span>

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[var(--border)]
                "
              />

              <span
                className="
                  text-[11px]
                  font-mono-meta
                  text-[var(--text-muted)]
                "
              >
                PROJECT
              </span>

            </div>


            <div
              key={activeProject.id}
              className={getAnimationClass()}
            >

              <h3
                className="
                  text-[28px]
                  sm:text-[34px]
                  md:text-[40px]
                  lg:text-[44px]
                  font-bold
                  tracking-[-0.03em]
                  leading-[0.98]
                  text-[var(--text)]
                "
              >
                {activeProject.title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-md
                  text-[13.5px]
                  sm:text-[14px]
                  leading-[1.7]
                  text-[var(--text-secondary)]
                "
              >
                {activeProject.description}
              </p>


              {/* CASE STUDY */}

              <div className="mt-5">

                <Link
                  href={`/work/${activeProject.slug}`}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    border-b
                    border-[var(--accent)]
                    pb-1
                    text-[11.5px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[var(--text)]
                    transition-all
                    hover:text-[var(--accent)]
                  "
                >
                  View Case Study

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>

              </div>

            </div>


            {/* =================================
                PREV / NEXT CONTROLS
            ================================= */}

            <div
              className="
                mt-7
                grid
                grid-cols-2
                gap-2
              "
            >

              {/* PREVIOUS */}

              <button
                type="button"
                onClick={prevProject}
                aria-label={`Previous project: ${prevProjectData.title}`}
                className="
                  group
                  min-w-0
                  rounded-[3px]
                  border
                  border-[var(--border)]
                  bg-white
                  px-3
                  py-2.5
                  text-left
                  cursor-pointer
                  transition-all
                  duration-200
                  hover:border-[var(--accent)]
                  hover:bg-[var(--accent)]
                  hover:text-white
                "
              >

                <span
                  className="
                    block
                    mb-1
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-[var(--text-muted)]
                    transition-colors
                    group-hover:text-white/80
                  "
                >
                  Previous
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-1.5
                    truncate
                    text-[12px]
                    font-semibold
                  "
                >
                  <span>←</span>

                  <span className="truncate">
                    {prevProjectData.title}
                  </span>
                </span>

              </button>


              {/* NEXT */}

              <button
                type="button"
                onClick={nextProject}
                aria-label={`Next project: ${nextProjectData.title}`}
                className="
                  group
                  min-w-0
                  rounded-[3px]
                  border
                  border-[var(--accent)]
                  bg-[var(--accent)]
                  px-3
                  py-2.5
                  text-right
                  text-white
                  cursor-pointer
                  transition-all
                  duration-200
                  hover:bg-transparent
                  hover:text-[var(--accent)]
                "
              >

                <span
                  className="
                    block
                    mb-1
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-white/80
                    transition-colors
                    group-hover:text-[var(--accent)]
                  "
                >
                  Next
                </span>

                <span
                  className="
                    flex
                    items-center
                    justify-end
                    gap-1.5
                    truncate
                    text-[12px]
                    font-semibold
                  "
                >

                  <span className="truncate">
                    {nextProjectData.title}
                  </span>

                  <span>→</span>

                </span>

              </button>

            </div>

          </div>


          {/* ===================================
              RIGHT PRODUCT IMAGE
          =================================== */}

          <div className="order-1 lg:order-2">

            <div className="relative w-full">

              {/* ACTIVE IMAGE */}

              <div
                key={activeProject.id}
                className={`
                  relative
                  aspect-[16/9]
                  w-full
                  overflow-hidden
                  border
                  border-[var(--border)]
                  rounded-[3px]
                  bg-white
                  shadow-[0_18px_45px_-20px_rgba(0,0,0,0.16)]
                  ${getAnimationClass()}
                `}
              >

                <Image
                  src={activeProject.image}
                  alt={`${activeProject.title} — ${activeProject.category}`}
                  fill
                  priority
                  sizes="
                    (max-width: 1024px) 100vw,
                    760px
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    hover:scale-[1.025]
                  "
                  draggable={false}
                />


                {/* IMAGE OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/10
                    via-transparent
                    to-transparent
                  "
                />


                {/* IMAGE NUMBER */}

                <div
                  className="
                    absolute
                    bottom-3
                    right-3
                    z-10
                    border
                    border-black/10
                    bg-white/90
                    px-2
                    py-1
                    text-[10px]
                    font-mono-meta
                    font-semibold
                    text-[var(--text)]
                    backdrop-blur-sm
                  "
                >
                  {(currentIndex + 1)
                    .toString()
                    .padStart(2, "0")}
                </div>

              </div>


              {/* =================================
                  NEXT PROJECT PREVIEW
              ================================= */}

              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-between
                  gap-4
                  rounded-[3px]
                  border
                  border-[var(--border)]
                  bg-white
                  px-3
                  py-2.5
                  shadow-[0_8px_25px_-18px_rgba(0,0,0,0.25)]
                "
              >

                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      relative
                      h-[42px]
                      w-[72px]
                      shrink-0
                      overflow-hidden
                      rounded-[2px]
                      border
                      border-[var(--border)]
                      bg-white
                    "
                  >

                    <Image
                      src={nextProjectData.image}
                      alt=""
                      fill
                      sizes="72px"
                      className="
                        object-cover
                        opacity-75
                        transition-transform
                        duration-500
                        hover:scale-105
                      "
                    />

                  </div>


                  <div className="min-w-0">

                    <span
                      className="
                        block
                        text-[9px]
                        uppercase
                        tracking-[0.14em]
                        text-[var(--text-muted)]
                      "
                    >
                      Up next
                    </span>

                    <span
                      className="
                        block
                        truncate
                        text-[11.5px]
                        font-semibold
                        text-[var(--text)]
                      "
                    >
                      {nextProjectData.title}
                    </span>

                  </div>

                </div>


                {/* PROGRESS */}

                <div
                  className="
                    hidden
                    sm:block
                    w-28
                    shrink-0
                  "
                >

                  <div
                    className="
                      h-[3px]
                      w-full
                      overflow-hidden
                      rounded-full
                      bg-[var(--border)]
                    "
                  >

                    <div
                      style={{
                        width: `${progress}%`,
                      }}
                      className="
                        h-full
                        rounded-full
                        bg-[var(--accent)]
                        transition-[width]
                        duration-75
                        ease-linear
                      "
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
