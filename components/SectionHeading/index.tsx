import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
};

export default function SectionHeading({ title }: Props) {
  return (
    <motion.h1
      initial={{y: "100%", opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1}}
      className="z-[inherit] pt-4 pb-5 lg:pt-5 lg:pb-6 uppercase tracking-widest font-medium first-letter:text-2xl text-lg lg:first-letter:text-3xl lg:text-2xl text-gray-400 first-letter:text-yellow-500"
    >
      {title}
    </motion.h1>
  );
};
