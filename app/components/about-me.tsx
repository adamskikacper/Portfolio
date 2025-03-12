"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "lucide-react";
import HoverImage from "./hover-image";
import useStaggerAnimation from "../hooks/useStaggerAnimation";
import Image from "next/image";

const AboutMe = () => {
  const { containerVariants, itemVariants } = useStaggerAnimation();

  return (
    <section className="">
      <div className="relative grid grid-cols-1 gap-8 xl:grid-cols-2">
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

          <motion.div variants={itemVariants} className="relative">
            {/* Top left circle with levitating animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 0.7,
                y: [0, -15, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  },
                  opacity: {
                    duration: 1,
                    ease: "easeOut",
                  },
                },
              }}
              viewport={{ once: true, amount: 1 }}
              className="absolute -left-[75px] -top-[65px]"
            >
              <Image
                src="/assets/images/circles.svg"
                width={300}
                height={300}
                alt="Decorative circles"
              />
            </motion.div>

            {/* Bottom right circle with levitating animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 0.7,
                y: [0, -15, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    delay: 0.5, // Slight delay for visual interest
                  },
                  opacity: {
                    duration: 1,
                    ease: "easeOut",
                  },
                },
              }}
              viewport={{ once: true, amount: 1 }}
              className="absolute -bottom-[90px] -right-[75px]"
            >
              <Image
                src="/assets/images/circles.svg"
                width={300}
                height={300}
                alt="Decorative circles"
              />
            </motion.div>

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
          className="relative text-justify"
        >
          <motion.h2
            variants={itemVariants}
            className="text-shine mb-5 hidden text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl lg:block xl:text-7xl dark:text-gray-300"
          >
            About me
          </motion.h2>

          <div className="xl:max-w-[550px]">
            <motion.p
              variants={itemVariants}
              className="eading-relaxed sm:text-md mb-5 text-gray-600 dark:text-gray-300"
            >
              With over two years of hands-on experience as a Front-End Developer, I&apos;m
              passionate about turning design ideas into interactive, engaging digital experiences.
              For me, it&apos;s not just about building websites — it&apos;s about creating
              memorable experiences that leave a lasting impact. And I truly hope that&apos;s
              exactly what my work can do for you!
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="sm:text-md mb-5 leading-relaxed text-gray-600 dark:text-gray-300"
            >
              On a day-to-day basis, I work with Angular, and I&apos;ve also had the chance to
              explore React through a variety of personal projects. Currently, I&apos;m diving
              deeper into React & Next.js to sharpen my skills and make sure I&apos;m ahead of the
              curve. I&apos;ve also got my eyes on Web3 development, and if the right opportunity
              comes along, I&apos;m all in.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="sm:text-md mb-5 leading-relaxed text-gray-600 dark:text-gray-300"
            >
              When I&apos;m not coding, you&apos;ll find me diving into Web3 and crypto investments
              something, I’ve been passionate about for years. I also enjoy watching YouTube and
              documentaries to stay updated on what&apos;s happening around the world — it&apos;s
              all about keeping that curiosity alive and learning something new every day.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="sm:text-md mb-5 leading-relaxed text-gray-600 dark:text-gray-300"
            >
              After all, building something great together is what really excites me. And if you
              want your website built with a little extra polish 🇵🇱 — just like a perfectly crafted
              pierogi 🥟 — you&apos;ve come to the right place!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
