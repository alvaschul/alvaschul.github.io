"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // storage unavailable (private mode, blocked cookies): DOM state still applies
    }
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-border bg-transparent text-text-primary outline-none transition-all duration-300 ease-out hover:bg-surface hover:border-[rgba(15,23,42,0.22)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-95 dark:hover:border-[rgba(230,237,243,0.28)] motion-reduce:transition-none"
    >
      <span className="relative block h-5 w-5" aria-hidden="true">
        <svg
          className={`absolute inset-0 h-full w-full transition-all duration-300 ease-out motion-reduce:transition-none ${
            isDark ? "rotate-90 scale-50 opacity-0" : "rotate-0 opacity-100"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
        <svg
          className={`absolute inset-0 h-full w-full transition-all duration-300 ease-out motion-reduce:transition-none ${
            isDark ? "rotate-0 opacity-100" : "-rotate-90 scale-50 opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </span>
    </button>
  );
}
