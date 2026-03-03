"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-stone-900 text-white rounded-[3rem] mx-4 mb-4 md:mx-6 md:mb-6 mt-16 md:mt-32 shadow-2xl">
      {/* Glows */}
      <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[200px] opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/80 font-medium text-sm mb-8">
            Let's connect
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tighter mb-8 leading-[1.1]">
            Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">extraordinary?</span>
          </h2>
          <p className="text-stone-400 text-xl mb-16 md:text-2xl max-w-2xl mx-auto font-light">
            I'm currently available for freelance work and open to new opportunities. Let's collaborate.
          </p>
          <a href="mailto:hello@example.com" className="group inline-flex items-center gap-2 text-3xl md:text-5xl font-light hover:text-white transition-colors pb-2 relative">
            hello@example.com 
            <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20 group-hover:bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"></span>
          </a>
        </motion.div>
        
        <div className="mt-40 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-stone-400 text-sm gap-6 font-medium">
          <p>© {new Date().getFullYear()} Adithya. All rights reserved.</p>
          <div className="flex gap-8">
            {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((social) => (
               <a key={social} href="#" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">
                 {social}
               </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
