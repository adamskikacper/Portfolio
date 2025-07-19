"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

interface UseTimelineAnimationProps {
  timelineRef: React.RefObject<HTMLDivElement>;
  progressLineRef: React.RefObject<HTMLDivElement>;
  markersRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
  tickIconsRef: React.MutableRefObject<(SVGSVGElement | null)[]>;
  projectCount: number;
  sectionId?: string;
  onProjectTrigger?: (index: number, isActive: boolean) => void;
}

const useTimelineAnimation = ({
  timelineRef,
  progressLineRef,
  markersRef,
  tickIconsRef,
  projectCount,
  sectionId = "projects",
  onProjectTrigger,
}: UseTimelineAnimationProps) => {
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

          markersRef.current.forEach((marker, index) => {
            if (marker) {
              const markerThreshold = (index + 0.1) / projectCount;
              const tickIcon = tickIconsRef.current[index];

              if (self.progress >= markerThreshold && !marker.classList.contains("active")) {
                marker.classList.add("active");
                gsap.to(marker, {
                  scale: 2.2,
                  opacity: 1,
                  backgroundColor: "#EAB30E",
                  duration: 0.5,
                  ease: "bounce.out",
                });
                if (tickIcon) {
                  const iconTl = gsap.timeline();
                  iconTl
                    .fromTo(
                      tickIcon,
                      {
                        opacity: 0,
                        scale: 0,
                      },
                      {
                        opacity: 1,
                        ease: "bounce.out",
                        duration: 0.5,
                      }
                    )
                    .to(tickIcon, {
                      scale: 1.2,
                      duration: 0.3,
                      ease: "power2.out",
                    });
                }
                if (onProjectTrigger) {
                  onProjectTrigger(index, true);
                }
              } else if (self.progress < markerThreshold && marker.classList.contains("active")) {
                marker.classList.remove("active");
                gsap.to(marker, {
                  scale: 1,
                  opacity: 0,
                  backgroundColor: "#6B7280",
                  duration: 0.3,
                  ease: "power1.out",
                });
                if (tickIcon) {
                  gsap.to(tickIcon, {
                    opacity: 0,
                  });
                }
                if (onProjectTrigger) {
                  onProjectTrigger(index, false);
                }
              }
            }
          });
        },
      },
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
  }, [timelineRef, progressLineRef, markersRef, tickIconsRef, projectCount, sectionId, onProjectTrigger]);
};

export default useTimelineAnimation;