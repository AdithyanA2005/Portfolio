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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "py-4 glass shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-6xl">
        <Link href="/">
          <span className="text-xl font-bold tracking-tighter cursor-pointer relative z-50">
            Adithya<span className="text-blue-600">.</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center font-medium text-sm text-stone-600 relative z-50">
          {["About", "Projects", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
              {item}
            </Link>
          ))}
          <a href="#contact" className="px-5 py-2.5 bg-stone-900 text-white rounded-full hover:bg-blue-600 transition-colors shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 transform duration-200">
            Let's Talk
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
