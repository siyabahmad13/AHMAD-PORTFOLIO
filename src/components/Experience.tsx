import React from "react";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] block mb-3">
            CAREER PATH
          </span>
          <h2 className="text-[36px] sm:text-[46px] md:text-[52px] font-bold tracking-tight text-[var(--text)] leading-tight">
            EXPERIENCE
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[var(--text-secondary)] mt-3">
            Professional roles, ventures, and operational responsibilities.
          </p>
        </div>

        {/* Experience List: Refined Cards in Light Mode, Classic Timeline in Dark Mode */}
        <div className="space-y-4 dark:space-y-0 dark:divide-y dark:divide-[var(--border)] dark:border-y dark:border-[var(--border)]">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] dark:bg-transparent dark:border-0 dark:rounded-none dark:p-0 dark:py-10 dark:md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--accent)]/50 hover:-translate-y-0.5 hover:shadow-xs dark:hover:translate-y-0 dark:hover:shadow-none"
            >
              {/* Period */}
              <div className="md:col-span-3">
                <span className="text-[13px] font-mono-meta text-[var(--text-secondary)] tracking-wider block">
                  {exp.period}
                </span>
                {exp.location && (
                  <span className="text-[12px] font-mono-meta text-[var(--accent)] tracking-wide mt-1 block">
                    {exp.location}
                  </span>
                )}
              </div>

              {/* Role & Organization */}
              <div className="md:col-span-4">
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[var(--text)] tracking-tight">
                  {exp.role}
                </h3>
                <div className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] font-medium mt-1">
                  {exp.organization}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="md:col-span-5">
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="text-[15px] text-[var(--text-secondary)] leading-relaxed flex items-start"
                    >
                      <span className="mr-3 text-[var(--accent)] select-none">—</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
