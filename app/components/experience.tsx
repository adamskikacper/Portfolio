"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import useStaggerAnimation from "../hooks/useStaggerAnimation";
import { ExperienceTypes } from "../types/experienceTypes";
import InteractiveBadge from "./interactive-badge";

interface ExperienceProps {
  experiences: ExperienceTypes;
}

const ExperienceComponent = ({ experiences }: ExperienceProps) => {
  const { containerVariants, itemVariants } = useStaggerAnimation();

  return (
    <section className="py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-16"
      >
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            variants={itemVariants}
            className="relative rounded-3xl border border-gray-800/30 bg-background-secondary-dark/80 p-8 backdrop-blur-sm dark:border-gray-700/30"
          >
            <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div className="text-gray-500 dark:text-gray-400">{experience.period}</div>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {experience.position} {" @ "}
                {experience.link ? (
                  <Link href={experience.link} target="_blank" className="hover:underline">
                    {experience.company}
                  </Link>
                ) : (
                  experience.company
                )}
              </h3>
            </div>

            {experience.description && (
              <p className="mb-4 text-gray-600 dark:text-gray-300">{experience.description}</p>
            )}

            <ul className="mb-6 ml-5 list-disc space-y-2 text-gray-600 dark:text-gray-300">
              {experience.bulletPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <InteractiveBadge key={tech} text={tech} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceComponent;
