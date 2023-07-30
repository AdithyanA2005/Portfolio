import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string | undefined;
  imgSrc: string | undefined;
};

export default function QualificationItem({ title, imgSrc }: Props) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isExpanded, setIsExpanded] = useState<Boolean>(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (imgRef.current?.contains(e.target as Node)) setIsExpanded(true);
      else setIsExpanded(false);
    };

    document.addEventListener("click", handleClick);
    return () => document.addEventListener("click", handleClick);
  }, [])

  return (
    <motion.div
      initial={{ x: -150, scale: 0, opacity: 0 }}
      whileInView={{ x: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className={`${isExpanded ? "absolute mt-20 grid place-items-center inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm" : "group relative"}`}
    >
      <Image
        ref={imgRef}
        alt={title ?? ""}
        className="cursor-pointer z-50 mx-auto w-[90%] max-w-5xl"
        src={imgSrc ?? ""}
        width={isExpanded ? 1000 : 500}
        height={isExpanded ? 800 : 400}
      />
    </motion.div>
  );
}
