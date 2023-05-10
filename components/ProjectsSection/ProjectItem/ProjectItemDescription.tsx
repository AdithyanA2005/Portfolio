import React from "react";

type Props = {
  text: string;
};

export default function ProjectItemDescription({ text }: Props) {
  return (
    <p className="text-gray-300 tracking-wide md:text-center md:leading-7 lg:leading-8 lg:text-[1rem]">
      {text}
    </p>
  );
};
