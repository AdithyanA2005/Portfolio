import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavLink } from "@/utils/navigation/typings";

type Props = {
  links: NavLink[];
};

export default function HomeNavLinks({ links }: Props) {
  return (
    <motion.nav
      initial={{ marginTop: 200, opacity: 0 }}
      whileInView={{ marginTop: 12, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex gap-2 text-center flex-wrap md:gap-4 max-w-screen-sm justify-evenly"
    >
      {links.map((navLink) => (
        <Link
          key={navLink.url}
          href={navLink.url}
          className="uppercase text-xs first-letter:text-[1rem] first-letter:font-bold px-3 py-1.5 rounded-xl tracking-widest hover:text-gray-300 focus:text-gray-300 text-gray-400 font-medium outline-none hover:ring hover:ring-sky-500 focus-visible:ring focus-visible:animate-bounce focus-visible:ring-yellow-500 transition-all"
        >
          {navLink.title}
        </Link>
      ))}
    </motion.nav>
  );
}
