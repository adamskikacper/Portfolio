"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Github } from "lucide-react";
import { ProjectTypes } from "../types/projectTypes";
import HoverImage from "./hover-image";
import useStaggerAnimation from "../hooks/useStaggerAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectItemProps {
  project: ProjectTypes;
  index: number;
  totalProjects: number;
}

export const ProjectItem = ({ project, index, totalProjects }: ProjectItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "100px 0px 0px 0px",
  });
  const { containerVariants, itemVariants } = useStaggerAnimation();

  return (
    <li key={project.id} ref={ref}>
      {index !== 0 && (
        <motion.hr
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "top" }}
          className="bg-background-secondary-dark/20 p-1 dark:bg-background-secondary-light/20"
        />
      )}
      <div className="timeline-middle">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#EAB30E"
          className="h-10 w-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isInView ? 1 : 0,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            ease: "backOut",
          }}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </motion.svg>
      </div>

      <motion.div
        variants={containerVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, amount: 0.5 }}
        className={`mb-20 ${index % 2 === 0 ? "timeline-start mr-10" : "timeline-end ml-10"} mb-10 ${index % 2 === 0 ? "flex flex-col items-end md:text-end" : ""}`}
      >
        {project.imageUrl && (
          <motion.div
            variants={itemVariants}
            className="mb-4 overflow-hidden rounded-3xl shadow-xl"
          >
            <HoverImage
              imgSrc={project.imageUrl}
              videoSrc={project.videoUrl || ""}
              alt={`${project.title} preview`}
              width={900}
              height={900}
              buttonText="View Project"
              buttonIcon={Eye}
              type="video"
              className="shadow-lg"
            />
          </motion.div>
        )}

        <motion.div
          variants={itemVariants}
          className="mb-5 text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl dark:text-gray-300"
        >
          {project.title}
        </motion.div>

        <motion.div variants={itemVariants} className="text-md text-justify">
          {project.description}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-2 flex flex-wrap gap-2 text-xs">
          {project.technologies.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              className="bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-500 px-[10px] py-[5px] text-text-primary-dark dark:from-zinc-400 dark:via-zinc-200 dark:to-zinc-400"
            >
              {tech}
            </Badge>
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
      {index !== totalProjects - 1 && (
        <motion.hr
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "top" }}
          className="bg-background-secondary-dark/20 p-1 dark:bg-background-secondary-light/20"
        />
      )}
    </li>
  );
};
