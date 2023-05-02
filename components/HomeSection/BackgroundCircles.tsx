import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1.3, 1.5, 1.1, 1.6, 1],
      }}
      transition={{duration: 2.5}}
      className="relative aspect-square w-full min-w-[670px] max-w-[800px] flex justify-center items-center"
    >
      {/* The ping animated ring */}
      <div className="h-[30%] w-[30%] animate-ping absolute border border-indigo-300 rounded-full" />

      {/* The main rings */}
      <div className="animate-pulse h-[40%] w-[40%] absolute border-2 border-gray-600 rounded-full" />
      <div className="animate-pulse h-[60%] w-[60%] absolute border-2 border-gray-400 rounded-full" />
      <div className="animate-pulse h-[80%] w-[80%] absolute border-2 border-indigo-300 rounded-full" />
      <div className="animate-pulse h-full w-full absolute border-2 border-yellow-500 rounded-full" />
    </motion.div>
  );
};
