import React from "react";
import Image from "next/image";

type Props = {
  src: string;
};

export default function HomeAvatar({ src }: Props) {
  return <Image
    src={src}
    alt="Adithyan A"
    width="192"
    height="192"
    priority={true}
    className="rounded-full"
  />;
}
