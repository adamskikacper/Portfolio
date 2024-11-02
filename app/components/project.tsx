"use client";

import { motion } from "framer-motion";
import { ProjectTypes } from "../types/projectTypes";

import HoverImage from "./hover-image";
import { Eye, Github } from "lucide-react";
import useStaggerAnimation from "../hooks/useStaggerAnimation";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  projects: ProjectTypes[];
}

const Project = ({ projects }: ProjectProps) => {
  const { containerVariants, itemVariants } = useStaggerAnimation();

  return (
    <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
      {projects.map((project, index) => (
        <li variants={itemVariants} key={project.id}>
          {index !== 0 && <hr />}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <motion.div
            variants={containerVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.5 }}
            className={`mb-20 ${index % 2 === 0 ? "timeline-start mr-10" : "timeline-end ml-10"} mb-10 ${index % 2 === 0 ? "md:text-end" : ""}`}
          >
            {project.imageUrl && (
              <motion.div variants={itemVariants} className="mb-4 overflow-hidden rounded-lg">
                <HoverImage
                  imgSrc={project.imageUrl}
                  videoSrc={project.videoUrl || ""}
                  alt={`${project.title} preview`}
                  width={900}
                  height={900}
                  buttonText="View Project"
                  buttonIcon={Eye}
                  type="video"
                />
              </motion.div>
            )}

            <motion.div
              variants={itemVariants}
              className="mb-5 text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl dark:text-gray-300"
            >
              {project.title}
            </motion.div>

            <motion.div variants={itemVariants} className="text-md">
              {project.description}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-2 flex flex-wrap gap-2 text-xs">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="badge badge-outline">
                  {tech}
                </span>
              ))}
            </motion.div>
            {project.link && (
              <div className="mt-10 flex gap-5">
                <motion.div variants={itemVariants}>
                  <Button
                    variant="outline"
                    className="w-full transition-transform hover:scale-105 sm:w-[150px]"
                    size="lg"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button
                    variant="outline"
                    className="w-full transition-transform hover:scale-105 sm:w-[150px]"
                    size="lg"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Github
                  </Button>
                </motion.div>
              </div>
            )}
          </motion.div>
          {index !== projects.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  );
};

export default Project;
