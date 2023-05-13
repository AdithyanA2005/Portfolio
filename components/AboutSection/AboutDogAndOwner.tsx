import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function AboutDogAndOwner({ }: Props) {
  return (
    <>
      {/* Dog Image */}
      <motion.div
        initial={{ right: 0 }}
        whileInView={{ right: ["20vw", "25vw", "45vw", "50vw", "30vw", "50vw", "90vw", "95vw", "100vw"] }}
        transition={{ duration: 10 }}
        className="hidden lg:flex z-[inherit] absolute animate-bounce bottom-0 max-h-40 h-[20%] aspect-square rounded-lg shadow-lg"
      >
        <Image
          alt="Dog"
          src="/dog.svg"
          width={0}
          height={0}
          className="flex-1"
        />
      </motion.div>

      {/* Photographer Image */}
      <motion.div
        initial={{ right: 0 }}
        whileInView={{ right: ["0vw", "5vw", "20vw", "30vw", "45vw", "65vw", "70vw", "100vw"] }}
        transition={{ duration: 10 }}
        className="hidden lg:flex z-[inherit] absolute bottom-0 max-h-56 h-[30%] aspect-square rounded-lg animate-pulse shadow-lg"
      >
        <Image
          alt="Person"
          src="/photographer.svg"
          width={0}
          height={0}
          className="flex-1"
        />
      </motion.div>
    </>
  );
}
