"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if we're on the client-side
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      // If there's no stored theme, default to dark
      // If there is a stored theme, use it
      setIsDark(storedTheme === null ? true : storedTheme === "dark");
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
