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

  return (
    <motion.header
      style={{
        y: windowWidth >= 1024 ? headerY : 0,
        scale: windowWidth >= 1024 ? scale : 1,
        borderRadius: windowWidth >= 1024 ? borderRadius : 0,
      }}
      className="relative h-full gap-5 rounded-xl bg-white pb-[40px] pt-[130px] md:gap-20 lg:top-[90px] lg:h-[calc(100vh-97px)] dark:bg-background-secondary-dark"
    >
      <div className="container grid h-full items-center lg:grid-cols-2">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="relative">
            <h1 className="max-w-[300px] text-4xl font-extrabold leading-tight sm:leading-[70px] md:max-w-[500px] md:text-6xl lg:max-w-[600px]">
              Building{" "}
              <span className="relative">
                Modern{" "}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 2 }}
                  className="absolute bottom-[5px] left-0 z-[-1] h-[5px] bg-gradient-to-r from-zinc-300 to-zinc-500 sm:h-[10px] md:h-[13px]"
                ></motion.div>
              </span>
              Web Solutions
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <Image
              src="/assets/images/avatar.jpg"
              alt="Header Image"
              width={300}
              height={100}
              className="m-auto my-4 max-h-[500px] w-full max-w-[500px] rounded-lg shadow-2xl sm:my-8 lg:hidden"
            />
          </motion.div>

          <motion.p variants={itemVariants} className="my-4">
            Looking for average? You&apos;re in the wrong place. But if you want web solutions that
            make jaws drop and turn heads, let&apos;s talk.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-4 hidden flex-wrap gap-3 sm:mb-8 sm:flex"
          >
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="relative lg:block"
        >
          {" "}
          <Image
            src="/assets/images/avatar.jpg"
            alt="Header Image"
            width={500}
            height={300}
            className="m-auto hidden rounded-lg shadow-2xl lg:block"
          />
        </motion.div>
      </div>
    </motion.header>
  );
}
