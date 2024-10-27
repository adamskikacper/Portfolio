"use client";

import Image from "next/image";
import { Project } from "@/app/types/projectTypes";
import { motion, useInView } from "framer-motion";
import useStaggerAnimation from "@/app/hooks/useStaggerAnimation";
import { useState, useRef } from "react";

interface ProjectSectionProps {
  project: Project;
  isReversed?: boolean;
}

const ProjectSection = ({ project, isReversed = false }: ProjectSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { containerVariants, itemVariants } = useStaggerAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={`relative flex w-full items-center gap-10 rounded-xl ${
        isReversed ? "flex-row-reverse" : ""
      }`}
    >
      <motion.div
        className={`${isReversed ? "ml-8" : "mr-8"} max-w-2xl`}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="relative">
          <h2 className="relative mb-4 inline-block bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text pb-2 text-3xl font-bold uppercase tracking-wider text-transparent dark:from-zinc-300 dark:to-zinc-500">
            {project.title}
          </h2>
          <p className="mb-2">{project.description}</p>
        </motion.div>

        <motion.p variants={itemVariants} className="text-muted-foreground mb-8">
          Looking for average? You&apos;re in the wrong place. But if you want web solutions that
          make jaws drop and turn heads, let&apos;s talk.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1.6 }}
        className="relative hidden h-full hover:cursor-pointer lg:block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`absolute ${isHovered ? "right-[-15px] top-[-15px]" : "right-0 top-0"} h-full w-full transition-all duration-200`}
        >
          <Image
            src="/assets/images/header-image.jpg"
            alt="Header Image"
            width={500}
            height={300}
            className="absolute h-full w-full rounded-lg bg-background-secondary-dark shadow-sm backdrop-blur-[5px] dark:border-border-light dark:bg-background-secondary-light"
          />
          <div className="absolute h-full w-full rounded-lg bg-background-secondary-dark bg-opacity-70 shadow-sm backdrop-blur-[5px] dark:border-border-light dark:bg-background-secondary-light dark:bg-opacity-20"></div>
        </div>

        <div className="relative h-full w-full">
          <Image
            src="/assets/images/header-image.jpg"
            alt="Header Image"
            width={500}
            height={300}
            className="relative h-full w-full rounded-lg object-cover"
          />
          <div
            className={`absolute top-0 h-full w-full rounded-lg bg-background-secondary-dark shadow-sm backdrop-blur-[15px] transition-all duration-200 ${
              isHovered ? "opacity-30" : "opacity-0"
            }`}
          ></div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectSection;
