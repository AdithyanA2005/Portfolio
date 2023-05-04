import React from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;
};

export default function Description({ text }: Props) {
  return (
    <motion.p
      initial={{ x: 150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="md:text-lg overflow-y-auto text-gray-200 leading-7 md:leading-8 tracking-wider"
    >
      {text}
    </motion.p>
  );
};
