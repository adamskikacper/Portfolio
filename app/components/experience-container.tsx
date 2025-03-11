"use client";

import { motion } from "framer-motion";
import useStaggerAnimation from "../hooks/useStaggerAnimation";
import { ExperienceTypes } from "../types/experienceTypes";
import Experience from "./experience";

const experienceData: ExperienceTypes = [
  {
    id: 1,
    company: "Motivait Limited",
    position: "Frontend Developer",
    period: "08.2022 - Present",
    bulletPoints: [
      "Develop responsive web applications using Angular, TypeScript, and Angular Material.",
      "Translate Figma designs into pixel-perfect, functional user interfaces.",
      "Conduct code reviews to maintain high code quality.",
      "Participate in daily stand-ups, sprint planning, and retrospectives.",
      "Develop reusable components using Storybook and microfrontends architecture.",
      "Collaborate with cross-functional teams to deliver high-quality products.",
    ],
    technologies: [
      "Angular",
      "Angular Material",
      "TypeScript",
      "Anime.js",
      "Storybook",
      "JWT",
      "Strapi CMS",
      "i18n",
      "Google Analytics",
      "BEM",
      "Git",
      "Jira",
      "Figma",
      "Lighthouse",
    ],
    link: "https://motivait.net",
  },
];

const ExperienceContainer = () => {
  const { itemVariants } = useStaggerAnimation();

  return (
    <div className="container py-20">
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-shine mb-10 text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl xl:text-7xl dark:text-gray-300"
      >
        Experience
      </motion.h2>

      <Experience experiences={experienceData} />
    </div>
  );
};

export default ExperienceContainer;
