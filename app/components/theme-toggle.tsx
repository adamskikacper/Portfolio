"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if we're on the client-side
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      setIsDark(storedTheme === "dark" || (!storedTheme && prefersDark));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark]);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      onKeyDown={(e) => e.key === "Enter" && handleToggle()}
      aria-label="Toggle theme"
      className="rounded-full p-2 transition-colors duration-200"
      tabIndex={0}
    >
      {isDark ? <Sun className="h-6 w-6 text-white" /> : <Moon className="h-6 w-6 text-gray-700" />}
    </button>
  );
}
