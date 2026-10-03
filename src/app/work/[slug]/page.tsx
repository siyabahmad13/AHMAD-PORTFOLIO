import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} — Case Study | Siyab Ahmad`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <article className="pt-8 pb-24 md:pb-36">
      {/* Top Breadcrumb & Return */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 mb-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-[13px] font-mono-meta text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors uppercase tracking-wider"
        >
          <span className="font-sans">←</span>
          <span>BACK TO SELECTED WORK</span>
        </Link>
      </div>

      {/* 1. Project name, 2. Category, 3. Short introduction */}
      <header className="max-w-5xl mx-auto px-6 sm:px-8 space-y-6 mb-12">
        <div className="flex items-center gap-4 text-[12px] font-mono-meta text-[var(--accent)] tracking-widest uppercase">
          <span>CASE STUDY</span>
          <span>/</span>
          <span>{project.year}</span>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">{project.category}</span>
        </div>

        <h1 className="text-[40px] sm:text-[54px] md:text-[64px] font-bold tracking-tight text-[var(--text)] leading-[1.08]">
          {project.title}
        </h1>

        <p className="text-[18px] sm:text-[22px] text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          {project.summary || project.description}
        </p>

        {/* 4. Large Hero Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[6px] border border-[var(--border)] bg-[#141413] shadow-md mt-8">
          <Image
            src={project.image}
            alt={`${project.title} Showcase`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1100px"
            className="object-cover"
          />
        </div>
      </header>

      {/* Main Case Study Content Sections */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-16 md:space-y-24">
        {/* 5. THE PROBLEM & 6. THE SOLUTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-8 border-t border-[var(--border)]">
          <div className="md:col-span-6 space-y-4">
            <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] font-semibold block">
              THE PROBLEM
            </span>
            <p className="text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="md:col-span-6 space-y-4">
            <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] font-semibold block">
              THE SOLUTION
            </span>
            <p className="text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* 7. MY ROLE */}
          <div className="md:col-span-12 space-y-3 pt-6 border-t border-[var(--border)]">
            <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] font-semibold block">
              MY ROLE
            </span>
            <p className="text-[16px] sm:text-[17px] text-[var(--text)] font-medium">
              {project.role}
            </p>
          </div>
        </div>

        {/* 8. KEY FEATURES & 9. TECHNOLOGY */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-8 border-t border-[var(--border)]">
          {/* Key Features */}
          <div className="md:col-span-7 space-y-6">
            <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] font-semibold block">
              KEY FEATURES
            </span>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] flex items-start"
                >
                  <span className="mr-3 text-[var(--accent)] font-bold select-none">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div className="md:col-span-5 space-y-6">
            <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] font-semibold block">
              TECHNOLOGY
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-[3px] border border-[var(--border)] bg-[var(--bg-secondary)] text-[13px] font-mono-meta text-[var(--text)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 10. PROCESS */}
        <div className="pt-8 border-t border-[var(--border)] space-y-8">
          <div>
            <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] font-semibold block mb-2">
              DEVELOPMENT PROCESS
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--text)] tracking-tight">
              From Research to Deployment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.process.map((step, idx) => (
              <div
                key={step.step}
                className="p-6 rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-mono-meta text-[var(--accent)] font-bold">
                      {step.step}
                    </span>
                    {idx < project.process.length - 1 && (
                      <span className="hidden lg:inline text-[var(--text-secondary)] text-[14px]">
                        →
                      </span>
                    )}
                  </div>
                  <h3 className="text-[17px] font-bold text-[var(--text)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 11. CHALLENGES & 12. OUTCOME */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-8 border-t border-[var(--border)]">
          <div className="md:col-span-6 space-y-4">
            <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] font-semibold block">
              CHALLENGES
            </span>
            <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed">
              {project.challenges}
            </p>
          </div>

          <div className="md:col-span-6 space-y-4">
            <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] font-semibold block">
              OUTCOME
            </span>
            <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* 13. Project Image / Presentation Mockup Showcase */}
        <div className="pt-8 border-t border-[var(--border)] space-y-6">
          <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] font-semibold block">
            PRODUCT PRESENTATION &amp; INTERFACE
          </span>
          <div className="relative aspect-[19/9] w-full overflow-hidden rounded-[6px] border border-[var(--border)] bg-[#141413] shadow-sm">
            <Image
              src={project.image}
              alt={`${project.title} Interface Presentation`}
              fill
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Links: LIVE PROJECT and SOURCE CODE */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="pt-8 border-t border-[var(--border)] flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[4px] text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 bg-[var(--btn-bg)] text-[var(--btn-text)] hover:opacity-90"
              >
                <span>LIVE DEMO</span>
                <span className="text-[14px]">↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[4px] text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-secondary)]"
              >
                <span>SOURCE CODE</span>
                <span className="text-[14px]">↗</span>
              </a>
            )}
          </div>
        )}

        {/* 14. Previous Project & 15. Next Project (Continuous 10-project navigation) */}
        <nav
          aria-label="Project Navigation"
          className="pt-12 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <Link
            href={`/work/${prevProject.slug}`}
            className="p-6 rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-colors group flex flex-col justify-between"
          >
            <span className="text-[11px] font-mono-meta text-[var(--text-secondary)] uppercase tracking-wider block mb-1">
              ← PREVIOUS PROJECT
            </span>
            <span className="text-[18px] font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
              {prevProject.title}
            </span>
            <span className="text-[12px] font-mono-meta text-[var(--text-secondary)] mt-1">
              {prevProject.category}
            </span>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="p-6 rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-colors group flex flex-col justify-between text-right"
          >
            <span className="text-[11px] font-mono-meta text-[var(--text-secondary)] uppercase tracking-wider block mb-1">
              NEXT PROJECT →
            </span>
            <span className="text-[18px] font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
              {nextProject.title}
            </span>
            <span className="text-[12px] font-mono-meta text-[var(--text-secondary)] mt-1">
              {nextProject.category}
            </span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
