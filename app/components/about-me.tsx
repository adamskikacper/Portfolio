"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="mx-auto grid w-full gap-12 lg:grid-cols-2 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="group relative"
      >
        <Image
          src="/assets/images/avatar.jpg"
          alt="Header Image"
          width={500}
          height={500}
          className="m-auto w-full rounded-4xl object-cover object-center transition"
        />
      </motion.div>

      <div className="flex flex-col justify-center gap-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="inline-block bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text text-5xl font-extrabold uppercase text-transparent dark:from-zinc-300 dark:to-zinc-500"
        >
          About me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          In 2021, I dove into frontend development and quickly developed a passion for transforming
          intricate designs into polished, responsive websites. Since then, I&apos;ve tackled a
          range of projects—both professional and personal—allowing me to bring everything from
          minimalist layouts to dynamic interfaces to life.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          My current focus is on creating visually engaging, accessible websites that perform
          beautifully across all devices. I take great pride in delivering pixel-perfect results;
          some might call it perfectionism, but I prefer to think of myself as a &apos;pixel
          detective,&apos; always on the lookout for the smallest details!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          When I&apos;m not coding, you can find me exploring the world of blockchain technology and
          keeping up with the latest trends in crypto or planning my next travel adventure. On
          quiter days, I enjoy experimenting in the kitchen with new recipes or getting immersed in
          video games.
        </motion.p>

        <Button
          variant="outline"
          className="w-full transition-transform hover:scale-105 sm:w-[150px]"
          size="lg"
        >
          <DownloadIcon className="mr-1 h-4 w-4" />
          Download CV
        </Button>
      </div>
    </section>
  );
};

export default AboutMe;
