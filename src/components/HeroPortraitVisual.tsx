import React from "react";
import Image from "next/image";

export function HeroPortraitVisual() {
  // SVG coordinate system:
  // ViewBox: 0 0 440 540
  // Perimeter path hugs the portrait rect (at x: 12..428, y: 12..528) with radius 14px.
  // The portrait itself occupies the inner area with margin clearance so the neon
  // stays strictly around the edges, NEVER across the face or photograph.
  const neonPerimeterPath =
    "M 220 12 L 412 12 A 16 16 0 0 1 428 28 L 428 512 A 16 16 0 0 1 412 528 L 28 528 A 16 16 0 0 1 12 512 L 12 28 A 16 16 0 0 1 28 12 Z";

  return (
    <div className="group relative w-full max-w-[420px] aspect-[4/5] mx-auto lg:ml-auto select-none">
      {/* 
        ========================================================================
        CONTINUOUS FLOWING NEON ENERGY PATTERN (PERIMETER OF THE PORTRAIT)
        Electric Blue -> Cyan-Blue -> Subtle Violet -> Subtle Pink -> Electric Blue
        ========================================================================
      */}
      <div
        aria-hidden="true"
        className="hero-neon-container absolute -inset-3 sm:-inset-3.5 pointer-events-none z-0 overflow-visible transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-85 group-hover:opacity-100"
      >
        <svg
          viewBox="0 0 440 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Multi-tone Neon Gradient: Electric Blue -> Cyan -> Violet -> Pink -> Electric Blue */}
            <linearGradient
              id="heroNeonGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="28%" stopColor="#2979FF" />
              <stop offset="55%" stopColor="#7C4DFF" />
              <stop offset="78%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>

            {/* Trailing phase gradient for stream 2 */}
            <linearGradient
              id="heroNeonGradientTrail"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="30%" stopColor="#7C4DFF" />
              <stop offset="65%" stopColor="#2979FF" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>

            {/* Soft Ambient Neon Glow Filter (crisp core + soft luminous falloff) */}
            <filter
              id="heroNeonGlow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="4.5" result="softGlow" />
              <feGaussianBlur stdDeviation="1.5" result="sharpGlow" />
              <feMerge>
                <feMergeNode in="softGlow" />
                <feMergeNode in="sharpGlow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Diffused outer atmospheric halo */}
            <filter
              id="heroNeonHalo"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          {/* 1. Diffused Atmospheric Neon Halo (Soft environmental color) */}
          <path
            d={neonPerimeterPath}
            pathLength="1000"
            fill="none"
            stroke="url(#heroNeonGradient)"
            strokeWidth="7"
            filter="url(#heroNeonHalo)"
            className="opacity-[0.20] group-hover:opacity-[0.38] transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />

          {/* 2. Delicate Underlying Baseline Track (Guides the light path) */}
          <path
            d={neonPerimeterPath}
            pathLength="1000"
            fill="none"
            stroke="url(#heroNeonGradient)"
            strokeWidth="1.2"
            className="opacity-[0.28] group-hover:opacity-[0.50] transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />

          {/* 3. Primary Flowing Liquid Light Stream (Continuous 14s loop) */}
          <path
            d={neonPerimeterPath}
            pathLength="1000"
            fill="none"
            stroke="url(#heroNeonGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="220 780"
            filter="url(#heroNeonGlow)"
            className="hero-neon-stream-1 opacity-[0.85] group-hover:opacity-[1.0] transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />

          {/* 4. Secondary Harmonic Trailing Stream (Continuous 14s loop, 50% phase offset) */}
          <path
            d={neonPerimeterPath}
            pathLength="1000"
            fill="none"
            stroke="url(#heroNeonGradientTrail)"
            strokeWidth="2.0"
            strokeLinecap="round"
            strokeDasharray="140 860"
            filter="url(#heroNeonGlow)"
            className="hero-neon-stream-2 opacity-[0.70] group-hover:opacity-[0.92] transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
        </svg>
      </div>

      {/* 
        ========================================================================
        PORTRAIT FRAME & PHOTOGRAPH (THE MAIN VISUAL ANCHOR)
        Clean, uncluttered, sits securely inside the flowing light perimeter
        ========================================================================
      */}
      <div className="hero-portrait-frame relative w-full h-full rounded-[8px] overflow-hidden border border-[var(--border)] bg-[var(--bg-secondary)] shadow-[0_2px_8px_rgba(0,0,0,0.06),0_16px_36px_-12px_rgba(0,0,0,0.12)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.10),0_24px_48px_-12px_rgba(0,0,0,0.18)]">
        <Image
          src="/images/hero-image.jpeg"
          alt="Siyab Ahmad Khan — Software Engineer"
          fill
          priority
          sizes="(max-width: 768px) 85vw, 420px"
          className="object-cover grayscale-[25%] contrast-[1.01] brightness-[0.99] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:scale-[1.025] group-hover:contrast-[1.03] group-hover:brightness-100"
        />

        {/* Subtle luminous edge reflection on hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 bg-gradient-to-t from-[#2979FF]/10 via-transparent to-[#F43F5E]/5" />
      </div>
    </div>
  );
}
