"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface HoverImageProps {
  imgSrc: string;
  videoSrc: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  buttonText?: string;
  buttonIcon?: LucideIcon;
  type: "image" | "video";
  onButtonClick?: () => void;
  className?: string;
}

const HoverImage = ({
  imgSrc,
  videoSrc,
  alt,
  width,
  height,
  buttonText,
  buttonIcon: ButtonIcon,
  type,
  onButtonClick,
  className = "",
}: HoverImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden ${className} rounded-3xl shadow-xl`}
      onMouseEnter={() => type === "video" && setIsHovered(true)}
      onMouseLeave={() => type === "video" && setIsHovered(false)}
    >
      <div className="transition-transform duration-500">
        {type === "image" ? (
          <Image
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            className="h-auto w-full scale-105 object-cover object-center"
          />
        ) : (
          <div className="relative">
            <Image
              src={imgSrc}
              alt={alt}
              width={width}
              height={height}
              className={`h-auto w-full scale-105 object-cover object-center transition-opacity duration-300 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>

      {buttonText && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <Button
            variant="outline"
            className="w-[150px] text-white transition-transform hover:scale-105"
            size="lg"
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
