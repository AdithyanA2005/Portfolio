"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    index: "01",
    title: "Tally Attendance Tracker",
    type: "Mobile Application",
    stack: ["Flutter", "Dart"],
    year: "2026",
    description:
      "Smart attendance tracking app with anomaly detection. Tracks classes, predicts outcomes, and automatically identifies attendance errors — built end-to-end with Flutter.",
    link: "https://github.com/AdithyanA2005/tally-attendance-tracker",
  },
  {
    index: "02",
    title: "Kanban Board",
    type: "Web Application",
    stack: ["Next.js", "TypeScript", "Supabase"],
    year: "2024",
    description:
      "A full-featured todo and task management app with a Kanban-style board. Built with Next.js and TypeScript, with Supabase as the backend for real-time updates.",
    link: "https://github.com/AdithyanA2005/TodoList_Kanban_Board_NextJs",
  },
  {
    index: "03",
    title: "Coder Codes",
    type: "Documentation Site",
    stack: ["Next.js", "MDX", "React"],
    year: "2024",
    description:
      "A personal documentation website built to catalogue all my BTech Computer Science lab experiments in a clean, searchable, and well-structured format.",
    link: "https://github.com/AdithyanA2005/coder-codes",
  },
];

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 bg-white w-full relative z-20">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-24 border-b border-stone-200 pb-12">
          <h2 className="text-xl md:text-2xl font-medium tracking-tight uppercase text-stone-400">
            Selected Works
          </h2>
          <span className="text-stone-400 font-mono text-sm">({projects.length})</span>
        </div>

        {/* Project List */}
        <div className="flex flex-col">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-stone-200 py-10 md:py-14 transition-colors duration-500 hover:bg-stone-50 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Top row: number, title, meta */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 px-4 md:px-8">
                  <div className="flex items-baseline gap-4 md:gap-8 flex-1 min-w-0">
                    <span className="text-stone-400 font-mono text-sm shrink-0 hidden md:block">
                      {project.index}
                    </span>
                    <h3
                      className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#0a0a0a] group-hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase leading-tight"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-1 shrink-0 px-0 md:px-0 text-stone-500 text-sm md:text-base">
                    <span className="font-medium">{project.type}</span>
                    <span className="font-mono text-stone-400">{project.year}</span>
                  </div>
                </div>

                {/* Expandable content on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 px-4 md:px-8 md:pl-[calc(2rem+2.5rem+2rem)] flex flex-col md:flex-row md:items-end justify-between gap-6">
                        {/* Description */}
                        <p className="text-stone-500 text-base md:text-lg max-w-2xl leading-relaxed">
                          {project.description}
                        </p>

                        {/* Stack tags + Arrow */}
                        <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
                          <div className="flex flex-wrap gap-2 justify-end">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-full border border-stone-300 text-stone-600 text-xs font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-[#0a0a0a] font-semibold text-sm uppercase tracking-wider">
                            <span>View on GitHub</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
