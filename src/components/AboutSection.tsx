"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const skills = [
    { category: "Languages & Core", items: "JavaScript, TypeScript, Python, Java, C" },
    { category: "Frameworks & Dev", items: "React.js, Next.js, Node.js, Vite" },
    { category: "Backend & Systems", items: "PostgreSQL, MongoDB, Supabase, Firebase, Docker, Git, Linux/Bash" },
    { category: "Spoken", items: "English, Malayalam, Hindi" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 md:py-48 relative z-20 overflow-hidden transition-colors duration-300"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tighter leading-[1.1] uppercase"
              style={{ color: "var(--foreground)" }}
            >
              Bridging the gap between{" "}
              <span style={{ color: "var(--muted)" }}>exceptional design</span> &amp; flawless engineering.
            </motion.h2>

            <motion.div style={{ y }} className="mt-16 md:mt-24 max-w-2xl">
              <p className="text-xl md:text-2xl leading-relaxed mb-8 font-medium tracking-tight" style={{ color: "var(--muted)" }}>
                Currently pursuing my degree in Computer Science, my approach is rooted in the belief that code
                should be as beautiful as the interface it powers.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                I specialize in crafting high-end digital experiences. From immersive interactions to robust,
                scalable backend architectures, I bring concepts to life through meticulous attention to detail
                and an uncompromising standard for quality.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 lg:col-start-10 flex flex-col gap-16 pt-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="text-6xl font-black tracking-tighter mb-2 uppercase"
                style={{ color: "var(--foreground)" }}
              >
                B.Tech
              </div>
              <div className="uppercase tracking-widest text-xs font-bold font-mono" style={{ color: "var(--muted)" }}>
                CS Student
              </div>
            </motion.div>

            <div className="flex flex-col gap-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <h4
                    className="border-b pb-3 mb-4 font-bold uppercase tracking-widest text-sm flex justify-between transition-colors"
                    style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
                  >
                    {skill.category}
                    <span className="font-mono" style={{ color: "var(--muted-light)" }}>
                      0{index + 1}
                    </span>
                  </h4>
                  <p
                    className="text-base leading-relaxed transition-colors duration-300"
                    style={{ color: "var(--muted)" }}
                  >
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
