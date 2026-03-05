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
    <section
      id="projects"
      className="py-32 w-full relative z-20 transition-colors duration-300"
      style={{ background: "var(--background)" }}
    >
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div
          className="flex justify-between items-end mb-24 border-b pb-12"
          style={{ borderColor: "var(--border)" }}
        >
          <h2 className="text-xl md:text-2xl font-medium tracking-tight uppercase" style={{ color: "var(--muted)" }}>
            Selected Works
          </h2>
          <span className="font-mono text-sm" style={{ color: "var(--muted-light)" }}>
            ({projects.length})
          </span>
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
                className="group block border-b py-10 md:py-14 transition-all duration-500 cursor-pointer"
                style={{
                  borderColor: "var(--border)",
                  background: isHovered ? "var(--hover-bg, rgba(128,128,128,0.05))" : "transparent",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 px-4 md:px-8">
                  <div className="flex items-baseline gap-4 md:gap-8 flex-1 min-w-0">
                    <span className="font-mono text-sm shrink-0 hidden md:block" style={{ color: "var(--muted-light)" }}>
                      {project.index}
                    </span>
                    <h3
                      className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter group-hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] uppercase leading-tight"
                      style={{ color: "var(--foreground)" }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-1 shrink-0 text-sm md:text-base" style={{ color: "var(--muted)" }}>
                    <span className="font-medium">{project.type}</span>
                    <span className="font-mono" style={{ color: "var(--muted-light)" }}>{project.year}</span>
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
                        <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
                          {project.description}
                        </p>

                        <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
                          <div className="flex flex-wrap gap-2 justify-end">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-full border text-xs font-mono"
                                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div
                            className="flex items-center gap-2 font-semibold text-sm uppercase tracking-wider"
                            style={{ color: "var(--foreground)" }}
                          >
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
