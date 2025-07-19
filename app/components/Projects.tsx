"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import useStaggerAnimation from "../hooks/useStaggerAnimation";
import { ProjectTypes } from "../types/projectTypes";
import { ProjectItem } from "./ProjectItem";
import ScrollTimeline from "./ScrollTimeline";

interface ProjectProps {
  projects: ProjectTypes[];
}

const Projects = ({ projects }: ProjectProps) => {
  const { itemVariants } = useStaggerAnimation();
  const [triggeredProjects, setTriggeredProjects] = useState<number[]>([]);

  const handleProjectTrigger = (index: number) => {
    setTriggeredProjects((prev) => {
      if (!prev.includes(index)) {
        return [...prev, index];
      }
      return prev;
    });
  };

  return (
    <section id="projects">
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-shine mb-10 text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl xl:text-7xl dark:text-gray-300"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8 sm:mb-12 md:mb-16 lg:mb-20"
      >
        <motion.p
          variants={itemVariants}
          className="max-w-4xl leading-relaxed text-gray-600 dark:text-gray-300"
        >
          To fully illustrate my journey and continuous development as a developer, I've
          deliberately chosen not to remove any of my projects as they offer a transparent look at
          my ongoing growth and learning progression. Please view each project as a milestone,
          showcasing the evolution of my skills over time, rather than a reflection of my current
          capabilities.
        </motion.p>
      </motion.div>

      <div className="relative">
        {/* Timeline (background) */}
        <div className="absolute left-1/2 top-0 z-0 hidden h-full -translate-x-1/2 lg:block">
          <ScrollTimeline
            projectCount={projects.length}
            sectionId="projects"
            onProjectTrigger={handleProjectTrigger}
          />
        </div>

        {/* Projects Container */}
        <div className="relative z-10 space-y-8 lg:space-y-16">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              totalProjects={projects.length}
              gridColumn={index % 2 === 0 ? "left" : "right"}
              isTriggered={triggeredProjects.includes(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
