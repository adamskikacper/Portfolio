import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Dot {
  x: number;
  y: number;
  randomDelay: number;
  randomDuration: number;
}

interface AnimatedDotsProps {
  /** Padding from the edges in pixels */
  padding?: number;
  /** Spacing between dots in pixels */
  spacing?: number;
  /** Size of dots in pixels (tailwind size classes) */
  dotSize?: "xs" | "sm" | "md" | "lg";
  /** Animation duration range in seconds */
  durationRange?: {
    min: number;
    max: number;
  };
  /** Maximum initial delay for dots in seconds */
  maxDelay?: number;
  /** Animation configuration */
  animation?: {
    yOffset: number;
    opacityRange: [number, number];
    scaleRange: [number, number];
  };
  /** Color configuration */
  colors?: {
    light: {
      from: string;
      to: string;
    };
    dark: {
      from: string;
      to: string;
    };
  };
}

const DOT_SIZES = {
  xs: "h-0.5 w-0.5",
  sm: "h-1 w-1",
  md: "h-1.5 w-1.5",
  lg: "h-2 w-2",
} as const;

const DEFAULT_ANIMATION = {
  yOffset: -6,
  opacityRange: [0.2, 0.8] as [number, number],
  scaleRange: [0.2, 1.4] as [number, number],
};

const DEFAULT_COLORS = {
  light: {
    from: "from-zinc-400",
    to: "to-zinc-300",
  },
  dark: {
    from: "dark:from-zinc-600",
    to: "dark:to-zinc-500",
  },
};

export default function AnimatedDots({
  padding = 40,
  spacing = 60,
  dotSize = "sm",
  durationRange = { min: 2, max: 4 },
  maxDelay = 2,
  animation = DEFAULT_ANIMATION,
  colors = DEFAULT_COLORS,
}: AnimatedDotsProps) {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const updateDots = () => {
      const header = document.querySelector("header");
      if (!header) return;

      // Available space for dots
      const availableWidth = header.clientWidth - padding * 2;
      const availableHeight = header.clientHeight - padding * 2;

      // Calculate number of dots that can fit
      const cols = Math.floor(availableWidth / spacing) + 1;
      const rows = Math.floor(availableHeight / spacing) + 1;

      // Calculate actual spacing to distribute dots evenly
      const effectiveSpacingX = availableWidth / (cols - 1);
      const effectiveSpacingY = availableHeight / (rows - 1);

      const newDots: Dot[] = [];

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          newDots.push({
            x: padding + col * effectiveSpacingX,
            y: padding + row * effectiveSpacingY,
            randomDelay: Math.random() * maxDelay,
            randomDuration:
              durationRange.min + Math.random() * (durationRange.max - durationRange.min),
          });
        }
      }

      setDots(newDots);
    };

    updateDots();
    window.addEventListener("resize", updateDots);
    return () => window.removeEventListener("resize", updateDots);
  }, [padding, spacing, durationRange, maxDelay]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-b ${colors.light.from} ${colors.light.to} ${colors.dark.from} ${colors.dark.to} ${DOT_SIZES[dotSize]}`}
          style={{
            left: dot.x,
            top: dot.y,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            y: [0, animation.yOffset, 0],
            opacity: [
              animation.opacityRange[0],
              animation.opacityRange[1],
              animation.opacityRange[0],
            ],
            scale: [animation.scaleRange[0], animation.scaleRange[1], animation.scaleRange[0]],
          }}
          transition={{
            duration: dot.randomDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.randomDelay,
            times: [0, 0.5, 1],
          }}
        />
      ))}
    </div>
  );
}
