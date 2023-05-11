import React from "react";
import { motion } from "framer-motion";

type Props = {
  imageUrl: string;
};

export default function AboutAvatar({ imageUrl }: Props) {
  return (
    <motion.img
      initial={{ x: -150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="rounded-full md:rounded-lg w-48 lg:w-56 object-contain"
      src={imageUrl}
      alt="Adithyan"
    />
  );
};

