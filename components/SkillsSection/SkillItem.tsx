import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  percentage: number | undefined;
  src: string | undefined;
  alt: string | undefined;
};

export default function SkillItem({ percentage, src, alt }: Props) {
  return (
    <motion.div
      initial={{ marginTop: 100, opacity: 0 }}
      whileInView={{ marginTop: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="group relative p-5 grid place-items-center bg-black bg-opacity-30 rounded-full"
    >
      <Image 
        src={src ?? ""} 
        alt={alt ?? ""} 
        height="56" 
        width="56" 
      />
      <div className="hidden group-hover:grid absolute place-items-center bg-black bg-opacity-60 backdrop-blur-sm h-full w-full rounded-[inherit] font-bold text-xl text-gray-400">
        {percentage ?? ""}%
      </div>
    </motion.div>
  );
}
