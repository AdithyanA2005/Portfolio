"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const skills = [
    "JavaScript/TypeScript", "React & Next.js", "Tailwind CSS", 
    "Framer Motion", "Node.js", "WebGL/Canvas", "UI/UX Design", "Performance Optimization"
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Designing with purpose, <br className="hidden md:block"/> building with passion.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              My journey in development is driven by a simple philosophy: code should be as beautiful as the interface it powers. I specialize in bridging the gap between exceptional design and flawless engineering.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              With a keen eye for aesthetics and a deep understanding of modern web technologies, I bring concepts to life through smooth animations, intuitive layouts, and robust architectures.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                  className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-medium border border-stone-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 15 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-stone-200 rounded-[2rem] overflow-hidden relative shadow-2xl shadow-blue-500/10 border border-stone-200/50 group">
              {/* Abstract decorative image background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-10 group-hover:scale-105 transition-transform duration-700">
                <div className="w-full h-full border border-blue-200/50 rounded-3xl relative overflow-hidden glass mix-blend-multiply flex items-center justify-center">
                   <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-60 mix-blend-multiply group-hover:translate-x-10 transition-transform duration-1000"></div>
                   <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-60 mix-blend-multiply group-hover:-translate-x-10 transition-transform duration-1000"></div>
                   <h3 className="text-4xl font-bold text-stone-300 opacity-50 tracking-tighter">Code+Design</h3>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 glass px-6 py-5 rounded-3xl shadow-xl border border-white/60 flex items-center gap-4 bg-white/80 backdrop-blur-xl"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                5+
              </div>
              <div>
                <div className="font-bold text-stone-900 text-lg">Years</div>
                <div className="text-sm text-stone-500 font-medium">Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
