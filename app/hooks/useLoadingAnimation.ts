import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export const useLoadingAnimation = () => {
  const [showLoading, setShowLoading] = useState(true);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadingRef.current) {
      gsap.set(".loading-letter", {
        yPercent: 100,
      });

      gsap.set(".spinner", {
        yPercent: 50,
        opacity: 0,
      });

      const tl = gsap.timeline();

      tl.to(".loading-letter", {
        yPercent: 0,
        opacity: 1,
        stagger: {
          amount: 0.1,
          from: "center",
        },
        duration: 1,
        ease: "power2.out",
      })
        .to(".spinner", {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          delay: -0.5,
          ease: "power2.out",
        })
        .to(".loading-letter", {
          yPercent: -100,
          duration: 1,
          delay: 0.5,
          stagger: {
            amount: 0.1,
            from: "center",
          },
          ease: "power2.inOut",
        })
        .to(".spinner", {
          yPercent: -50,
          opacity: 0,
          duration: 1,
          delay: -1.5,
          ease: "power2.inOut",
        })
        .to(loadingRef.current, {
          yPercent: -100,
          duration: 1.2,
          delay: -0.5,
          ease: "power2.inOut",
          onComplete: () => {
            setShowLoading(false);
          },
        });
    }
  }, []);

  return { showLoading, loadingRef };
};
