
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { useScrollSpy } from '../hooks/useScrollSpy';
import ThemeToggle from './ThemeToggle';

import { Search, FileText, Menu, X, Sparkles, Terminal } from 'lucide-react';

interface HeaderProps {
  onOpenResume?: () => void;
  onOpenCommandPalette?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenResume, onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = NAV_LINKS.map(link => link.href);
  const activeId = useScrollSpy(sectionIds, {
    rootMargin: '0% 0% -70% 0%',
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#070b14]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-gray-800/80 shadow-sm dark:shadow-2xl py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer select-none"
          >
            
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-sm text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-neon-blue dark:group-hover:text-neon-cyan transition-colors">
                Siab Ahmad Khan
              </span>
              <span className="text-[10px] font-mono text-neon-blue dark:text-neon-cyan/80 tracking-widest uppercase mt-0.5">
                Full Stack Architect
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/90 dark:bg-[#0c1322]/80 border border-slate-200 dark:border-gray-800/80 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {NAV_LINKS.map(link => {
              const isActive = `#${activeId}` === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-md'
                      : 'text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-gray-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Unified Action Buttons (Strictly ONE ThemeToggle) */}
          <div className="flex items-center space-x-2">
            {/* Quick Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#0e1628] hover:bg-slate-200 dark:hover:bg-[#141f38] border border-slate-300 dark:border-gray-800 text-xs font-mono text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm group"
              title="Open Command Palette (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-neon-blue dark:text-neon-cyan group-hover:scale-110 transition-transform" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-200 dark:bg-gray-900 border border-slate-300 dark:border-gray-700 rounded text-slate-600 dark:text-gray-400 font-sans">
                ⌘K
              </kbd>
            </button>

            {/* Quick CV Viewer Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-opacity shadow-sm"
              title="Open Curriculum Vitae"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* SINGLE Theme Toggle Button */}
            <ThemeToggle />

            {/* Mobile Navigation Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-[#0e1628] border border-slate-300 dark:border-gray-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#070b14]/98 border-b border-slate-200 dark:border-gray-800 px-4 pt-3 pb-6 space-y-2 animate-fade-in-up backdrop-blur-xl shadow-lg">
          {NAV_LINKS.map(link => {
            const isActive = `#${activeId}` === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-md'
                    : 'text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-800/80 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;

