import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function DogAndOwner({ }: Props) {
  return (
    <>
      {/* Dog svg */}
      <motion.img
        initial={{ right: 0 }}
        whileInView={{ right: ["20vw", "25vw", "45vw", "50vw", "30vw", "50vw", "90vw", "95vw", "100vw"] }}
        transition={{ duration: 10 }}
        className="hidden z-[inherit] lg:block absolute animate-bounce bottom-0 max-h-32 h-[15%] rounded-lg shadow-lg"
        src="/dog.svg"
      />

      {/* Photographer svg */}
      <motion.img
        initial={{ right: 0 }}
        whileInView={{ right: ["0vw", "5vw", "20vw", "30vw", "45vw", "65vw", "70vw", "100vw"] }}
        transition={{ duration: 10 }}
        className="hidden z-[inherit] lg:block absolute bottom-0 max-h-56 h-[30%] rounded-lg animate-pulse shadow-lg"
        src="/photographer.svg"
      />
    </>
  );
};
