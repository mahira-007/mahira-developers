"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Respect system reduced-motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.3, // elegant, slightly slower deceleration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential decay
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Save instance globally to allow external control (modals, navigations)
    window.lenis = lenis;

    // Handle hash links smooth scrolling using Lenis API
    const handleHashClick = (e) => {
      const anchor = e.target.closest("a");
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          e.preventDefault();
          // Scroll with a slightly slower duration for luxury feel
          lenis.scrollTo(targetElement, { offset: -20, duration: 1.6 });
        }
      }
    };
    document.addEventListener("click", handleHashClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      window.lenis = null;
      document.removeEventListener("click", handleHashClick);
    };
  }, []);

  return <>{children}</>;
}
