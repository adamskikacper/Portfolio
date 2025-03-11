"use client";

import { useState, useCallback, memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

interface InteractiveBadgeProps {
  text: string;
  index?: number;
  className?: string;
}

// Throttle function specifically for mouse events
function throttle(
  func: (e: React.MouseEvent<HTMLDivElement>) => void,
  limit: number
): (e: React.MouseEvent<HTMLDivElement>) => void {
  let inThrottle = false;

  return function (e: React.MouseEvent<HTMLDivElement>) {
    if (!inThrottle) {
      func(e);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

const InteractiveBadgeComponent = ({ text, index = 0, className = "" }: InteractiveBadgeProps) => {
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Memoize the animation variants
  const animationVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 10 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.15,
          delay: 0.03 * index,
          ease: "easeOut",
        },
      },
      hover: {
        scale: 1.02,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.1 },
      },
      tap: { scale: 0.98 },
    }),
    [index]
  );

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Optimized mouse move handler using requestAnimationFrame
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (badgeRef.current) {
        const rect = badgeRef.current.getBoundingClientRect();
        setHoverPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    });
  }, []);

  // Throttled version of the mouse move handler
  const throttledMouseMove = useMemo(
    () => throttle(handleMouseMove, 16), // ~60fps
    [handleMouseMove]
  );

  const handleMouseLeave = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setHoverPosition(null);
  }, []);

  // Memoize the hover effect style
  const hoverEffectStyle = useMemo(() => {
    if (!hoverPosition) return {};

    return {
      "--x": `${hoverPosition.x}px`,
      "--y": `${hoverPosition.y}px`,
    } as React.CSSProperties;
  }, [hoverPosition]);

  return (
    <motion.div
      ref={badgeRef}
      variants={animationVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      onMouseMove={throttledMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-md bg-opacity-70 px-4 py-1.5 text-xs font-medium text-text-primary-light backdrop-blur-[5px] dark:text-text-primary-dark ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        ...hoverEffectStyle,
      }}
    >
      <span className="relative z-10">{text}</span>
      {hoverPosition && (
        <span
          className="hover-effect pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle 30px at var(--x) var(--y), rgba(255,255,255,0.3), transparent 100%)`,
            filter: "blur(10px)",
          }}
        />
      )}
    </motion.div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export const InteractiveBadge = memo(InteractiveBadgeComponent);

export default InteractiveBadge;
