"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "lucide-react";
import HoverImage from "./hover-image";
import useStaggerAnimation from "../hooks/useStaggerAnimation";

const AboutMe = () => {
  const { containerVariants, itemVariants } = useStaggerAnimation();

  return (
    <section className="">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
        <motion.div
          variants={containerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full lg:max-w-[500px] xl:max-w-[600px]"
        >
          <motion.h2
            variants={itemVariants}
            className="text-shine mb-5 text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-6xl lg:hidden lg:text-6xl xl:text-8xl dark:text-gray-300"
          >
            About me
          </motion.h2>

          <motion.div variants={itemVariants}>
            <div
              className="w-full overflow-hidden rounded-3xl shadow-xl"
              style={{ height: "auto", aspectRatio: "1/1" }}
            >
              <HoverImage
                imgSrc="/assets/images/avatar.jpg"
                videoSrc={""}
                type="image"
                alt="Header Image"
                width={1000}
                height={1000}
                buttonText="Download CV"
                buttonIcon={DownloadIcon}
                className="h-full w-full"
                aspectRatio="aspect-square"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          className="text-justify"
        >
          <motion.h2
            variants={itemVariants}
            className="text-shine mb-5 hidden text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl lg:block xl:text-8xl dark:text-gray-300"
          >
            About me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="eading-relaxed mb-5 text-gray-600 sm:text-lg dark:text-gray-300"
          >
            As a Front-End Developer with over 2 years of experience, I specialise in building
            responsive, user-friendly web applications, focusing on translating designs into clean,
            intuitive interfaces.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mb-5 leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300"
          >
            What sets me apart is my attention to the smallest details. Whether it&apos;s spacing,
            alignment, or subtle animations, I make sure every element feels just right.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mb-5 leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300"
          >
            The same commitment to detail that&apos;s reflected in my past work is what I bring to
            every project. You can trust that this level of care and dedication will be reflected in
            yours as well.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mb-5 leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300"
          >
            After all, building something great together is what really excites me. And if you want
            your website built with a little extra polish 🇵🇱 — just like a perfectly crafted pierogi
            🥟 — you&apos;ve come to the right place!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
