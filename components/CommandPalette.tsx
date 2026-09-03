import React, { useState, useEffect } from 'react';
import { Search, Compass, FileText, Code, Mail, Moon, Sun, X, ArrowRight, ExternalLink } from 'lucide-react';
import { NAV_LINKS, PROJECTS_DATA } from '../constants';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  theme,
  toggleTheme,
}) => {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredLinks = NAV_LINKS.filter(link =>
    link.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = PROJECTS_DATA.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const handleNavigate = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('msiyab10492@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/70 backdrop-blur-sm animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#0b101e] border border-slate-200 dark:border-gray-800 rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden text-slate-900 dark:text-white"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-[#0d1424]">
          <Search className="w-5 h-5 text-neon-blue dark:text-neon-cyan mr-3" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type a command or search portfolio sections..."
            className="flex-1 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 text-sm focus:outline-none"
            autoFocus
          />
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-gray-800 text-slate-600 dark:text-gray-400 border border-slate-300 dark:border-gray-700 mr-2">
            ESC
          </span>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-3 space-y-4">
          {/* Quick Actions */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 px-3">
              Quick Actions
            </span>
            <div className="mt-1 space-y-1">
              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800/70 transition-colors text-left"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-neon-blue dark:text-neon-cyan" />
                  <span>View Printable Curriculum Vitae</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 dark:text-gray-500" />
              </button>

              <button
                onClick={() => {
                  toggleTheme();
                  onClose();
                }}
                className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800/70 transition-colors text-left"
              >
                <div className="flex items-center gap-2.5">
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-amber-500" />
                  ) : (
                    <Moon className="w-4 h-4 text-neon-purple" />
                  )}
                  <span>Toggle Theme (Currently {theme})</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-gray-500 font-mono">Switch</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800/70 transition-colors text-left"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-500" />
                  <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Direct Email (msiyab10492@gmail.com)'}</span>
                </div>
                <span className="text-xs text-neon-blue dark:text-neon-cyan font-mono">{copiedEmail ? 'Done' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          {filteredLinks.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 px-3">
                Jump to Section
              </span>
              <div className="mt-1 space-y-1">
                {filteredLinks.map(link => (
                  <button
                    key={link.name}
                    onClick={() => handleNavigate(link.href)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800/70 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <Compass className="w-4 h-4 text-neon-blue" />
                      <span>{link.name}</span>
                    </div>
                    <span className="text-xs text-slate-400 dark:text-gray-600 font-mono">{link.href}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 px-3">
                Projects
              </span>
              <div className="mt-1 space-y-1">
                {filteredProjects.map(proj => (
                  <button
                    key={proj.id}
                    onClick={() => handleNavigate('#projects')}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800/70 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <Code className="w-4 h-4 text-neon-purple" />
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">{proj.title}</div>
                        <div className="text-[11px] text-slate-500 dark:text-gray-500">{proj.tagline}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-gray-500" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-[#080d1a] border-t border-slate-200 dark:border-gray-800 text-[11px] text-slate-500 dark:text-gray-500 flex justify-between items-center">
          <span>Navigation Shortcut: Press ⌘K or Ctrl+K anytime</span>
          <span>Siab Ahmad Khan</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
