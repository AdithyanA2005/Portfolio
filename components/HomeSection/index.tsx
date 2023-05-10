import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import SectionWrapper from "../SectionWrapper";
import { navLinks } from "@/utils/navigation";

type Props = {
  role: string;
  imgSrc: string;
  typerTexts: string[];
};

export default function HomeSection({ role, imgSrc, typerTexts }: Props) {
  const homeNavLinks = navLinks.filter(link => link.title !== "Home");
  const [typerText] = useTypewriter({ words: typerTexts, loop: true, delaySpeed: 2000 });

  return (
    <SectionWrapper id="home" xPadding={false}>
      <div className="h-full overflow-hidden flex items-center justify-center">
        <BackgroundCircles />

        <div className="absolute flex flex-col gap-2 justify-center items-center rounded-full">
          {/* Avatar */}
          {/* TODO: Convert img to next/image */}
          {/* <Image src={imgSrc} alt="hell" width="192" height="192" /> */}
          <img className="rounded-full h-48 w-48" src={imgSrc} />

          {/* Job title */}
          <h2 className="text-[1rem] text-center uppercase tracking-[0.3rem] text-gray-400">{role}</h2>

          {/* Typewriter text animation */}
          <h1 className="text-4xl text-center text-yellow-500">
            <span>{typerText}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>

          {/* Nav Links */}
          <motion.nav 
            initial={{ marginTop: 200, opacity: 0}}
            whileInView={ {marginTop: 12, opacity: 1 }}
            transition={{duration: 1}}
            className="flex gap-2 text-center flex-wrap md:gap-4 max-w-screen-sm justify-evenly"
          >
            {homeNavLinks.map((navLink) => (
              <Link 
                key={navLink.url} 
                href={navLink.url} 
                className="uppercase text-xs first-letter:text-[1rem] first-letter:font-bold px-3 py-2 rounded-2xl tracking-widest hover:text-gray-300 focus:text-gray-300 text-gray-400 font-medium outline-none hover:ring hover:ring-indigo-500 focus-visible:ring focus-visible:animate-bounce focus-visible:ring-yellow-500 transition-all">
                {navLink.title}
              </Link>
            ))}
          </motion.nav>
        </div>
      </div>
    </SectionWrapper>
  );
};
