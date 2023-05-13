import React from "react";
import Image from "next/image";

type Props = {
  src: string;
};

export default function BlogCoverImage({ src }: Props) {
  return (
    <Image
      src={src}
      width={240}
      height={135}
      alt="Blog cover"
      className="rounded-t-[inherit] w-full max-h-52 object-cover object-bottom"
    />
  );
}
