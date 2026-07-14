"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function CursorSpotlight() {
  const shouldReduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, shouldReduceMotion]);

  if (shouldReduceMotion || !isVisible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[49] transition-opacity duration-500"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(197, 168, 93, 0.035), transparent 80%)`,
      }}
    />
  );
}
