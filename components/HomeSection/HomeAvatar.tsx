import React from "react";

type Props = {
  src: string; 
};

export default function HomeAvatar({ src }: Props) {
  return (
    // TODO: Convert img to next/image
    // < Image src = { imgSrc } alt = "hell" width = "192" height = "192" />
    <img className="rounded-full h-48 w-48" src={src} />
  );
};
