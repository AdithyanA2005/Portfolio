import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavLink } from "@/utils/navigation/typings";

type Props = {
  links: NavLink[];
};

export default function NavbarLinks({ links }: Props) {
  return (
    <motion.ul
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex gap-1 sm:gap-6 justify-between items-center h-full px-1 overflow-x-auto"
    >
      {links.map((navLink) => (
        <li key={navLink.url} >
          <Link href={navLink.url} className="px-2.5 py-2 rounded-lg text-xs uppercase tracking-widest text-gray-300 hover:text-yellow-500 font-semibold ease transition-all outline-none hover:ring hover:ring-yellow-500 focus-visible:ring focus-visible:animate-bounce focus-visible:ring-yellow-500">
            {navLink.title}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};
