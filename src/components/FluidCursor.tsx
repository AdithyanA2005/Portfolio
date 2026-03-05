"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

// Dynamically import the fluid simulation to avoid SSR issues with WebGL
// @ts-expect-error: No type definitions available for fluid-simulation-react
const Fluid: any = dynamic(() => import("fluid-simulation-react"), {
  ssr: false,
});

export default function FluidCursor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Forward the window mouse event to the canvas created by fluid-simulation-react
      if (!containerRef.current) return;
      const canvas = containerRef.current.querySelector("canvas");
      if (canvas) {
        // Create and dispatch a new mouse event to the canvas
        const canvasEvent = new MouseEvent("mousemove", {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: true,
          cancelable: true,
        });
        canvas.dispatchEvent(canvasEvent);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-difference"
    >
      <Fluid
        color={[[0.5, 0.5, 0.5], [0.8, 0.8, 0.8], [0.6, 0.6, 0.6]]} // Gray/White base so 'difference' mode makes it look dark and smoky
        config={{
          textureDownsample: 0, // 0 For max resolution/sharpness (default 1)
          densityDissipation: 0.85, // Extremely fast fade to prevent hazy clouds from forming
          velocityDissipation: 0.98,
          pressureDissipation: 0.8,
          pressureIterations: 25,
          curl: 50,
          splatRadius: 0.0005, // Extremely thin radius for an 'ink' pen-like drag
        }}
      />
    </div>
  );
}
