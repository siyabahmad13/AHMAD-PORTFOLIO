import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <article className="group py-12 md:py-20 border-b border-[var(--border)] last:border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Project Image Block (Visually dominant) */}
        <div
          className={`lg:col-span-7 ${
            isReversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Link
            href={`/work/${project.slug}`}
            className="block relative aspect-[16/10] w-full overflow-hidden rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] shadow-xs transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-[var(--accent)] group-hover:shadow-md"
          >
            <Image
              src={project.image}
              alt={`${project.title} — ${project.subtitle}`}
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:contrast-[1.03] group-hover:saturate-[1.05]"
            />
            {/* Expanding bottom accent indicator line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[var(--accent)] transform scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left group-hover:scale-x-100" />
          </Link>
        </div>

        {/* Project Description Block */}
        <div
          className={`lg:col-span-5 flex flex-col justify-center space-y-4 ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-mono-meta text-[var(--accent)] tracking-wider uppercase font-medium">
              0{index + 1}
            </span>
            <span className="text-[12px] font-mono-meta text-[var(--text-secondary)]">
              /
            </span>
            <span className="text-[12px] font-mono-meta text-[var(--text-secondary)] tracking-wider">
              {project.year}
            </span>
          </div>

          <div>
            <h3 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold tracking-tight text-[var(--text)] transition-transform duration-300 group-hover:translate-x-1">
              <Link href={`/work/${project.slug}`}>
                {project.title.toUpperCase()}
              </Link>
            </h3>
            <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>

          {/* Small technology list */}
          <div className="pt-2">
            <div className="text-[12px] font-mono-meta text-[var(--text-secondary)] tracking-wide">
              {project.technologies.join(" · ")}
            </div>
          </div>

          {/* View Case Study Link */}
          <div className="pt-4">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wider uppercase text-[var(--text)] transition-colors group-hover:text-[var(--accent)]"
            >
              <span>VIEW CASE STUDY</span>
              <span className="text-[14px] font-sans transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
