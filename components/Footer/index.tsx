import React from "react";
import SectionWrapper from "../SectionWrapper";
import Link from "next/link";
import { navLinks } from "@/utils/navigation";

type Props = {};

export default function Footer({ }: Props) {
  return (
    <SectionWrapper id="footer">
      <footer className="absolute bottom-0 w-full max-w-7xl left-1/2 -translate-x-1/2 rounded-lg bg-stone-800">
        <div className="w-full p-4 md:py-8">

          <div className="flex flex-col items-center gap-4">
            <nav className="text-sm font-medium text-gray-400">
              <ul className="flex flex-wrap items-center gap-8">
                {navLinks.map((navLink) => (
                  <li><Link href={navLink.url}>{navLink.title}</Link></li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <hr className="border-gray-700 sm:mx-auto my-6 lg:my-8" />
            <span className="block text-sm text-center text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
};
