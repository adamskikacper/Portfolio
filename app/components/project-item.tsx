"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Eye, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useStaggerAnimation from "../hooks/useStaggerAnimation";
import { ProjectTypes } from "../types/projectTypes";
import HoverImage from "./hover-image";
import InteractiveBadge from "./interactive-badge";
import { StatusBadge, StatusType } from "./status-badge";
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
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <li
      key={project.id}
      ref={ref}
    >
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
          className="hidden bg-background-secondary-dark/20 p-1 lg:block dark:bg-background-secondary-light/20"
        />
      )}
      <div className="timeline-middle hidden lg:block">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#EAB30E"
          className="h-8 w-8 xl:h-10 xl:w-10"
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
        className={`!m-0 w-full lg:w-auto ${index % 2 === 0 ? "timeline-start mr-2 lg:pr-5" : "timeline-end ml-2 lg:pl-5"} `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-3xl border border-gray-800/30 bg-background-secondary-dark/80 p-4 backdrop-blur-sm lg:p-8 dark:border-gray-700/30"
        >
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute bottom-0 right-0 z-0 h-[500px] w-[500px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/images/circles.svg"
                  fill
                  sizes="500px"
                  alt="Decorative circles"
                  style={{ objectFit: "contain" }}
                  className="translate-x-[50%] translate-y-[50%] rotate-180"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative z-10">
            {project.imageUrl && (
              <motion.div
                variants={itemVariants}
                className="w-full"
              >
                <div
                  className="mb-10 w-full overflow-hidden rounded-xl shadow-lg"
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
                    className="h-full w-full rounded-xl"
                    aspectRatio="aspect-video"
                  />
                </div>
              </motion.div>
            )}

            <motion.div
              variants={itemVariants}
              className="absolute right-4 top-4 max-w-fit"
            >
              {project.status && <StatusBadge status={project.status as StatusType} />}
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="text-shine mb-5 text-3xl font-bold text-gray-800 dark:text-gray-100"
            >
              {project.title}
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="mb-5 text-justify text-gray-600 dark:text-gray-300"
            >
              {project.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-5 flex flex-wrap gap-3"
            >
              {project.technologies.map((tech, techIndex) => (
                <InteractiveBadge
                  key={techIndex}
                  text={tech}
                  index={techIndex}
                />
              ))}
            </motion.div>

            {project.link && (
              <motion.div
                variants={itemVariants}
                className="mt-6 flex gap-5"
              >
                <Button
                  variant="outline"
                  className="w-full transition-transform hover:scale-105 sm:w-[150px]"
                  size={windowWidth < 640 ? "sm" : "lg"}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Project
                </Button>

                <Button
                  variant="outline"
                  className="w-full transition-transform hover:scale-105 sm:w-[150px]"
                  size={windowWidth < 640 ? "sm" : "lg"}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Github
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
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
          className="hidden bg-background-secondary-dark/20 p-1 lg:block dark:bg-background-secondary-light/20"
        />
      )}
    </li>
  );
};
