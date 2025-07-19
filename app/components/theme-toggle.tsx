"use client";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(document.documentElement.classList.contains("dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 px-2 py-1 rounded transition-colors bg-neutral-200 dark:bg-neutral-800"
      aria-label="Toggle dark mode"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}