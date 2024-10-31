"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, MailIcon } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import useStaggerAnimation from "@/app/hooks/useStaggerAnimation";
import { useEffect } from "react";
import { useState } from "react";

export default function Header() {
  const skills = ["React/Angular", "Next.js", "TypeScript", "Tailwind CSS"];
  const { scrollY } = useScroll();
  const [windowWidth, setWindowWidth] = useState(0);
  const images = [
    "/assets/images/angular-light.svg",
    "/assets/images/nextjs-light.svg",
    "/assets/images/sass-light.svg",
    "/assets/images/figma-light.svg",
    "/assets/images/html-light.svg",
    "/assets/images/reactjs-light.svg",
    "/assets/images/js-light.svg",
    "/assets/images/angular-light.svg",
    "/assets/images/nextjs-light.svg",
    "/assets/images/sass-light.svg",
    "/assets/images/figma-light.svg",
    "/assets/images/html-light.svg",
    "/assets/images/reactjs-light.svg",
    "/assets/images/js-light.svg",
    "/assets/images/angular-light.svg",
    "/assets/images/nextjs-light.svg",
    "/assets/images/sass-light.svg",
    "/assets/images/figma-light.svg",
    "/assets/images/html-light.svg",
    "/assets/images/reactjs-light.svg",
    "/assets/images/js-light.svg",
    "/assets/images/angular-light.svg",
    "/assets/images/nextjs-light.svg",
    "/assets/images/sass-light.svg",
    "/assets/images/figma-light.svg",
    "/assets/images/html-light.svg",
    "/assets/images/reactjs-light.svg",
    "/assets/images/js-light.svg",
    "/assets/images/angular-light.svg",
    "/assets/images/nextjs-light.svg",
    "/assets/images/sass-light.svg",
    "/assets/images/figma-light.svg",
    "/assets/images/html-light.svg",
    "/assets/images/reactjs-light.svg",
    "/assets/images/js-light.svg",
    "/assets/images/angular-light.svg",
    "/assets/images/nextjs-light.svg",
    "/assets/images/sass-light.svg",
    "/assets/images/figma-light.svg",
    "/assets/images/html-light.svg",
    "/assets/images/reactjs-light.svg",
    "/assets/images/js-light.svg",
    "/assets/images/angular-light.svg",
    "/assets/images/nextjs-light.svg",
    "/assets/images/sass-light.svg",
    "/assets/images/figma-light.svg",
    "/assets/images/html-light.svg",
    "/assets/images/reactjs-light.svg",
    "/assets/images/js-light.svg",
    "/assets/images/angular-light.svg",
    "/assets/images/nextjs-light.svg",
    "/assets/images/sass-light.svg",
    "/assets/images/figma-light.svg",
    "/assets/images/html-light.svg",
    "/assets/images/reactjs-light.svg",
    "/assets/images/js-light.svg",
    "/assets/images/angular-light.svg",
    "/assets/images/nextjs-light.svg",
    "/assets/images/sass-light.svg",
    "/assets/images/figma-light.svg",
    "/assets/images/html-light.svg",
    "/assets/images/reactjs-light.svg",
    "/assets/images/js-light.svg",
    "/assets/images/angular-light.svg",
    "/assets/images/nextjs-light.svg",
    "/assets/images/sass-light.svg",
    "/assets/images/figma-light.svg",
    "/assets/images/html-light.svg",
    "/assets/images/reactjs-light.svg",
    "/assets/images/js-light.svg",
    "/assets/images/angular-light.svg",
    "/assets/images/nextjs-light.svg",
    "/assets/images/sass-light.svg",
    "/assets/images/figma-light.svg",
    "/assets/images/html-light.svg",
    "/assets/images/reactjs-light.svg",
    "/assets/images/js-light.svg",
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
      className="relative flex h-full items-center overflow-hidden rounded-xl bg-white pb-[40px] pt-[130px] md:gap-20 lg:top-[90px] lg:h-[calc(100vh-97px)] dark:bg-background-secondary-dark"
    >
      <motion.div
        className="container z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="relative max-w-[800px]">
          <h1 className="mb-5 text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl xl:text-8xl dark:text-gray-300">
            Building{" "}
            <span className="relative">
              Modern{" "}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-[5px] left-0 z-[-1] h-[5px] bg-gradient-to-r from-zinc-300 to-zinc-500 sm:h-[10px] md:h-[30px]"
              ></motion.div>
            </span>
            Web Solutions
          </h1>

          <motion.p variants={itemVariants} className="my-4 max-w-[600px]">
            Looking for average? You&apos;re in the wrong place. But if you want web solutions that
            make jaws drop and turn heads, let&apos;s talk.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4 hidden flex-wrap gap-3 sm:mb-8 sm:flex">
          {skills.map((skill) => (
            <Badge
              key={skill}
              className="bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-500 px-[10px] py-[5px] text-text-primary-dark dark:from-zinc-400 dark:via-zinc-200 dark:to-zinc-400"
            >
              {skill}
            </Badge>
          ))}
        </motion.div>

        <motion.div variants={containerVariants} className="flex flex-col gap-4 sm:flex-row">
          <motion.div variants={itemVariants}>
            <Button
              variant="outline"
              className="w-full transition-transform hover:scale-105 sm:w-[150px]"
              size="lg"
            >
              <Github className="h-4 w-4" />
              Github
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="secondary"
              className="w-full transition-transform hover:scale-105 sm:w-[150px]"
              size="lg"
            >
              <MailIcon className="mr-1 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute right-[-650px] top-[-1000px] rotate-[-20deg] transform">
        <div className="grid transform grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              style={{
                y: imageY,
              }}
            >
              <Image
                src={image}
                alt={`Technology Logo ${index + 1}`}
                width={250}
                height={250}
                unoptimized={true}
                className="relative rounded-2xl bg-background-primary-light object-cover p-5 opacity-50 dark:bg-background-primary-dark"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
