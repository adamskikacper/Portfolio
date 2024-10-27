"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, MailIcon } from "lucide-react";
import Image from "next/image";

import { motion } from "framer-motion";
import useStaggerAnimation from "@/app/hooks/useStaggerAnimation";

export default function Header() {
  const skills = ["React/Angular", "Next.js", "TypeScript", "Tailwind CSS"];

  const { containerVariants, itemVariants } = useStaggerAnimation();

  return (
    <header className="grid w-full items-center gap-5 rounded-xl lg:grid-cols-2">
      <motion.div
        className="max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="relative">
          <h1 className="text-primary animate-fade-in-up mb-4 max-w-[600px] text-5xl font-bold leading-tight sm:text-6xl sm:leading-[70px]">
            Building{" "}
            <span className="relative">
              Modern{" "}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-[5px] left-0 z-[-1] h-[13px] bg-gradient-to-r from-zinc-300 to-zinc-500"
              ></motion.div>
            </span>
            Web Solutions
          </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="text-muted-foreground mb-8">
          Looking for average? You&apos;re in the wrong place. But if you want web solutions that
          make jaws drop and turn heads, let&apos;s talk.
        </motion.p>

        <motion.div variants={itemVariants} className="mb-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              className="bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-500 px-[10px] py-[5px] text-text-primary-dark dark:from-zinc-400 dark:via-zinc-200 dark:to-zinc-400"
            >
              {skill}
            </Badge>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row">
          <Button
            variant="outline"
            className="w-full transition-transform hover:scale-105 sm:w-auto"
            size="lg"
          >
            <Github className="h-4 w-4" />
            Github
          </Button>
          <Button
            variant="secondary"
            className="w-full transition-transform hover:scale-105 sm:w-auto"
            size="lg"
          >
            <MailIcon className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
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
          className="m-auto rounded-lg bg-background-secondary-dark shadow-2xl backdrop-blur-[5px] dark:border-border-light dark:bg-background-secondary-light"
        />
      </motion.div>
    </header>
  );
}
