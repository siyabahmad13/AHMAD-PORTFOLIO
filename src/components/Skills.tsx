import React from "react";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section className="py-20 md:py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] block mb-3">
            CAPABILITIES
          </span>
          <h2 className="text-[36px] sm:text-[46px] md:text-[52px] font-bold tracking-tight text-[var(--text)] leading-tight">
            SKILLS
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[var(--text-secondary)] mt-3">
            Core technologies, libraries, and tools utilized across projects.
          </p>
        </div>

        {/* Clean Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--accent)]/50 hover:-translate-y-0.5 hover:shadow-xs"
            >
              <div>
                <h3 className="text-[13px] font-mono-meta tracking-[0.2em] uppercase font-semibold text-[var(--text)] pb-4 border-b border-[var(--border)] mb-5">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[15px] sm:text-[16px] font-medium text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors flex items-center justify-between"
                    >
                      <span>{skill}</span>
                      <span className="text-[12px] font-mono-meta text-[var(--accent)] opacity-60">
                        •
                      </span>
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
