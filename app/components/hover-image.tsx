"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface HoverImageProps {
  imgSrc: string;
  videoSrc: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  buttonText?: string;
  buttonIcon?: LucideIcon;
  type: "image" | "video";
  onButtonClick?: () => void;
  className?: string;
  aspectRatio?: string;
}

const HoverImage = ({
  imgSrc,
  videoSrc,
  alt,
  width = 1000,
  height = 1000,
  buttonText,
  buttonIcon: ButtonIcon,
  type,
  onButtonClick,
  className = "",
  aspectRatio = "aspect-[16/9]",
}: HoverImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect to handle video playback based on hover state
  useEffect(() => {
    if (!videoRef.current || type !== "video") return;

    if (isHovered) {
      if (!videoLoaded && videoSrc) {
        videoRef.current.src = videoSrc;
        videoRef.current.load();
        setVideoLoaded(true);
      }

      // Play video when hovered
      const playPromise = videoRef.current.play();

      // Handle the play promise to avoid uncaught promise errors
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Error playing video:", error);
        });
      }
    } else {
      // Pause video when not hovered
      if (videoRef.current.readyState > 2) {
        // Check if video is loaded
        videoRef.current.pause();
      }
    }
  }, [isHovered, videoSrc, videoLoaded, type]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`group relative ${className} ${aspectRatio} w-full`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute left-0 top-0 z-0 h-[500px] w-[500px] rotate-180"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/assets/images/circles.svg"
              fill
              sizes="500px"
              alt="Decorative circles"
              style={{ objectFit: "contain" }}
              className="translate-x-[-50%] translate-y-[-50%]"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {type === "image" ? (
        <div className="h-full w-full overflow-hidden">
          <Image
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      ) : (
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            className={`h-full w-full object-cover transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              muted
              playsInline
              loop
            />
          </div>
        </div>
      )}

      {buttonText && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <Button
            variant="outline"
            className="w-[150px] text-white transition-transform hover:scale-105"
            size={windowWidth < 640 ? "sm" : "lg"}
            onClick={onButtonClick}
          >
            {ButtonIcon && <ButtonIcon className="mr-1 h-4 w-4" />}
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default HoverImage;
