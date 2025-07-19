"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollTimelineProps {
  projectCount: number;
  sectionId?: string;
  onProjectTrigger?: (index: number) => void;
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

  useEffect(() => {
    if (!timelineRef.current || !progressLineRef.current) return;

    const timeline = timelineRef.current;
    const progressLine = progressLineRef.current;
    const projectsContainer = timeline.parentElement;

    if (!projectsContainer) return;

    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsContainer,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(progressLine, {
            scaleY: self.progress,
            transformOrigin: "top center",
          });
        },
      },
    });

    markersRef.current.forEach((marker, index) => {
      if (marker) {
        const markerPosition = ((index + 0.5) / projectCount) * 100;

        ScrollTrigger.create({
          trigger: projectsContainer,
          start: `${markerPosition}% center`,
          end: `${markerPosition}% center`,
          onEnter: () => {
            const tickIcon = tickIconsRef.current[index];
            gsap.to(marker, {
              scale: 2.2,
              opacity: 1,
              backgroundColor: "#EAB30E",
              duration: 0.5,
              ease: "power1.out",
            });
            if (tickIcon) {
              gsap.to(tickIcon, {
                opacity: 1,
              });
            }

            if (onProjectTrigger) {
              onProjectTrigger(index);
            }
          },
          onLeave: () => {
            const tickIcon = tickIconsRef.current[index];
            if (tickIcon) {
              gsap.to(tickIcon, {
                scale: 1.2,
                ease: "bounce.out",
              });
            }
          },
          onEnterBack: () => {
            const tickIcon = tickIconsRef.current[index];
            gsap.to(marker, {
              scale: 1.2,
              opacity: 0,
              backgroundColor: "#EAB30E",
              duration: 0.3,
              ease: "power1.out",
            });
            if (tickIcon) {
              gsap.to(tickIcon, {
                scale: 1,
              });
            }
          },
        });
      }
    });

    gsap.set(progressLine, { scaleY: 0 });
    gsap.set(markersRef.current, {
      scale: 1,
      backgroundColor: "#6B7280",
    });

    return () => {
      mainTl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === projectsContainer) {
          trigger.kill();
        }
      });
    };
  }, [projectCount, sectionId]);

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
          className="absolute left-1/2 flex h-6 w-6 translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gray-100 opacity-0 shadow-md dark:border-black"
          style={{
            top: `${index * 100 + 50}vh`,
            transform: "translateX(-50%) translateY(-50%)",
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
