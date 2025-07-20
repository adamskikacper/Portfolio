import { gsap } from "gsap";
import { useEffect, RefObject } from "react";

interface UseHeaderAnimationProps {
  titleRef: RefObject<HTMLHeadingElement>;
  descriptionRef: RefObject<HTMLParagraphElement>;
  buttonsRef: RefObject<HTMLDivElement>;
  loadingComplete: boolean;
}

export const useHeaderAnimation = ({ 
  titleRef, 
  descriptionRef, 
  buttonsRef, 
  loadingComplete 
}: UseHeaderAnimationProps) => {
  useEffect(() => {
    // Set initial hidden state
    if (titleRef.current) {
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 50,
      });
    }
    if (descriptionRef.current) {
      gsap.set(descriptionRef.current, {
        opacity: 0,
        y: 30,
      });
    }
    if (buttonsRef.current) {
      gsap.set(buttonsRef.current, {
        opacity: 0,
        y: 20,
      });
    }
  }, [titleRef, descriptionRef, buttonsRef]);

  useEffect(() => {
    if (loadingComplete && titleRef.current && descriptionRef.current && buttonsRef.current) {
      const tl = gsap.timeline();
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      })
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.5")
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.3");
    }
  }, [loadingComplete, titleRef, descriptionRef, buttonsRef]);
};