"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/link";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  // Mouse position tracking for floating images
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Tally Attendance Tracker",
      type: "Flutter • Dart",
      year: "2024",
      imageColor: "bg-blue-900",
      link: "https://github.com/AdithyanA2005/tally-attendance-tracker"
    },
    {
      title: "Kanban Board",
      type: "Next.js • TypeScript",
      year: "2024",
      imageColor: "bg-purple-900",
      link: "https://github.com/AdithyanA2005/TodoList_Kanban_Board_NextJs"
    },
    {
      title: "Coder Codes",
      type: "MDX • React",
      year: "2024",
      imageColor: "bg-amber-900",
      link: "https://github.com/AdithyanA2005/coder-codes"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-32 bg-white w-full relative z-20">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-24 border-b border-stone-200 pb-12">
          <h2 className="text-xl md:text-2xl font-medium tracking-tight uppercase text-stone-400">Selected Works</h2>
          <span className="text-stone-400 font-mono text-sm">({projects.length})</span>
        </div>

        {/* Project List */}
        <div className="flex flex-col relative">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border-b border-stone-200 py-12 md:py-20 flex flex-col md:flex-row md:items-center justify-between transition-colors duration-500 hover:bg-stone-50 cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              
              {/* Project Title */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 pl-4 md:pl-8">
                 <span className="text-stone-400 font-mono text-sm md:text-base hidden md:block">0{index + 1}</span>
                 <h3 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-[#0a0a0a] group-hover:translate-x-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase">
                   {project.title}
                 </h3>
              </div>
              
              {/* Project Meta */}
              <div className="relative z-10 flex justify-between md:flex-col items-start md:items-end mt-6 md:mt-0 pr-4 md:pr-8 text-stone-500 text-sm md:text-lg font-medium">
                 <span>{project.type}</span>
                 <span className="font-mono">{project.year}</span>
              </div>
              
            </a>
          ))}

          {/* Floating Hover Images (Desktop Only) */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 hidden lg:block overflow-hidden">
             {projects.map((project, index) => {
               const isActive = hoveredProject === index;
               
               // Calculate offset so the image centers on the cursor
               const x = mousePosition.x - 200; // Half of image width
               const y = mousePosition.y - 150; // Half of image height

               return (
                 <motion.div
                   key={`img-${index}`}
                   className={`absolute w-[400px] h-[300px] object-cover rounded-xl shadow-2xl ${project.imageColor} mix-blend-multiply`}
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ 
                     opacity: isActive ? 1 : 0, 
                     scale: isActive ? 1 : 0.8,
                     x: x,
                     y: y
                   }}
                   transition={{ 
                     opacity: { duration: 0.4 },
                     scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                     x: { duration: 0.1, ease: "linear" },
                     y: { duration: 0.1, ease: "linear" }
                   }}
                 />
               );
             })}
          </div>

        </div>
      </div>
    </section>
  );
}
