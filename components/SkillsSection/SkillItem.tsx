import { motion } from "framer-motion";

type Props = {
  percentage: number;
  src: string;
  alt: string;
};

export default function SkillItem({ percentage, src, alt }: Props) {
  return (
    <motion.div
      initial={{marginTop: 100, opacity: 0}}
      whileInView={{marginTop: 0, opacity: 1}}
      transition={{duration: 1}}
      className="group relative p-5 grid place-items-center bg-stone-800 rounded-full"
    >
      <img src={src} alt={alt} className="h-14 w-14" />
      <div className="hidden group-hover:grid absolute place-items-center bg-stone-800 bg-opacity-60 backdrop-blur-sm h-full w-full rounded-[inherit] font-bold text-xl text-gray-400">{percentage}%</div>
    </motion.div>
  );
};

