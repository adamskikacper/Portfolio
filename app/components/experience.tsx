"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useStaggerAnimation from "../hooks/useStaggerAnimation";
import { ExperienceTypes } from "../types/experienceTypes";
import InteractiveBadge from "./InteractiveBadge";

interface ExperienceProps {
  experiences: ExperienceTypes;
}

const ExperienceComponent = ({ experiences }: ExperienceProps) => {
  const { containerVariants, itemVariants } = useStaggerAnimation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative space-y-16"
      >
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border border-gray-700/10 bg-background-secondary-light p-4 backdrop-blur-sm lg:p-8 dark:border-gray-700/30 dark:bg-background-secondary-dark/80"
            onMouseEnter={() => setHoveredId(experience.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Decorative circle in top right corner with only 1/4 visible */}
            <AnimatePresence>
              {hoveredId === experience.id && (
                <motion.div
                  className="absolute right-0 top-0 z-0 h-[500px] w-[500px]"
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
                    className="translate-x-[40%] translate-y-[-50%]"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative z-10">
              <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div className="text-gray-500 dark:text-gray-400">{experience.period}</div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {experience.position}
                  <br></br> {" @ "}
                  {experience.link ? (
                    <Link
                      href={experience.link}
                      target="_blank"
                      className="hover:underline"
                    >
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
                  <InteractiveBadge
                    key={tech}
                    text={tech}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceComponent;
