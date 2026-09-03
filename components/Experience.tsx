
import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Career Milestones" className="bg-slate-50 dark:bg-[#070a13] relative overflow-hidden transition-colors duration-500">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Glowing Spine Track */}
        <div className="absolute left-4 md:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan opacity-40" />

        <div className="space-y-12 relative">
          {EXPERIENCE_DATA.map((item, index) => (
            <div
              key={index}
              className="relative pl-12 md:pl-20 group transition-all duration-300"
            >
              {/* Timeline Marker Node */}
              <div className="absolute left-2 md:left-6 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#0d1424] border-2 border-neon-blue group-hover:border-neon-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,191,255,0.4)] transition-all duration-300 group-hover:scale-110 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-neon-blue dark:bg-neon-cyan group-hover:bg-neon-purple animate-pulse" />
              </div>

              {/* Card Container */}
              <div className="bg-white dark:bg-[#0b1220]/90 border border-slate-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 hover:border-slate-300 dark:hover:border-gray-700 shadow-sm dark:shadow-xl transition-all duration-300 backdrop-blur-sm relative">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-gray-800/80 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-neon-blue dark:group-hover:text-neon-cyan transition-colors flex items-center gap-2">
                      <span>{item.role}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-gray-400 mt-1">
                      <span className="font-semibold text-neon-blue flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {item.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-neon-purple" />
                        {item.location} ({item.type})
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-[#131d33] text-neon-blue dark:text-neon-cyan border border-slate-200 dark:border-neon-blue/30 self-start sm:self-center shadow-sm">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">
                    Core Engineering Deliverables:
                  </h4>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements Highlight Box */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mt-5 p-3.5 rounded-xl bg-slate-50 dark:bg-gradient-to-r dark:from-neon-blue/10 dark:via-neon-purple/10 dark:to-transparent border border-slate-200 dark:border-neon-cyan/20">
                    <div className="flex items-center gap-2 text-xs font-bold text-neon-blue dark:text-neon-cyan mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Measurable Impact</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((ach, aIdx) => (
                        <span
                          key={aIdx}
                          className="text-xs text-slate-800 dark:text-gray-200 bg-white dark:bg-[#121c32] px-2.5 py-1 rounded-lg border border-slate-200 dark:border-gray-700/60 font-medium shadow-sm"
                        >
                          ✦ {ach}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies Stack Tags */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-gray-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono uppercase text-slate-400 dark:text-gray-400 mr-1">Stack:</span>
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-[#141e33] text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;

