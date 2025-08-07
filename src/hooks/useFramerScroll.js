"use client";

import { useAnimation } from "framer-motion";
import { useCallback } from "react";

export const useFramerScroll = () => {
  const controls = useAnimation();

  const scrollToSection = useCallback(async (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const navbarHeight = 100;
    const targetPosition = element.offsetTop - navbarHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = Math.min(Math.abs(distance) / 1000, 2); // Max 2 seconds

    // Custom easing animation
    let start = null;

    const animateScroll = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);

      // Easing function (easeInOutCubic)
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const currentPosition = startPosition + distance * ease;
      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  return { scrollToSection, controls };
};
