"use client";
import { motion, MotionValue } from "framer-motion";
import StackIcon from "tech-stack-icons";

interface TechStackIconsProps {
  images: string[];
  imageY: MotionValue<number>;
  itemVariants: any;
  windowWidth: number;
}

export default function TechStackIcons({
  images,
  imageY,
  itemVariants,
  windowWidth,
}: TechStackIconsProps) {
  return (
    <div className="absolute right-[-500px] top-[-200px] hidden rotate-[-20deg] lg:block">
      <div className="grid grid-cols-3 lg:grid-cols-4 lg:gap-10">
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            style={{
              y: imageY,
              translateY: windowWidth >= 1024 ? `${(index % 4) * -50}px` : `${(index % 3) * -50}px`,
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
  );
}
