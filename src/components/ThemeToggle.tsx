"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={`text-[13px] font-medium tracking-wider uppercase transition-colors hover:text-[var(--accent)] cursor-pointer ${className}`}
    >
      {theme === "light" ? "DARK" : "LIGHT"}
    </button>
  );
}
