"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 12 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-[40%] w-[800px] h-[800px] bg-blue-100 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 right-[10%] -z-10 w-[400px] h-[400px] bg-purple-100 rounded-full blur-[90px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] -z-10 w-[300px] h-[300px] bg-cyan-100 rounded-full blur-[80px] opacity-40 pointer-events-none" />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-6 max-w-4xl text-center relative z-10"
      >
        <motion.div variants={item} className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/50 text-blue-600 font-medium text-sm shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          Available for new opportunities
        </motion.div>
        
        <motion.h1 variants={item} className="text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tighter text-stone-900 mb-6 leading-[1.05]">
          Crafting Digital <br className="hidden md:block"/>
          <span className="text-gradient drop-shadow-sm">Experiences.</span>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-2xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm a creative developer passionate about building highly interactive, beautiful, and performant web applications.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-blue-600 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.6)] hover:-translate-y-1">
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#about" className="px-8 py-4 bg-white/70 backdrop-blur-sm text-stone-900 rounded-full font-medium border border-stone-200 hover:border-stone-300 hover:bg-white transition-all duration-300">
            Learn More
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
