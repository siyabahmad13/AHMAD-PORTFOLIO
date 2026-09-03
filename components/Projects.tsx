
import React, { useState, useMemo } from 'react';
import Section from './Section';
import { PROJECTS_DATA } from '../constants';
import { Project, ProjectCategory } from '../types';
import { ExternalLink, GitBranch, Sparkles, Star, Layers, Search, ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  onSelectProject?: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: ProjectCategory[] = ['All', 'Frontend', 'Full Stack', 'UI Design'];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter(project => {
      const matchesCategory =
        activeFilter === 'All' || project.category === activeFilter;

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <Section id="projects" title="Featured Work & Systems" className="bg-slate-100/60 dark:bg-[#080c16] relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Controls: Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 dark:text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Filter by name, tech (e.g. Next.js, Redis)..."
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-[#0e1628] border border-slate-300 dark:border-gray-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-neon-blue dark:focus:border-neon-cyan transition-colors shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-md shadow-neon-blue/20'
                    : 'bg-white dark:bg-[#0e1628] text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800 border border-slate-200 dark:border-gray-800 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#0b1220]/90 border border-slate-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-gray-700 transition-all duration-500 hover:-translate-y-1 shadow-sm dark:shadow-xl flex flex-col justify-between group backdrop-blur-sm relative"
            >
              {/* Card Image Banner */}
              <div
                className="relative h-52 overflow-hidden cursor-pointer"
                onClick={() => onSelectProject && onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#0b1220] via-transparent to-transparent" />

                {/* Category & Featured Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-neon-cyan border border-neon-cyan/40">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-neon-purple/80 text-white flex items-center gap-1 backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-yellow-300" /> Featured
                    </span>
                  )}
                </div>

                {/* Inspect Architecture overlay pill */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neon-blue/90 text-white shadow-lg flex items-center gap-1 backdrop-blur-md">
                    <span>Inspect Specs</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-neon-blue dark:group-hover:text-neon-cyan transition-colors cursor-pointer"
                      onClick={() => onSelectProject && onSelectProject(project)}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center text-amber-500 dark:text-amber-400 text-xs font-mono gap-0.5">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{project.initialStars || 42}</span>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-neon-blue dark:text-neon-cyan mt-0.5 font-mono">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-gray-400 mt-2.5 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlight Metric Pill */}
                  {project.metrics && (
                    <div className="mt-3 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#141f36] border border-slate-200 dark:border-neon-blue/20 text-[11px] text-slate-800 dark:text-neon-cyan font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-blue dark:bg-neon-cyan" />
                      <span className="truncate">{project.metrics}</span>
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-[#111a2e] text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-gray-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject && onSelectProject(project)}
                    className="text-xs font-medium text-slate-700 dark:text-gray-300 hover:text-neon-blue dark:hover:text-neon-cyan transition-colors flex items-center gap-1"
                  >
                    <Layers className="w-3.5 h-3.5 text-neon-purple" />
                    <span>Deep Dive</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-[#101729] hover:bg-slate-200 dark:hover:bg-gray-800 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-gray-800 transition-colors shadow-sm"
                      title="View Source Repository"
                    >
                      <GitBranch className="w-4 h-4 text-neon-blue dark:text-neon-cyan" />
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-opacity shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-mono text-sm">
            No projects found matching your query.
          </div>
        )}
      </div>
    </Section>
  );
};

export default Projects;

