"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  // Animation variants for the staggering text reveal
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Mask reveal animation (words slide up from behind a hidden overflow box)
  const textReveal = {
    hidden: { y: "120%", rotate: 2 },
    show: { 
      y: "0%", 
      rotate: 0,
      transition: { 
        type: "spring" as const, 
        stiffness: 70, 
        damping: 15,
        mass: 1.5
      } 
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-6 w-full max-w-[1400px] flex flex-col justify-center relative z-10"
      >
        {/* Editorial Typography Lockup */}
        <div className="flex flex-col uppercase font-black text-[#0a0a0a] tracking-tighter leading-[0.85] text-[11vw] md:text-[7rem] lg:text-[10rem] xl:text-[13rem] w-full mix-blend-difference">
          
          <div className="overflow-hidden flex justify-start">
            <motion.span variants={textReveal} className="origin-bottom-left pb-4 whitespace-nowrap">Full-Stack</motion.span>
          </div>
          
          <div className="overflow-hidden flex justify-end">
             <motion.span variants={textReveal} className="origin-bottom-left pb-4 text-stone-300 whitespace-nowrap">Software</motion.span>
          </div>
          
          <div className="overflow-hidden flex items-center justify-between gap-8 mt-4 md:mt-0 pb-4">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
               className="h-[0.5vw] md:h-2 bg-[#0a0a0a] origin-left hidden sm:block"
             />
             <motion.span variants={textReveal} className="origin-bottom-left pl-4 whitespace-nowrap">Engineer</motion.span>
          </div>

        </div>

        {/* Handcrafted Subtext */}
        <div className="mt-12 md:mt-24 grid md:grid-cols-2 gap-8 md:gap-24 text-stone-500 font-medium text-lg md:text-xl leading-relaxed max-w-4xl tracking-tight">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            I'm Adithyan A — a full-stack engineer and computer science enthusiast. I love turning complex problems into elegant, intuitive digital solutions.
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            When I'm not configuring my Linux terminal or exploring open-source, I'm building scalable web applications with React, Next.js, and PostgreSQL.
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
