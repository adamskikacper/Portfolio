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

      {/* Mobile Layout - Single Column */}
      <div className="block lg:hidden space-y-8">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            index={index}
            totalProjects={projects.length}
            gridColumn="mobile"
            isTriggered={triggeredProjects.includes(index)}
          />
        ))}
      </div>

      {/* Desktop Layout - 3 Column Grid */}
      <div className="hidden lg:grid lg:gap-8 xl:gap-12 relative" style={{ gridTemplateColumns: '1fr 50px 1fr', height: `${projects.length * 100}vh` }}>
        {/* Left Column - Even indexed projects */}
        <div className="relative">
          {projects.map((project, index) => 
            index % 2 === 0 ? (
              <div 
                key={project.id}
                className="absolute w-full"
                style={{ 
                  top: `${index * 100 + 50}vh`,
                  transform: "translateY(-50%)"
                }}
              >
                <ProjectItem
                  project={project}
                  index={index}
                  totalProjects={projects.length}
                  gridColumn="left"
                  isTriggered={triggeredProjects.includes(index)}
                />
              </div>
            ) : null
          )}
        </div>

        {/* Center Column - Timeline */}
        <div className="flex justify-center">
          <ScrollTimeline
            projectCount={projects.length}
            sectionId="projects"
            onProjectTrigger={handleProjectTrigger}
          />
        </div>

        {/* Right Column - Odd indexed projects */}
        <div className="relative">
          {projects.map((project, index) => 
            index % 2 === 1 ? (
              <div 
                key={project.id}
                className="absolute w-full"
                style={{ 
                  top: `${index * 100 + 50}vh`,
                  transform: "translateY(-50%)"
                }}
              >
                <ProjectItem
                  project={project}
                  index={index}
                  totalProjects={projects.length}
                  gridColumn="right"
                  isTriggered={triggeredProjects.includes(index)}
                />
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
