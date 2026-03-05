"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
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
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 border-b ${
        scrolled
          ? "bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-stone-200/60 dark:border-stone-800/60 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-[1400px]">
        {/* Logo — always clearly visible */}
        <Link href="/">
          <span
            className="text-xl md:text-2xl font-black tracking-tighter uppercase cursor-pointer hover:opacity-60 transition-opacity duration-300"
            style={{ color: "var(--foreground)" }}
          >
            Adithyan A<span style={{ color: "var(--muted)" }}>.</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 items-center font-bold text-xs tracking-widest uppercase">
          {["About", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative overflow-hidden"
              style={{ color: "var(--foreground)" }}
            >
              <div className="transition-transform duration-300 group-hover:-translate-y-full">
                {item}
              </div>
              <div
                className="absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                style={{ color: "var(--muted)" }}
              >
                {item}
              </div>
            </Link>
          ))}

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="group relative p-2 rounded-full border transition-colors duration-300"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
                background: "transparent",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 transition-transform group-hover:rotate-12" />
              ) : (
                <Moon className="w-4 h-4 transition-transform group-hover:-rotate-12" />
              )}
            </button>
          )}

          {/* Available button */}
          <a
            href="#contact"
            className="group relative px-6 py-3 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 duration-300 ml-4"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available
            </span>
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
