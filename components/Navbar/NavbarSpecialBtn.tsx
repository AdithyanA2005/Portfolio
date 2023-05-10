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
        className="hidden md:block text-sm uppercase hover:scale-110 transition-all first-letter:text-xl tracking-wider px-5 py-2 font-bold text-yellow-500 hover:text-yellow-400 rounded-full outline-none focus:ring-1 ring-yellow-500"
      >
        {text}
      </Link>
    </motion.span>
  );
};
