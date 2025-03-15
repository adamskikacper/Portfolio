"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Eye, Github } from "lucide-react";
import { ProjectTypes } from "../types/projectTypes";
import HoverImage from "./hover-image";
import useStaggerAnimation from "../hooks/useStaggerAnimation";
import { Button } from "@/components/ui/button";
import InteractiveBadge from "./interactive-badge";

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
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            delay: 0.5,
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
          <motion.div variants={itemVariants} className="w-full">
            <div
              className="mb-10 w-full overflow-hidden rounded-3xl shadow-xl"
              style={{ height: "auto", aspectRatio: "16/9" }}
            >
              <HoverImage
                imgSrc={project.imageUrl}
                videoSrc={project.videoUrl || ""}
                alt={`${project.title} preview`}
                width={1920}
                height={1080}
                buttonText="View Project"
                buttonIcon={Eye}
                type="video"
                className="h-full w-full rounded-3xl"
                aspectRatio="aspect-video"
              />
            </div>
          </motion.div>
        )}

        <motion.div
          variants={itemVariants}
          className="text-shine mb-5 text-3xl font-extrabold uppercase text-gray-600 sm:text-3xl md:text-4xl lg:text-5xl dark:text-gray-300"
        >
          {project.title}
        </motion.div>

        <motion.div variants={itemVariants} className="text-md mb-5 text-justify">
          {project.description}
        </motion.div>

        <motion.div variants={itemVariants} className="mb-5 flex flex-wrap gap-3 text-xs">
          {project.technologies.map((tech, techIndex) => (
            <InteractiveBadge key={techIndex} text={tech} index={techIndex} />
          ))}
        </motion.div>
        {project.link && (
          <div className="flex gap-5">
            <motion.div variants={itemVariants}>
              <Button
                variant="outline"
                className="w-full transition-transform hover:scale-105 sm:w-[150px]"
                size={windowWidth < 640 ? "sm" : "lg"}
              >
                <Eye className="mr-2 h-4 w-4" />
                View Project
              </Button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                variant="outline"
                className="w-full transition-transform hover:scale-105 sm:w-[150px]"
                size={windowWidth < 640 ? "sm" : "lg"}
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
