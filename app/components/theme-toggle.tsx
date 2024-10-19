"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

// Function to determine the initial theme
const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    return storedTheme === "dark";
  }
  return document.documentElement.classList.contains("dark");
};

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
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
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-white" />
      ) : (
        <Moon className="h-6 w-6 text-gray-700" />
      )}
    </button>
  );
}
