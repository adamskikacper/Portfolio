"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { DownloadIcon } from "lucide-react";
import HoverImage from "./hover-image";
import useStaggerAnimation from "../hooks/useStaggerAnimation";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const { containerVariants, itemVariants } = useStaggerAnimation();
  const imageY = useTransform(scrollY, [2000, 0], [0, 200]);
  const textY = useTransform(scrollY, [0, 1000], [0, 100]);
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
        <motion.div
          variants={containerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          style={{
            y: imageY,
          }}
          className="mb-8 w-full md:mb-4 md:mr-8 lg:mr-12 lg:max-w-[500px] xl:max-w-[600px]"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-5 text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-6xl lg:hidden lg:text-6xl xl:text-8xl dark:text-gray-300"
          >
            About me
          </motion.h2>

          <motion.div variants={itemVariants}>
            <HoverImage
              imgSrc="/assets/images/avatar.jpg"
              videoSrc={""}
              type="image"
              alt="Header Image"
              width={500}
              height={500}
              buttonText="Download CV"
              buttonIcon={DownloadIcon}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          style={{
            y: textY,
          }}
          className="text-justify"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-5 hidden text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl lg:block xl:text-8xl dark:text-gray-300"
          >
            About me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="eading-relaxed mb-5 text-gray-600 sm:text-lg dark:text-gray-300"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
            dolor consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mb-5 leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
            dolor Quisquam, quos. Lorem ipsum dolor sit ame consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quisquam, quos.2
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mb-5 leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
            dolor consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor consectetur adipisicing
            elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
