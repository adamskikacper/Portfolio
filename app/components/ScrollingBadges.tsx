"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import InteractiveBadge from "./InteractiveBadge";

interface ScrollingBadgesProps {
  technologies: string[];
  speed?: "slow" | "medium" | "fast" | number;
}

const ScrollingBadges = ({ technologies }: ScrollingBadgesProps) => {
  const [, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.3,
  });

  // Effect to measure the container width
  useEffect(() => {
    const measureWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Initial measurement
    measureWidth();

    // Re-measure on resize
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <div
      ref={containerRef}
      className="relative h-[40px] w-full overflow-hidden"
    >
      <motion.div
        className="absolute flex gap-3 whitespace-nowrap"
        animate={
          isInView
            ? {
                x: [0, -350],
              }
            : { x: 0 }
        }
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedTechnologies.map((tech, index) => (
          <InteractiveBadge
            key={`${tech}-${index}`}
            text={tech}
            index={index % technologies.length}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingBadges;
