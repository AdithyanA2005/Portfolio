import React from "react";

type Props = {
  src: string;
};

export default function ProjectItemImage({ src }: Props) {
  return (
    <img
      src={src}
      className="object-contain md:max-h-80 xl:max-h-72 w-auto rounded-t-[inherit] md:rounded-lg "
    />
  );
};
