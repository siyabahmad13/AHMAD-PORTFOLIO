import React, { useState } from 'react';
import { X, ExternalLink, GitBranch, Star, CheckCircle, Layers, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [stars, setStars] = useState<number>(project?.initialStars || 42);
  const [hasStarred, setHasStarred] = useState(false);

  if (!project) return null;

  const handleStar = () => {
    if (!hasStarred) {
      setStars(prev => prev + 1);
      setHasStarred(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FFD700', '#00FFFF', '#8A2BE2'],
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#0b101d] border border-slate-200 dark:border-gray-800 rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative text-slate-900 dark:text-white"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-[#0e1628]">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neon-blue/15 text-neon-blue dark:text-neon-cyan border border-neon-blue/30">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neon-purple/15 text-neon-purple border border-neon-purple/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Featured Architecture
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          {/* Cover image banner */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-gray-800 group h-56 md:h-72">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 dark:from-[#0b101d] via-black/30 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-md">
                  {project.title}
                </h2>
                <p className="text-neon-cyan text-xs md:text-sm font-medium mt-1 drop-shadow">
                  {project.tagline}
                </p>
              </div>

              {/* Interactive Star Button */}
              <button
                onClick={handleStar}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  hasStarred
                    ? 'bg-amber-400 text-gray-950 shadow-[0_0_15px_rgba(251,191,36,0.6)]'
                    : 'bg-black/70 text-white hover:bg-black/90 border border-white/20'
                }`}
              >
                <Star className={`w-3.5 h-3.5 ${hasStarred ? 'fill-current' : ''}`} />
                <span>{stars} Stars</span>
              </button>
            </div>
          </div>

          {/* Metrics Highlight Callout */}
          {project.metrics && (
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-gradient-to-r dark:from-neon-blue/10 dark:via-neon-purple/10 dark:to-transparent border border-slate-200 dark:border-neon-blue/30 flex items-center gap-3">
              <Award className="w-5 h-5 text-neon-blue dark:text-neon-cyan flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-slate-800 dark:text-white uppercase tracking-wider text-[10px] block">
                  Performance Metric:
                </span>
                <span className="text-slate-600 dark:text-gray-300 font-medium">{project.metrics}</span>
              </div>
            </div>
          )}

          {/* Overview Paragraph */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-2">
              System Architecture & Overview
            </h3>
            <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
              {project.fullOverview || project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Key Engineering Deliverables
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue dark:bg-neon-cyan mt-1.5 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Stack */}
          {project.architecture && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-neon-purple" /> Technical Stack Layers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.architecture.map((layer, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0e1628] border border-slate-200 dark:border-gray-800 text-xs text-slate-700 dark:text-gray-300 font-mono"
                  >
                    {layer}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Tags */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-2">
              Tags & Tooling
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-[#141e33] text-neon-blue dark:text-neon-cyan border border-slate-200 dark:border-neon-blue/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300 shadow-lg shadow-neon-blue/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live System</span>
            </a>

            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-slate-300 dark:border-gray-700 transition-all duration-300"
            >
              <GitBranch className="w-4 h-4 text-neon-blue dark:text-neon-cyan" />
              <span>Inspect Source Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
