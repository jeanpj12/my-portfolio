"use client";

import { useEffect, useState } from "react";

export const MouseFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const updateSmoothPosition = () => {
      setSmoothPosition((prev) => {
        const easing = 0.1; // Ajuste para suavidade
        return {
          x: prev.x + (cursorPosition.x - prev.x) * easing,
          y: prev.y + (cursorPosition.y - prev.y) * easing,
        };
      });

      animationFrameId = requestAnimationFrame(updateSmoothPosition);
    };

    animationFrameId = requestAnimationFrame(updateSmoothPosition);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorPosition]);

  return (
    <div
      className="pointer-events-none fixed top-[-270] left-[-270] w-150 h-150 bg-emerald-700 rounded-full z-[-1] transition-transform duration-75 blur-[250px]"
      style={{
        transform: `translate(${smoothPosition.x - 12}px, ${smoothPosition.y - 12}px)`,
      }}
    />
  );
};
