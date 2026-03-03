"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Reimagined",
      description: "A headless commerce experience built with Next.js and Shopify, featuring high-performance 3D product previews and seamless checkout flows.",
      tags: ["Next.js", "Three.js", "Tailwind", "Shopify API"],
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "bg-blue-500"
    },
    {
      title: "Fintech Dashboard",
      description: "A highly interactive analytics dashboard with real-time data visualization, custom charting, and a comprehensive dark/light mode design system.",
      tags: ["React", "Framer Motion", "D3.js", "TypeScript"],
      color: "from-purple-500/20 to-pink-500/20",
      accent: "bg-purple-500"
    },
    {
      title: "Creative Agency Hub",
      description: "An award-winning portfolio website for a design agency. Built with a focus on buttery smooth scroll animations and typography-led layouts.",
      tags: ["Vue", "GSAP", "Lenis Scroll"],
      color: "from-amber-500/20 to-orange-500/20",
      accent: "bg-amber-500"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-stone-100 w-full relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Featured Work.</h2>
            <p className="text-stone-600 text-lg md:text-xl">A selection of recent projects that showcase my focus on performance, aesthetics, and user experience.</p>
          </div>
          <button className="px-8 py-4 border-2 border-stone-200 rounded-full hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all w-fit font-medium">
            View All Projects
          </button>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              key={index}
              className="group relative bg-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Dynamic hover gradient background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${project.color} transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{project.title}</h3>
                  <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-stone-100 text-stone-600 rounded-full text-sm font-medium border border-stone-100 group-hover:bg-white group-hover:border-stone-200 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-lg hover:shadow-blue-500/20">
                      Live Preview
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-3 border-2 border-stone-200 text-stone-700 rounded-full hover:bg-stone-50 hover:border-stone-300 hover:-translate-y-1 transition-all">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 aspect-[4/3] bg-stone-100 rounded-3xl overflow-hidden relative group-hover:shadow-2xl transition-all duration-700 transform group-hover:scale-[1.02] border border-stone-200/50 flex flex-col">
                  {/* Mock Window frame */}
                  <div className="h-10 bg-stone-200/50 border-b border-stone-200 flex items-center px-4 gap-2 backdrop-blur-sm z-20">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  {/* Decorative placeholder image */}
                  <div className="flex-1 relative bg-stone-50 overflow-hidden group-hover:scale-105 transition-transform duration-1000 ease-out">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-40`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-32 h-32 rounded-full ${project.accent} blur-[60px] opacity-40 group-hover:opacity-60 group-hover:scale-150 transition-all duration-700`} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
