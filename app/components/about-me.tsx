"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import useStaggerAnimation from "../hooks/useStaggerAnimation";

import HoverImage from "./hover-image";

const AboutMe = () => {
  const { containerVariants, itemVariants } = useStaggerAnimation();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/kacperadamski/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative max-w-7xl">
      <div className="relative grid grid-cols-1 gap-8 lg:gap-12 xl:grid-cols-2">
        <motion.div
          variants={containerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto flex w-full items-center justify-center lg:max-w-[500px] lg:self-center xl:max-w-[1000px]"
        >
          <motion.div
            variants={itemVariants}
            className="relative w-full"
          >
            <motion.div
              variants={itemVariants}
              className="w-full overflow-hidden rounded-3xl shadow-xl"
              style={{ height: "auto", aspectRatio: "1/1" }}
            >
              <HoverImage
                imgSrc="/assets/images/avatar.jpeg"
                videoSrc=""
                type="image"
                alt="Header Image"
                width={1000}
                height={1000}
                className="h-full w-full"
                aspectRatio="aspect-square"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          className="relative flex items-center self-center text-justify lg:h-full"
        >
          <div className="w-full">
            {" "}
            <motion.h2
              variants={itemVariants}
              className="text-shine mb-5 text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl xl:text-7xl dark:text-gray-300"
            >
              About me
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="sm:text-md mb-5 leading-relaxed text-gray-600 dark:text-gray-300"
            >
              I'm a Front-End Developer with three years of hands-on experience, primarily working
              in Angular. I hold a First Class Honours degree in Computer Science with a
              specialisation in Web Development, and my strengths lie in translating designs into
              pixel-perfect, responsive user interfaces and delivering clean, visually consistent
              layouts.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="sm:text-md mb-5 leading-relaxed text-gray-600 dark:text-gray-300"
            >
              While my day-to-day work still heavily involves Angular, I'm also diving deeper into
              React, keen to explore new challenges and expand my skillset. I'm a self-motivated
              professional, comfortable with remote work, known for my strong attention to detail
              and proven record of taking full ownership and driving projects to completion
              independently.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="sm:text-md mb-5 leading-relaxed text-gray-600 dark:text-gray-300"
            >
              When I'm not coding, I'm often exploring the world of crypto and Web3 — something I've
              been fascinated by for years. I also enjoy 3D modeling and printing, keeping up with
              the latest AI tools, or catching up on YouTube videos and documentaries.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="sm:text-md mb-5 leading-relaxed text-gray-600 dark:text-gray-300"
            >
              Building something great together is what truly excites me. And if you want your
              website built with a little extra "polish" — just like a perfectly made pierogi 🥟 —
              you've come to the right place!
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                variant="outline"
                className="w-[125px] transition-transform hover:scale-105"
                size={windowWidth < 640 ? "sm" : "lg"}
                onClick={handleLinkedinClick}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
