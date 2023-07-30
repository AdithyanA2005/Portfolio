import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  imageUrl: string;
};

export default function AboutAvatar({ imageUrl }: Props) {
  return (
    <motion.div
      initial={{ x: -150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex h-48 lg:h-56 aspect-square"
    >
      <Image
        src={imageUrl}
        width={224}
        height={224}
        className="flex-1 rounded-full md:rounded-lg object-contain"
        priority={true}
        alt="Adithyan"
      />
    </motion.div>
  );
}
