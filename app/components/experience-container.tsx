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
    period: "07.2022 - Present",
    bulletPoints: [
      "Translate Figma designs into pixel-perfect user interfaces.",
      "Develop reusable components using Storybook and microfrontends architecture.",
      "Collaborate with cross-functional teams to deliver high-quality web apps.",
      "Conduct code reviews to maintain code quality.",
      "Work within Agile, contributing to sprint planning, daily stand-ups, and retrospectives.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Angular Material",
      "BEM",
      "SCSS",
      "Microfrontends",
      "Storybook",
      "Headless CMS",
    ],
    link: "https://motivait.net",
  },
];

const ExperienceContainer = () => {
  const { itemVariants } = useStaggerAnimation();

  return (
    <div>
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
