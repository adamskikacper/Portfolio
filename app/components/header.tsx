"use client";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import useStaggerAnimation from "@/app/hooks/useStaggerAnimation";
import { useEffect, useState } from "react";
import { Github, MailIcon, FileText, Linkedin } from "lucide-react";
import StackIcon from "tech-stack-icons";
import AnimatedDots from "./AnimatedDots";

export default function Header() {
  const { scrollY } = useScroll();
  const [windowWidth, setWindowWidth] = useState(0);
  const images = [
    "angular17",
    "typescript",
    "reactjs",
    "js",
    "nextjs2",
    "tailwindcss",
    "typescript",
    "nextjs2",
    "js",
    "reactjs",
    "js",
    "nextjs2",
    "tailwindcss",
    "nextjs2",
    "angular17",
    "typescript",
    "reactjs",
    "js",
    "nextjs2",
    "tailwindcss",
    "typescript",
    "reactjs",
    "js",
    "nextjs2",
    "tailwindcss",
    "typescript",
    "js",
    "angular17",
    "typescript",
    "reactjs",
    "js",
    "nextjs2",
    "tailwindcss",
    "typescript",
    "reactjs",
    "js",
    "nextjs2",
    "tailwindcss",
    "typescript",
    "typescript",
    "reactjs",
    "angular17",
    "typescript",
    "reactjs",
    "js",
    "nextjs2",
    "tailwindcss",
    "typescript",
    "reactjs",
    "js",
    "nextjs2",
    "tailwindcss",
    "typescript",
    "reactjs",
    "js",
    "nextjs2",
    "tailwindcss",
    "typescript",
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerY = useTransform(scrollY, [0, 500], [0, -150]);
  const scale = useTransform(scrollY, [500, 0], [1, 0.9]);
  const borderRadius = useTransform(scrollY, [500, 0], [0, 28]);
  const { containerVariants, itemVariants } = useStaggerAnimation();
  const imageY = useTransform(scrollY, [0, 2000], [0, -1200]);

  return (
    <motion.header
      style={{
        y: windowWidth >= 1024 ? headerY : 0,
        scale: windowWidth >= 1024 ? scale : 1,
        borderRadius: windowWidth >= 1024 ? borderRadius : 0,
      }}
      initial="hidden"
      animate="visible"
      className="relative flex h-screen items-center overflow-hidden rounded-xl bg-white md:gap-20 lg:top-[90px] lg:h-[calc(100vh-97px)] dark:bg-background-secondary-dark"
    >
      <AnimatedDots
        padding={40}
        spacing={80}
        dotSize="lg"
        durationRange={{ min: 3, max: 5 }}
        maxDelay={2}
        maxDots={200}
        animation={{
          yOffset: -6,
          opacityRange: [0.2, 0.6],
          scaleRange: [0.2, 1.2],
        }}
        colors={{
          light: {
            from: "from-zinc-400",
            to: "to-zinc-300",
          },
          dark: {
            from: "dark:from-zinc-600",
            to: "dark:to-zinc-500",
          },
        }}
      />

      <motion.div
        className="container z-10 m-0 max-w-[400px] sm:max-w-[500px] xl:max-w-[800px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="relative">
          <h1 className="text-shine mb-2 text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl xl:text-9xl dark:text-gray-300">
            Hey, I&apos;m Kacper
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-8 max-w-[550px] text-gray-600 dark:text-gray-400"
        >
          <p className="text-base leading-relaxed sm:text-xl">
            A <span className="font-semibold text-yellow-500">frontend developer</span> working in{" "}
            <span className="font-bold">Angular</span> with exposure to{" "}
            <span className="font-bold">React</span>, always looking for new challenges and
            opportunities to grow.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="flex flex-col gap-4 sm:flex-row">
          <motion.div variants={itemVariants}>
            <Button
              variant="outline"
              className="w-full transition-transform hover:scale-105 sm:w-[150px]"
              size="lg"
            >
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="outline"
              className="w-full transition-transform hover:scale-105 sm:w-[150px]"
              size="lg"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={containerVariants} className="mt-4 flex flex-col gap-4 sm:flex-row">
          <motion.div variants={itemVariants}>
            <Button
              variant="secondary"
              className="w-full transition-transform hover:scale-105 sm:w-[150px]"
              size="lg"
            >
              <MailIcon className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="light"
              className="w-full transition-transform hover:scale-105 sm:w-[150px]"
              size="lg"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute right-[-500px] top-[-200px] hidden rotate-[-20deg] lg:block">
        <div className="grid grid-cols-3 lg:grid-cols-4 lg:gap-10">
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                y: imageY,
                translateY:
                  windowWidth >= 1024 ? `${(index % 4) * -50}px` : `${(index % 3) * -50}px`,
              }}
            >
              <div className="rounded-2xl bg-background-primary-light p-5 shadow-lg dark:bg-background-primary-dark">
                <StackIcon
                  grayscale={true}
                  name={image}
                  className="object-coverlg:max-w-[200px] relative"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
