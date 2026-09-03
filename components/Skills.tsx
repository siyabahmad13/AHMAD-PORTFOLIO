
import React, { useState, useMemo } from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';
import { Skill, SkillCategory } from '../types';
import { Search, Layout, Server, Cpu, Check, Sparkles, Filter } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-neon-cyan" />,
  Server: <Server className="w-5 h-5 text-neon-purple" />,
  Cpu: <Cpu className="w-5 h-5 text-neon-blue" />,
};

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-4 group">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-800 dark:text-gray-200 group-hover:text-neon-blue dark:group-hover:text-neon-cyan transition-colors">
            {skill.name}
          </span>
          {skill.experienceYears && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#162238] text-slate-600 dark:text-gray-400 border border-slate-200 dark:border-gray-700/50">
              {skill.experienceYears}
            </span>
          )}
        </div>
        <span className="text-xs font-mono font-bold text-neon-blue dark:text-neon-cyan">{skill.level}%</span>
      </div>

      <div className="w-full bg-slate-200 dark:bg-[#131b2e] rounded-full h-2.5 relative overflow-hidden border border-slate-300 dark:border-gray-800">
        <div
          className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(0,191,255,0.4)]"
          style={{ width: `${skill.level}%` }}
        />
      </div>

      {skill.note && (
        <p className="text-[11px] text-slate-500 dark:text-gray-400 mt-1 font-mono transition-opacity duration-200">
          ↳ {skill.note}
        </p>
      )}
    </div>
  );
};

const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILLS_DATA.map(c => c.title)];

  const filteredCategories = useMemo(() => {
    return SKILLS_DATA.map(category => {
      if (selectedCategory !== 'All' && category.title !== selectedCategory) {
        return null;
      }
      const filteredSkills = category.skills.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.note && s.note.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      if (filteredSkills.length === 0) return null;
      return {
        ...category,
        skills: filteredSkills,
      };
    }).filter(Boolean) as SkillCategory[];
  }, [searchQuery, selectedCategory]);

  return (
    <Section id="skills" title="Technical Arsenal" className="bg-white dark:bg-[#070b14] relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Controls: Search and Category Pills */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 dark:text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. React, Docker)..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-[#0e1628] border border-slate-300 dark:border-gray-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-neon-blue dark:focus:border-neon-cyan transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-md'
                    : 'bg-slate-100 dark:bg-[#0f172a] text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-gray-800 border border-slate-200 dark:border-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category: SkillCategory, index: number) => (
              <div
                key={index}
                className="bg-slate-50/90 dark:bg-[#0b1220]/90 border border-slate-200 dark:border-gray-800 hover:border-slate-300 dark:hover:border-gray-700 p-6 rounded-2xl shadow-sm dark:shadow-xl transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#141d33] border border-slate-200 dark:border-gray-800 shadow-sm">
                      {categoryIcons[category.iconName] || <Cpu className="w-5 h-5 text-neon-blue dark:text-neon-cyan" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-gray-400">
                        {category.skills.length} core competencies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-3">
                    {category.skills.map((skill: Skill, skillIndex: number) => (
                      <SkillBar key={skillIndex} skill={skill} />
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-gray-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-gray-500 font-mono">
                  <span>Standard: Production-Grade</span>
                  <span className="flex items-center gap-1 text-neon-blue dark:text-neon-cyan">
                    <Sparkles className="w-3 h-3" /> Active daily
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-16 text-slate-400 dark:text-gray-500 font-mono text-sm">
              No matching skills found for "{searchQuery}". Try searching "React" or "TypeScript".
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Skills;

