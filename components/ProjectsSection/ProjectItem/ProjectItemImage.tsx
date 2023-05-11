import React from "react";
import Image from "next/image";

type Props = {
  src: string;
};

export default function ProjectItemImage({ src }: Props) {
  return (
    <Image
      src={src}
      alt="Skill icon"
      width={300}
      height={300}
      className="object-cover md:max-h-72 h-full w-full md:w-auto rounded-t-[inherit] md:rounded-lg "
    />
  );
};
