"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import StackIcon from "tech-stack-icons";
import useStaggerAnimation from "../hooks/useStaggerAnimation";

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { itemVariants } = useStaggerAnimation();
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.3,
  });

  const techDisplayNames: { [key: string]: string } = {
    reactjs: "React",
    nextjs2: "Next.js",
    typescript: "TypeScript",
    js: "JavaScript",
    html5: "HTML5",
    css3: "CSS3",
    tailwindcss: "Tailwind CSS",
    sass: "Sass",
    angular17: "Angular",
    gsap: "GSAP",
    figma: "Figma",
    git: "Git",
    storybook: "Storybook",
  };

  const frontendTechnologies = [
    "reactjs",
    "nextjs2",
    "typescript",
    "js",
    "html5",
    "css3",
    "tailwindcss",
    "sass",
    "angular17",
    "gsap",
    "figma",
    "git",
    "storybook",
  ];

  const extendedTechnologies = [
    ...frontendTechnologies,
    ...frontendTechnologies,
    ...frontendTechnologies,
  ];

  const handleMouseEnter = (tech: string, event: React.MouseEvent) => {
    setHoveredTech(tech);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredTech) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full py-16 lg:py-24"
    >
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-shine mb-10 text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl xl:text-7xl dark:text-gray-300"
      >
        Technologies
      </motion.h2>

      <div className="relative h-[100px] overflow-hidden py-2 sm:h-[130px] sm:py-3 lg:h-[160px] lg:py-4">
        <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background-primary-light to-transparent sm:w-16 lg:w-20 dark:from-background-primary-dark"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background-primary-light to-transparent sm:w-16 lg:w-20 dark:from-background-primary-dark"></div>
        <div
          className="animate-scroll absolute top-2 flex items-center gap-6 whitespace-nowrap sm:top-3 sm:gap-8 lg:top-4 lg:gap-12"
          style={{
            animationPlayState: isInView ? "running" : "paused",
          }}
        >
          {extendedTechnologies.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="relative flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-2xl border border-gray-700/10 bg-background-secondary-light p-4 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg sm:h-[100px] sm:w-[100px] sm:rounded-3xl sm:p-5 lg:h-[120px] lg:w-[120px] lg:p-6 dark:border-gray-700/30 dark:bg-background-secondary-dark/80"
              onMouseEnter={(e) => handleMouseEnter(tech, e)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              {tech === "gsap" ? (
                <div
                  className={`h-full w-full ${hoveredTech !== tech ? "grayscale" : ""} invert dark:invert-0`}
                >
                  <StackIcon
                    grayscale={false}
                    name={tech}
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : (
                <StackIcon
                  grayscale={hoveredTech !== tech}
                  name={tech}
                  className="h-full w-full object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {hoveredTech && (
        <div
          className="pointer-events-none fixed z-50 transform rounded-lg border border-gray-700/10 bg-background-secondary-light px-3 py-2 text-sm font-medium text-text-primary-light shadow-lg backdrop-blur-sm transition-opacity duration-200 dark:border-gray-700/30 dark:bg-background-secondary-dark/90 dark:text-text-primary-dark"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 40,
          }}
        >
          {techDisplayNames[hoveredTech] || hoveredTech}
          <div className="absolute left-2 top-full h-0 w-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-background-secondary-light dark:border-t-background-secondary-dark/90"></div>
        </div>
      )}
    </div>
  );
};

export default Skills;
