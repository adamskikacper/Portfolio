import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: {
            light: "#ffffff",
            dark: "#1A1A1A",
          },
          secondary: {
            light: "#f7fafc",
            dark: "#2d3748",
          },
        },
        text: {
          primary: {
            light: "#2d3748",
            dark: "#f7fafc",
          },
          secondary: {
            light: "#4a5568",
            dark: "#a0aec0",
          },
        },
        accent: {
          primary: {
            light: "#4299e1",
            dark: "#63b3ed",
          },
          secondary: {
            light: "#ed64a6",
            dark: "#f687b3",
          },
        },
        border: {
          light: "#e2e8f0",
          dark: "#2A2A2A",
        },
        button: {
          primary: {
            bg: {
              light: "#4299e1",
              dark: "#2b6cb0",
            },
            text: {
              light: "#ffffff",
              dark: "#f7fafc",
            },
          },
          secondary: {
            bg: {
              light: "#edf2f7",
              dark: "#4a5568",
            },
            text: {
              light: "#2d3748",
              dark: "#f7fafc",
            },
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "inner-lg": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
