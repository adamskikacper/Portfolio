"use client";

import { motion } from "framer-motion";
import useStaggerAnimation from "../hooks/useStaggerAnimation";
import { ProjectTypes } from "../types/projectTypes";
import { ProjectItem } from "./ProjectItem";

interface ProjectProps {
  projects: ProjectTypes[];
}

const Projects = ({ projects }: ProjectProps) => {
  const { itemVariants, containerVariants } = useStaggerAnimation();
  return (
    <section>
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
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative"
      >
        <ul className="timeline timeline-vertical timeline-snap-icon z-10 mb-10 flex flex-col gap-5 max-lg:timeline-compact lg:gap-0">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              totalProjects={projects.length}
            />
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Projects;
