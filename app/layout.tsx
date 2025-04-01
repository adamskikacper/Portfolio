import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kacper Adamski | Front-End Developer",
  description:
    "Front-End Developer with expertise in React, Angular, TypeScript and modern web technologies. Passionate about creating responsive, accessible and performant web applications. Experienced in translating designs into pixel-perfect interfaces and optimizing user experiences. Skilled in component-driven development, state management, and modern front-end architectures.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${inter.className} `}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        function getThemePreference() {
          if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
          }
          // Default to dark mode instead of checking system preference
          return 'dark';
        }

        const theme = getThemePreference();
        document.documentElement.classList.toggle('dark', theme === 'dark');
      })();
     `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
