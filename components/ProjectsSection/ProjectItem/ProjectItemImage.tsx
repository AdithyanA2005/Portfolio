import React from "react";
import Image from "next/image";

type Props = {
  src: string;
};

export default function ProjectItemImage({ src }: Props) {
  return (
    <Image
      src={src}
      alt="Project Cover"
      width={300}
      height={300}
      className="w-full bg-red-800 object-cover rounded-t-[inherit] max-h-56" />
  );
}
