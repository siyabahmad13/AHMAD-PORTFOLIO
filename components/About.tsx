
import React, { useState } from 'react';
import Section from './Section';
import { Code2, Compass, Cpu, Heart, CheckCircle2, Award, Terminal, Laptop, Globe, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'philosophy' | 'setup'>('story');

  const HIGHLIGHTS = [
    {
      icon: <Code2 className="w-5 h-5 text-neon-cyan" />,
      title: 'Modern Architecture',
      desc: 'Obsessed with type-safe, modular, and testable code using React 19, TypeScript, and modern state architectures.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-neon-purple" />,
      title: 'Full-Stack Fluency',
      desc: 'Bridging responsive frontend experiences with resilient Node.js / Express microservices and performant database models.',
    },
    {
      icon: <Compass className="w-5 h-5 text-neon-blue" />,
      title: 'Product Mindset',
      desc: 'Crafting user journeys from empathy first—prioritizing sub-second load times, WCAG AA accessibility, and joyful interactions.',
    },
  ];

  return (
    <Section id="about" title="About Siab" className="bg-slate-100/70 dark:bg-[#090d19] relative overflow-hidden transition-colors duration-500">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative group">
              {/* Outer decorative spinning gradient border */}
              <div className="w-60 h-60 md:w-68 md:h-68 rounded-3xl bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-cyan p-[3px] shadow-[0_0_35px_rgba(0,191,255,0.25)] group-hover:shadow-[0_0_50px_rgba(138,43,226,0.4)] transition-all duration-500">
                <div className="w-full h-full bg-white dark:bg-[#0d1424] rounded-3xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                    alt="Siab Ahmad Khan"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#07090e] via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Status Tag badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-white dark:bg-[#0d1527] border border-slate-300 dark:border-neon-cyan/40 shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-slate-800 dark:text-white font-mono">Status: Available</span>
              </div>
            </div>

            {/* Profile micro details */}
            <div className="mt-8 space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Siab Ahmad Khan</h3>
              <p className="text-sm font-semibold text-neon-blue dark:text-neon-cyan font-mono">
                Full Stack Developer & Systems Designer
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-gray-400 pt-2">
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-neon-blue" /> Islamabad, PK (Remote)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> 3+ Years Exp
                </span>
              </div>
            </div>

            {/* Quick Fast Facts Table */}
            <div className="w-full mt-6 bg-white/90 dark:bg-[#0e1628]/80 border border-slate-200 dark:border-gray-800 rounded-2xl p-4 text-left font-mono text-xs space-y-2.5 shadow-sm">
              <div className="flex justify-between border-b border-slate-200 dark:border-gray-800/80 pb-2">
                <span className="text-slate-500 dark:text-gray-400">Primary Language:</span>
                <span className="text-slate-800 dark:text-white font-semibold">TypeScript / JS</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-gray-800/80 pb-2">
                <span className="text-slate-500 dark:text-gray-400">Core UI Stack:</span>
                <span className="text-neon-blue dark:text-neon-cyan font-semibold">React 19, Tailwind</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-gray-800/80 pb-2">
                <span className="text-slate-500 dark:text-gray-400">Backend Core:</span>
                <span className="text-neon-purple font-semibold">Node.js, Express</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-gray-400">Work Preferences:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Remote & Async OK</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Story & Philosophy Tabs */}
          <div className="lg:col-span-7">
            {/* Tab navigation pills */}
            <div className="flex items-center space-x-2 border-b border-slate-200 dark:border-gray-800 pb-4 mb-6">
              <button
                onClick={() => setActiveTab('story')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === 'story'
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-md'
                    : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-gray-800/50'
                }`}
              >
                <Laptop className="w-4 h-4" />
                <span>My Journey</span>
              </button>

              <button
                onClick={() => setActiveTab('philosophy')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === 'philosophy'
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-md'
                    : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-gray-800/50'
                }`}
              >
                <Heart className="w-4 h-4" />
                <span>Engineering Philosophy</span>
              </button>

              <button
                onClick={() => setActiveTab('setup')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === 'setup'
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-md'
                    : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-gray-800/50'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>Developer Setup</span>
              </button>
            </div>

            {/* Tab 1: Story */}
            {activeTab === 'story' && (
              <div className="space-y-4 text-slate-700 dark:text-gray-300 leading-relaxed text-sm md:text-base animate-fade-in-up">
                <p>
                  I'm a dedicated Full Stack Developer with a relentless passion for building web products that don't just work well under high load—they feel exceptionally smooth to touch, look sharp on retina displays, and remain rock-solid in production.
                </p>
                <p>
                  My journey began with deep curiosity about web internals: how browsers parse layout trees, how the event loop manages asynchronous tasks, and how modular components make engineering teams move 10x faster. Over the past 3+ years, I've designed and delivered robust enterprise dashboards, responsive client portals, e-commerce stores, and reusable component libraries.
                </p>
                <p>
                  I thrive at the intersection of aesthetic design and architectural rigor: turning complex business requirements into elegant, high-converting digital realities.
                </p>

                {/* Highlight Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                  {HIGHLIGHTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-gray-800/80 hover:border-neon-blue/40 transition-all duration-300 shadow-sm"
                    >
                      <div className="mb-2 p-2 rounded-lg bg-slate-100 dark:bg-[#141e33] inline-block">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs mb-1">{item.title}</h4>
                      <p className="text-slate-500 dark:text-gray-400 text-[11px] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Philosophy */}
            {activeTab === 'philosophy' && (
              <div className="space-y-4 text-slate-700 dark:text-gray-300 leading-relaxed text-sm md:text-base animate-fade-in-up">
                <div className="p-4 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-gray-800 space-y-2 shadow-sm">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 1. Performance is a Feature, Not an Afterthought
                  </h4>
                  <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
                    A gorgeous interface is useless if it takes 5 seconds to load on 3G. I engineer with bundle-budget constraints, code splitting, memoized selectors, and sub-second Core Web Vitals targets.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-gray-800 space-y-2 shadow-sm">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-blue dark:text-neon-cyan" /> 2. Predictable State & Strict Types
                  </h4>
                  <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
                    I treat TypeScript as a design blueprint. Robust type contracts prevent whole classes of runtime bugs, streamline team onboarding, and empower brave refactors.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-gray-800 space-y-2 shadow-sm">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-purple" /> 3. Accessible & Inclusive by Default
                  </h4>
                  <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
                    Software should serve everyone. Semantic HTML, visible focus boundaries, and keyboard navigation are baked in from day zero.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Setup */}
            {activeTab === 'setup' && (
              <div className="space-y-4 font-mono text-xs text-slate-700 dark:text-gray-300 animate-fade-in-up">
                <div className="p-4 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-gray-800 space-y-3 shadow-sm">
                  <div className="text-neon-blue dark:text-neon-cyan font-bold text-sm">ENVIRONMENT & GEAR:</div>
                  <ul className="space-y-2 text-slate-600 dark:text-gray-400">
                    <li><span className="text-slate-900 dark:text-white font-semibold">Editor:</span> VS Code + Neovim motions, Tokyo Night theme</li>
                    <li><span className="text-slate-900 dark:text-white font-semibold">Terminal:</span> Zsh + Oh-My-Zsh with Starship prompt & Tmux</li>
                    <li><span className="text-slate-900 dark:text-white font-semibold">Design Tool:</span> Figma (Auto-layout, Components, Variables)</li>
                    <li><span className="text-slate-900 dark:text-white font-semibold">API Testing:</span> Postman & Thunder Client</li>
                    <li><span className="text-slate-900 dark:text-white font-semibold">Version Control:</span> Git CLI with conventional commits</li>
                    <li><span className="text-slate-900 dark:text-white font-semibold">Database Tools:</span> MongoDB Compass, DBeaver, Prisma Studio</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

