import React from "react";
import Image from "next/image";

const corePillars = [
  "Software Engineering",
  "Full-Stack Development",
  "AI / Machine Learning",
  "Digital Products",
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 border-t border-[var(--border)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Clean Image Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] block mb-3">
                BACKGROUND
              </span>
              <h2 className="text-[36px] sm:text-[46px] md:text-[52px] font-bold tracking-tight text-[var(--text)] leading-tight">
                ABOUT
              </h2>
            </div>

            <div className="group relative w-full overflow-hidden rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] shadow-xs transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--text-secondary)]/50 hover:-translate-y-1 hover:shadow-md">
              <Image
                src="/images/about.jpeg"
                alt="Siyab Ahmad — Software Engineer"
                width={1600}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="block w-full h-auto brightness-[0.98] contrast-[0.99] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015] group-hover:brightness-100 group-hover:contrast-[1.02]"
              />
            </div>
          </div>

          {/* Right Column: Statement, Paragraphs, and Pillar List */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pt-14">
            <h3 className="text-[24px] sm:text-[30px] md:text-[34px] font-semibold text-[var(--text)] tracking-tight leading-snug">
              I build practical software with a focus on clean user experiences
              and reliable technology.
            </h3>

            <div className="space-y-4 text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-relaxed">
              <p>
                My work centers on designing, engineering, and deploying digital
                applications that solve real-world problems. Whether building
                full-stack web platforms or integrating machine learning
                workflows, I emphasize maintainability, fast response times, and
                clear interface design.
              </p>
              <p>
                I prioritize clean architecture and practical solutions over
                unnecessary complexity. Every system is constructed with solid
                fundamentals to ensure stability, straightforward scalability,
                and an intuitive experience for end users.
              </p>
            </div>

            {/* Small Pillar List (No icons) */}
            <div className="pt-4 border-t border-[var(--border)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {corePillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="flex items-center space-x-3 py-2 border-b border-[var(--border)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span className="text-[15px] font-medium text-[var(--text)]">
                      {pillar}
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
