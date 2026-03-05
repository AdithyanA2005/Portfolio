"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax subtle text effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const skills = [
    { category: "Languages & Core", items: "JavaScript, TypeScript, Python, Java, C" },
    { category: "Frameworks & Dev", items: "React.js, Next.js, Node.js, Vite" },
    { category: "Backend & Systems", items: "PostgreSQL, MongoDB, Supabase, Firebase, Docker, Git, Linux/Bash" },
    { category: "Spoken", items: "English, Malayalam, Hindi" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 md:py-48 relative bg-white z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Massive Statement */}
          <div className="lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tighter text-[#0a0a0a] leading-[1.1] uppercase mix-blend-difference"
            >
              Bridging the gap between <span className="text-stone-400">exceptional design</span> & flawless engineering.
            </motion.h2>

            <motion.div 
              style={{ y }}
              className="mt-16 md:mt-24 max-w-2xl"
            >
              <p className="text-stone-600 text-xl md:text-2xl leading-relaxed mb-8 font-medium tracking-tight">
                Currently pursuing my degree in Computer Science, my approach is rooted in the belief that code should be as beautiful as the interface it powers.
              </p>
              <p className="text-stone-500 text-lg leading-relaxed">
                I specialize in crafting high-end digital experiences. From immersive interactions to robust, scalable backend architectures, I bring concepts to life through meticulous attention to detail and an uncompromising standard for quality.
              </p>
            </motion.div>
          </div>
          
          {/* Right Column: Skills & Experience Lists */}
          <div className="lg:col-span-3 lg:col-start-10 flex flex-col gap-16 pt-2">
            
            {/* Experience Stats */}
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-6xl font-black tracking-tighter text-[#0a0a0a] mb-2 uppercase">B.Tech</div>
              <div className="text-stone-400 uppercase tracking-widest text-xs font-bold font-mono">CS Student</div>
            </motion.div>

            {/* Editorial Skills List */}
            <div className="flex flex-col gap-10">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <h4 className="border-b border-stone-200 pb-3 mb-4 text-[#0a0a0a] font-bold uppercase tracking-widest text-sm flex justify-between">
                    {skill.category}
                    <span className="text-stone-300 font-mono">0{index + 1}</span>
                  </h4>
                  <p className="text-stone-500 text-base leading-relaxed group-hover:text-stone-900 transition-colors duration-300">
                    {skill.items}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
