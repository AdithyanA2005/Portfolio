"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Water-like colors for the trail (blues and teals)
    const colors = ["#A1C4FD", "#C2E9FB", "#84fab0", "#8fd3f4"];
    
    let particles: { x: number; y: number; size: number; life: number; color: string; vx: number; vy: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resize);
    resize();

    let mouse = { x: 0, y: 0 };
    let lastMouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      lastMouse = { x: mouse.x, y: mouse.y };
      mouse = { x: e.clientX, y: e.clientY };

      const distance = Math.hypot(mouse.x - lastMouse.x, mouse.y - lastMouse.y);
      const steps = Math.max(1, Math.floor(distance / 4));

      for (let i = 0; i < steps; i++) {
        const x = lastMouse.x + (mouse.x - lastMouse.x) * (i / steps);
        const y = lastMouse.y + (mouse.y - lastMouse.y) * (i / steps);
        
        particles.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          size: Math.random() * 15 + 10,
          life: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        const currentSize = Math.max(0, p.size * p.life);
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        
        // Use global composite operation for water blending
        ctx.globalCompositeOperation = "multiply";
        ctx.globalAlpha = p.life * 0.5;
        ctx.fill();
        
        // update particle
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.015; // fade rate
        p.size *= 0.98; // shrink
      }
      
      ctx.globalCompositeOperation = "source-over"; // reset
      ctx.globalAlpha = 1;
      
      particles = particles.filter(p => p.life > 0.05);
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 mix-blend-multiply"
    />
  );
}
