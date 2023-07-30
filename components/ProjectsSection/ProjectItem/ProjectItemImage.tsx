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
      width={400}
      height={224}
      priority={true}
      className="w-full object-cover rounded-t-[inherit]"
    />
  );
}
