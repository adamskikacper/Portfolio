"use client";

import { CheckCircle } from "lucide-react";
import { useRef } from "react";
import useTimelineAnimation from "../hooks/useTimelineAnimation";

interface ScrollTimelineProps {
  projectCount: number;
  sectionId?: string;
  onProjectTrigger?: (index: number, isActive: boolean) => void;
}

const ScrollTimeline = ({
  projectCount,
  sectionId = "projects",
  onProjectTrigger,
}: ScrollTimelineProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<(HTMLDivElement | null)[]>([]);
  const tickIconsRef = useRef<(SVGSVGElement | null)[]>([]);

  useTimelineAnimation({
    timelineRef,
    progressLineRef,
    markersRef,
    tickIconsRef,
    projectCount,
    sectionId,
    onProjectTrigger,
  });

  return (
    <div
      ref={timelineRef}
      className="relative h-full w-2"
      style={{ height: `${projectCount * 100}vh` }}
    >
      <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-background-primary-light dark:bg-background-primary-dark" />

      <div
        ref={progressLineRef}
        className="timeline-gradient absolute left-1/2 top-0 h-full w-2 origin-top -translate-x-1/2 rounded-full"
      />

      {Array.from({ length: projectCount }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            markersRef.current[index] = el;
          }}
          className="border-border-background-primary-light absolute left-1/2 flex h-6 w-6 translate-x-1/2 items-center justify-center rounded-full border-4 bg-gray-100 opacity-0 shadow-md dark:border-background-primary-dark"
          style={{
            top: `${index * 100 + 10}vh`,
            transform: "translateX(-50%)",
          }}
        >
          <CheckCircle
            ref={(el) => {
              tickIconsRef.current[index] = el;
            }}
            className="h-3 w-3 text-black opacity-0 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default ScrollTimeline;
