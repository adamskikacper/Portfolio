"use client";

import Image from "next/image";
import { Project } from "@/app/types/projectTypes";
import { motion, useInView } from "framer-motion";
import useStaggerAnimation from "@/app/hooks/useStaggerAnimation";
import { useState, useRef } from "react";

const ProjectSection = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { containerVariants, itemVariants } = useStaggerAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="relative flex w-full justify-items-stretch"
    >
      <header className="grid w-full items-center rounded-xl lg:grid-cols-2">
        <motion.div
          className="mr-8 max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="relative">
            <h2 className="mb-5 text-5xl font-bold">{project.title}</h2>
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
          className="relative hidden h-full max-h-[400px] hover:cursor-pointer lg:block"
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
      </header>
    </motion.div>
  );
};

export default ProjectSection;
