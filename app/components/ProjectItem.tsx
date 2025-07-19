"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Eye, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useStaggerAnimation from "../hooks/useStaggerAnimation";
import { ProjectTypes } from "../types/projectTypes";
import HoverImage from "./HoverImage";
import ScrollingBadges from "./ScrollingBadges";
import { StatusBadge, StatusType } from "./StatusBadge";

interface ProjectItemProps {
  project: ProjectTypes;
  index: number;
  totalProjects: number;
  gridColumn?: "left" | "right" | "mobile";
  isTriggered?: boolean;
}

export const ProjectItem = ({
  project,
  gridColumn = "mobile",
  isTriggered = false,
}: ProjectItemProps) => {
  const ref = useRef(null);
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
    <div
      key={project.id}
      ref={ref}
      className="relative"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isTriggered ? "visible" : "hidden"}
        className={`w-full max-w-lg ${
          gridColumn === "left" ? "lg:mr-auto" : gridColumn === "right" ? "lg:ml-auto" : "mx-auto"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          variants={itemVariants}
          className="border-gray-700/ relative overflow-hidden rounded-3xl border bg-background-secondary-light p-4 backdrop-blur-sm lg:p-8 dark:border-gray-700/30 dark:bg-background-secondary-dark/80"
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
            {project.imageUrl ? (
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
                    onButtonClick={() => window.open(project.projectLink, "_blank")}
                    buttonIcon={Eye}
                    type={project.status === "ongoing" ? "image" : "video"}
                    className="h-full w-full rounded-xl"
                    aspectRatio="aspect-video"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                variants={itemVariants}
                className="w-full"
              >
                <div
                  className="mb-10 flex w-full items-center justify-center overflow-hidden rounded-xl shadow-lg"
                  style={{ height: "auto", aspectRatio: "16/9" }}
                >
                  <p className="text-center text-gray-600 dark:text-gray-300">No image available</p>
                </div>
              </motion.div>
            )}

            <motion.div
              variants={itemVariants}
              className="absolute right-4 top-4"
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
              className="mb-5"
            >
              <ScrollingBadges technologies={project.technologies} />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex gap-5"
            >
              <Button
                variant="outline"
                className="w-full transition-transform hover:scale-105 sm:w-[150px]"
                size={windowWidth < 640 ? "sm" : "lg"}
                onClick={() => project.projectLink && window.open(project.projectLink, "_blank")}
                disabled={!project.projectLink}
              >
                <Eye className="mr-2 h-4 w-4" />
                View Project
              </Button>

              <Button
                variant="outline"
                className="w-full transition-transform hover:scale-105 sm:w-[150px]"
                size={windowWidth < 640 ? "sm" : "lg"}
                onClick={() => project.githubLink && window.open(project.githubLink, "_blank")}
                disabled={!project.githubLink}
              >
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
