"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDownIcon, DownloadIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import useStaggerAnimation from "@/app/hooks/useStaggerAnimation";

export default function Header() {
  const skills = ["React/Angular", "Next.js", "TypeScript", "Tailwind CSS"];
  const [isHovered, setIsHovered] = useState(false);
  const { containerVariants, itemVariants } = useStaggerAnimation();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <header className="grid w-full items-center rounded-xl p-5 lg:grid-cols-2">
      <motion.div
        className="mr-8 max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-primary animate-fade-in-up mb-4 text-5xl font-bold sm:text-6xl"
        >
          Building Modern Web Solutions
        </motion.h1>

        <motion.p variants={itemVariants} className="text-muted-foreground mb-8 max-w-2xl text-xl">
          Looking for average? You&apos;re in the wrong place. But if you want web solutions that
          make jaws drop and turn heads, let&apos;s talk.
        </motion.p>

        <motion.div variants={itemVariants} className="mb-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              className="bg-background-primary-dark px-3 py-1 text-sm text-text-primary-dark dark:bg-background-primary-light"
            >
              {skill}
            </Badge>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row">
          <Button
            variant="outline"
            className="w-full transition-transform hover:scale-105 sm:w-auto"
            size="lg"
          >
            <DownloadIcon className="mr-2 h-4 w-4" />
            Download CV
          </Button>
          <Button
            variant="secondary"
            className="w-full transition-transform hover:scale-105 sm:w-auto"
            size="lg"
          >
            <MailIcon className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </motion.div>
      </motion.div>

      <div
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

        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button variant="secondary" size="lg" className="text-text-primary-dark">
            <ArrowDownIcon></ArrowDownIcon>
            See projects
          </Button>
        </div>
      </div>
    </header>
  );
}
