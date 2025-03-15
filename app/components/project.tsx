"use client";

import { motion } from "framer-motion";
import { ProjectTypes } from "../types/projectTypes";
import { ProjectItem } from "./project-item";
import useStaggerAnimation from "../hooks/useStaggerAnimation";

interface ProjectProps {
  projects: ProjectTypes[];
}

const Projects = ({ projects }: ProjectProps) => {
  const { itemVariants } = useStaggerAnimation();
  return (
    <>
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-shine mb-10 text-5xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl xl:text-7xl dark:text-gray-300"
      >
        Projects
      </motion.h2>
      <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            index={index}
            totalProjects={projects.length}
          />
        ))}
      </ul>
    </>
  );
};

export default Projects;
