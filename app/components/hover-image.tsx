"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface HoverImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  buttonText?: string;
  buttonIcon?: LucideIcon;
  onButtonClick?: () => void;
  className?: string;
}

const HoverImage = ({
  src,
  alt,
  width,
  height,
  buttonText,
  buttonIcon: ButtonIcon,
  onButtonClick,
  className = "",
}: HoverImageProps) => {
  return (
    <div className={`group relative overflow-hidden rounded-3xl ${className}`}>
      <div className="transition-transform duration-500 group-hover:scale-110">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full scale-105 object-cover object-center"
        />
      </div>

      {buttonText && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <Button
            variant="outline"
            className="w-[150px] text-white transition-transform hover:scale-105"
            size="lg"
            onClick={onButtonClick}
          >
            {ButtonIcon && <ButtonIcon className="h-4 w-4" />}
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default HoverImage;
