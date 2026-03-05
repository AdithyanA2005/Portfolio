"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-stone-200/50 py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-[1400px]">
        {/* Minimalist Logo */}
        <Link href="/">
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase cursor-pointer hover:opacity-70 transition-opacity mix-blend-difference text-white">
            Adithyan A<span className="text-stone-500">.</span>
          </span>
        </Link>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex gap-10 items-center font-bold text-xs tracking-widest uppercase text-stone-900 mix-blend-difference">
          {["About", "Projects", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="group relative overflow-hidden text-white">
              <div className="transition-transform duration-300 group-hover:-translate-y-full">
                {item}
              </div>
              <div className="absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-stone-400">
                {item}
              </div>
            </Link>
          ))}
          
          {/* Custom magnetic-style hover button */}
          <a 
            href="#contact" 
            className="group relative px-6 py-3 bg-white text-[#0a0a0a] rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 duration-300 ml-4 mix-blend-exclusion"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available
            </span>
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
