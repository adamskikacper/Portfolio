"use client";

import { useState, useEffect } from "react";
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

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleResize = () => setIsOpen(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-4 z-50 mx-auto max-w-[1024px] px-4">
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-130%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="rounded-[15px] border border-white border-opacity-20 bg-black bg-opacity-10 shadow-sm backdrop-blur-lg backdrop-filter"
      >
        <div className="px-1 py-1">
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center">
              <a href="#home" className="flex items-center">
                <p className="text-md font-bold text-black dark:text-white">
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
                    className="rounded-[3px] px-4 text-sm font-medium text-white transition-all duration-300 ease-in-out"
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <ThemeToggle />
              </div>
            </div>

            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-[3px] p-1.5 text-white hover:bg-white hover:bg-opacity-20 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}{" "}
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
                  className="block rounded-[3px] px-3 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-20"
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
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </motion.nav>
    </nav>
  );
}
