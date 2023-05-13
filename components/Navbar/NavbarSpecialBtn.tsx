import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  href: string;
  text: string;
  inNewTab: boolean;
};

export default function NavbarSpecialBtn({ href, text, inNewTab }: Props) {
  return (
    <motion.span
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link
        href={href}
        target={inNewTab ? "_blank" : ""}
        className="hidden md:block text-sm uppercase hover:scale-110 transition-all first-letter:text-yellow-400 first-letter:text-lg tracking-wider px-3 py-1 font-bold text-yellow-500 hover:text-yellow-400 rounded-xl outline-none focus:ring ring-yellow-500"
      >
        {text}
      </Link>
    </motion.span>
  );
}
