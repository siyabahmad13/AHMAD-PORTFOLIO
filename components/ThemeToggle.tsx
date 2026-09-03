
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  const { theme, toggleTheme } = context;
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white bg-slate-200/80 hover:bg-slate-300/80 dark:bg-[#0e1628] dark:hover:bg-[#141f38] border border-slate-300 dark:border-gray-800 transition-all duration-300 shadow-sm group flex items-center justify-center"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;

