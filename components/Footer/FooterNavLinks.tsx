import React from "react";
import Link from "next/link";
import { NavLink } from "@/utils/navigation/typings";

type Props = {
  navLinks: NavLink[];
};

export default function FooterNavLinks({ navLinks }: Props) {
  return (
    <nav className="flex flex-col items-center gap-4">
      <ul className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
        {navLinks.map((navLink) => (
          <li key={navLink.url} className="text-sm font-medium text-gray-400">
            <Link href={navLink.url}>
              {navLink.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
