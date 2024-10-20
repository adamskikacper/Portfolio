"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [hoverPosition, setHoverPosition] = useState({ x: -1, y: -1 });
  const navRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    setHidden(false);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setHoverPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoverPosition({ x: -1, y: -1 });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed left-0 right-0 top-4 z-50 mx-auto container">
      <motion.nav
        ref={navRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial="hidden"
        animate={hidden ? "hidden" : "visible"}
        variants={{
          hidden: { y: "-130%" },
          visible: { y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-background-primary-light dark:bg-background-primary-dark border-border-light dark:border-border-dark rounded-[15px] border bg-opacity-70 dark:bg-opacity-70 shadow-sm backdrop-blur-[5px] relative overflow-hidden"
      >
        <div className="px-1 py-1">
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center">
              <a href="#home" className="flex items-center">
                <p className="text-text-primary-light dark:text-text-primary-dark text-sm font-bold">
                  Kacper Adamski
                </p>
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-text-primary-light dark:text-text-primary-dark rounded-[3px] px-4 py-2 text-sm font-medium relative overflow-hidden"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <span className="relative z-10">{item.name}</span>
                  </motion.a>
                ))}
                <ThemeToggle />
              </div>
            </div>

            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-text-primary-light dark:text-text-primary-dark inline-flex items-center justify-center rounded-[3px] p-1.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}{" "}
              </motion.button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-text-primary-light dark:text-text-primary-dark block rounded-[3px] px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:bg-opacity-20 relative overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="relative z-10">{item.name}</span>
                </motion.a>
              ))}
              <ThemeToggle />
            </div>
          </div>
        )}

        {hoverPosition.x > 0 && hoverPosition.y > 0 && (
          <span
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle 100px at ${hoverPosition.x}px ${hoverPosition.y}px, rgba(255,255,255,0.3), transparent 100%)`,
              filter: "blur(30px)",
            }}
          />
        )}
      </motion.nav>
    </div>
  );
}
