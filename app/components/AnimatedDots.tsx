import { motion } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useInView } from "react-intersection-observer";

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
  /** Maximum number of dots to render (for performance) */
  maxDots?: number;
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

// Debounce function to limit how often a function is called
function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default function AnimatedDots({
  padding = 40,
  spacing = 60,
  dotSize = "sm",
  durationRange = { min: 2, max: 4 },
  maxDelay = 2,
  animation = DEFAULT_ANIMATION,
  colors = DEFAULT_COLORS,
  maxDots = 100, // Add a maximum limit to the number of dots
}: AnimatedDotsProps) {
  const [dots, setDots] = useState<Dot[]>([]);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Memoize the dot style to prevent recalculation
  const dotStyle = useMemo(() => {
    return `absolute rounded-full bg-gradient-to-b ${colors.light.from} ${colors.light.to} ${colors.dark.from} ${colors.dark.to} ${DOT_SIZES[dotSize]}`;
  }, [colors.dark.from, colors.dark.to, colors.light.from, colors.light.to, dotSize]);

  // Create a memoized updateDots function
  const updateDots = useCallback(() => {
    const header = document.querySelector("header");
    if (!header) return;

    // Available space for dots
    const availableWidth = header.clientWidth - padding * 2;
    const availableHeight = header.clientHeight - padding * 2;

    // Calculate number of dots that can fit
    let cols = Math.floor(availableWidth / spacing) + 1;
    let rows = Math.floor(availableHeight / spacing) + 1;

    // Limit the total number of dots for performance
    const totalDots = cols * rows;
    if (totalDots > maxDots) {
      // Reduce density to stay under maxDots
      const ratio = Math.sqrt(maxDots / totalDots);
      cols = Math.floor(cols * ratio);
      rows = Math.floor(rows * ratio);
    }

    // Calculate actual spacing to distribute dots evenly
    const effectiveSpacingX = availableWidth / (cols - 1 || 1);
    const effectiveSpacingY = availableHeight / (rows - 1 || 1);

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
  }, [padding, spacing, durationRange, maxDelay, maxDots]);

  // Debounced version of updateDots to prevent excessive recalculations
  const debouncedUpdateDots = useMemo(() => debounce(updateDots, 200), [updateDots]);

  useEffect(() => {
    updateDots();
    window.addEventListener("resize", debouncedUpdateDots);
    return () => window.removeEventListener("resize", debouncedUpdateDots);
  }, [updateDots, debouncedUpdateDots]);

  // Memoize the animation properties to prevent recalculation
  const animationProps = useMemo(
    () => ({
      y: [0, animation.yOffset, 0],
      opacity: [animation.opacityRange[0], animation.opacityRange[1], animation.opacityRange[0]],
      scale: [animation.scaleRange[0], animation.scaleRange[1], animation.scaleRange[0]],
    }),
    [animation]
  );

  // Only render dots when in view
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {inView &&
        dots.map((dot, index) => (
          <motion.div
            key={index}
            className={dotStyle}
            style={{
              left: dot.x,
              top: dot.y,
              transform: "translate(-50%, -50%)",
            }}
            initial={false}
            animate={inView ? animationProps : false}
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
