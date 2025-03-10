"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface InteractiveBadgeProps {
  text: string;
  index?: number;
  className?: string;
}

export const InteractiveBadge = ({ text, index = 0, className = "" }: InteractiveBadgeProps) => {
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.15,
        delay: 0.03 * index,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-md bg-opacity-70 px-4 py-1.5 text-xs font-medium text-text-primary-light backdrop-blur-[5px] dark:text-text-primary-dark ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <span className="relative z-10">{text}</span>
      {hoverPosition && (
        <span
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle 30px at ${hoverPosition.x}px ${hoverPosition.y}px, rgba(255,255,255,0.3), transparent 100%)`,
            filter: "blur(10px)",
          }}
        />
      )}
    </motion.div>
  );
};

export default InteractiveBadge;
