"use client";
import { useEffect, useState } from "react";
import { LuSun, LuMoon } from 'react-icons/lu';

export function ThemeToggle({ ...props }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(document.documentElement.classList.contains("dark"));
  };

  return (
    <div {...props}>
      <button
        onClick={toggleTheme}
        className="px-2 py-1 rounded-full transition-colors bg-neutral-200 dark:bg-neutral-800 hover:cursor-pointer hover:bg-neutral-300"
        aria-label="Toggle dark mode"
      >
        {isDark ? <LuMoon /> : <LuSun />}
      </button>
    </div>
  );
}