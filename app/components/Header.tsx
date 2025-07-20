"use client";
import useStaggerAnimation from "@/app/hooks/useStaggerAnimation";
import { Button } from "@/components/ui/button";
import { TECH_STACK_IMAGES } from "@/constants/techStack";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Github, MailIcon } from "lucide-react";
import { RefObject, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import StackIcon from "tech-stack-icons";
import AnimatedDots from "./AnimatedDots";

export interface HeaderRefs {
  titleRef: RefObject<HTMLHeadingElement>;
  descriptionRef: RefObject<HTMLParagraphElement>;
  buttonsRef: RefObject<HTMLDivElement>;
}

const Header = forwardRef<HeaderRefs>((_props, ref) => {
  const { scrollY } = useScroll();
  const [windowWidth, setWindowWidth] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    titleRef,
    descriptionRef,
    buttonsRef,
  }));

  const isInView = useInView(headerRef, {
    once: false,
    amount: 0.3,
  });

  const images = TECH_STACK_IMAGES;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerY = useTransform(scrollY, [0, 500], [0, -150]);
  const scale = useTransform(scrollY, [500, 0], [1, 0.85]);
  const borderRadius = useTransform(scrollY, [500, 0], [0, 28]);
  const { containerVariants, itemVariants } = useStaggerAnimation();
  const imageY = useTransform(scrollY, [0, 2000], isInView ? [0, -1200] : [0, 0]);

  const handleGithubClick = () => {
    window.open("https://github.com/adamskikacper", "_blank", "noopener,noreferrer");
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      ref={headerRef}
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

      <div className="container z-10 flex flex-col items-center lg:m-0 lg:w-auto lg:items-start xl:mx-auto">
        <div className="relative">
          <h1
            ref={titleRef}
            className="header-title text-shine mb-2 max-w-[402px] text-center text-[70px] font-extrabold uppercase leading-none text-gray-600 sm:text-[90px] lg:text-left lg:text-[120px] xl:max-w-[540px] xl:text-[165px] dark:text-gray-300"
          >
            Hey, <span className="ml-[20px]"></span>I&apos;m Kacper
          </h1>
        </div>

        <div className="mb-8 max-w-[280px] text-gray-600 sm:max-w-[370px] lg:max-w-[402px] xl:max-w-[540px] dark:text-gray-400">
          <p
            ref={descriptionRef}
            className="header-description text-center text-sm leading-relaxed lg:text-lg"
          >
            I create experiences where <span className="font-bold">every pixel has a purpose</span>{" "}
            — experiences I&apos;d want to use myself.
          </p>
        </div>

        <div
          ref={buttonsRef}
          className="header-buttons grid grid-cols-2 gap-4 md:flex-col lg:mx-auto"
        >
          <div>
            <Button
              variant="outline"
              className="w-full transition-transform hover:scale-105"
              size={windowWidth < 640 ? "sm" : "lg"}
              onClick={handleGithubClick}
            >
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </div>

          <div>
            <Button
              variant="secondary"
              className="w-full transition-transform hover:scale-105"
              size={windowWidth < 640 ? "sm" : "lg"}
              onClick={handleContactClick}
            >
              <MailIcon className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

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
});

Header.displayName = "Header";

export default Header;
