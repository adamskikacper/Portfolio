"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./theme-toggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [hoverPosition, setHoverPosition] = useState({ x: -1, y: -1 });
  const [activeSection, setActiveSection] = useState("home");
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Only update active section if not during programmatic scroll
    if (!isProgrammaticScroll) {
      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    }
  });

  useEffect(() => {
    setHidden(false);

    // Prevent body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
    const sectionId = href.substring(1);
    const target = document.getElementById(sectionId);

    // Set active section immediately when clicked
    setActiveSection(sectionId);

    if (target) {
      // Disable scroll detection during programmatic scroll
      setIsProgrammaticScroll(true);

      target.scrollIntoView({ behavior: "smooth" });

      // Re-enable scroll detection after animation completes
      setTimeout(() => {
        setIsProgrammaticScroll(false);
      }, 1000); // Adjust timing based on your scroll animation duration
    }
    setIsOpen(false);
  };

  // Mobile menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="container fixed left-0 right-0 top-0 z-50">
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
          className="relative mx-auto mt-4 overflow-hidden rounded-[15px] border border-border-light bg-background-primary-light bg-opacity-70 shadow-sm backdrop-blur-[5px] dark:border-border-dark/50 dark:bg-background-primary-dark dark:bg-opacity-70"
        >
          <div className="px-1 py-1">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center">
                <a
                  href="#home"
                  className="flex items-center"
                >
                  <p className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark">
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
                      className="relative overflow-hidden rounded-[3px] px-4 py-2 text-sm font-medium text-text-primary-light dark:text-text-primary-dark"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <span className="pointer-events-none relative z-10">{item.name}</span>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 bg-yellow-500"
                        initial={{ opacity: 0, width: "0%" }}
                        animate={{
                          opacity: activeSection === item.href.substring(1) ? 1 : 0,
                          width: activeSection === item.href.substring(1) ? "30%" : "0%",
                        }}
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          maxWidth: "30%",
                        }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                      />
                    </motion.a>
                  ))}
                  <ThemeToggle />
                </div>
              </div>

              <div className="md:hidden">
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative z-10 inline-flex items-center justify-center rounded-[3px] p-1.5 text-text-primary-light dark:text-text-primary-dark"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-expanded={isOpen}
                  aria-label="Toggle navigation menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.button>
              </div>
            </div>
          </div>

          {hoverPosition.x > 0 && hoverPosition.y > 0 && (
            <span
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(circle 100px at ${hoverPosition.x}px ${hoverPosition.y}px, rgba(255,255,255,0.3), transparent 100%)`,
                filter: "blur(30px)",
              }}
            />
          )}
        </motion.nav>
      </div>

      {/* Mobile Menu - Positioned outside the navbar for proper stacking */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-background-primary-light/95 backdrop-blur-md md:hidden dark:bg-background-primary-dark/95"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {/* Close button positioned absolutely in the top-right corner */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-[10000] inline-flex items-center justify-center rounded-full bg-background-primary-light/80 p-2 text-text-primary-light shadow-md backdrop-blur-sm dark:bg-background-primary-dark/80 dark:text-text-primary-dark"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </motion.button>

            <div className="flex h-full w-full flex-col items-center justify-center space-y-10 px-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="w-full max-w-xs"
                >
                  <motion.a
                    href={item.href}
                    className="relative flex w-full justify-center overflow-hidden rounded-lg py-4 text-center text-2xl font-medium text-text-primary-light transition-all duration-300 ease-in-out dark:text-text-primary-dark"
                    onClick={(e) => handleNavClick(e, item.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="pointer-events-none relative z-10">{item.name}</span>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 bg-yellow-500"
                      initial={{ opacity: 0, width: "0%" }}
                      animate={{
                        opacity: activeSection === item.href.substring(1) ? 1 : 0,
                        width: activeSection === item.href.substring(1) ? "30%" : "0%",
                      }}
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth: "30%",
                      }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 -z-10 rounded-lg opacity-0 transition-opacity duration-300"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                      }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.a>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
