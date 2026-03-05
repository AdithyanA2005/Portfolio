"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
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

  const textReveal = {
    hidden: { y: "120%", rotate: 2 },
    show: {
      y: "0%",
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
        mass: 1.5,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden transition-colors duration-300"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-6 w-full max-w-[1400px] flex flex-col justify-center relative z-10"
      >
        {/* Editorial Typography Lockup */}
        <div
          className="flex flex-col uppercase font-black tracking-tighter leading-[0.85] text-[11vw] md:text-[7rem] lg:text-[10rem] xl:text-[13rem] w-full mix-blend-difference"
          style={{ color: "var(--foreground)" }}
        >
          <div className="overflow-hidden flex justify-start">
            <motion.span variants={textReveal} className="origin-bottom-left pb-4 whitespace-nowrap">
              Full-Stack
            </motion.span>
          </div>

          <div className="overflow-hidden flex justify-end">
            <motion.span
              variants={textReveal}
              className="origin-bottom-left pb-4 whitespace-nowrap"
              style={{ color: "var(--muted)" }}
            >
              Software
            </motion.span>
          </div>

          <div className="overflow-hidden flex items-center justify-between gap-8 mt-4 md:mt-0 pb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
              className="h-[0.5vw] md:h-2 origin-left hidden sm:block"
              style={{ background: "var(--foreground)" }}
            />
            <motion.span variants={textReveal} className="origin-bottom-left pl-4 whitespace-nowrap">
              Engineer
            </motion.span>
          </div>
        </div>

        {/* Handcrafted Subtext */}
        <div
          className="mt-12 md:mt-24 grid md:grid-cols-2 gap-8 md:gap-24 font-medium text-lg md:text-xl leading-relaxed max-w-4xl tracking-tight"
          style={{ color: "var(--muted)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            I&apos;m Adithyan A — a full-stack engineer and computer science enthusiast. I love turning complex
            problems into elegant, intuitive digital solutions.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            When I&apos;m not configuring my Linux terminal or exploring open-source, I&apos;m building scalable
            web applications with React, Next.js, and PostgreSQL.
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
