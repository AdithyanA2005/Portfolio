import React from "react";

type Props = {
  text: string;
};

export default function ProjectItemDescription({ text }: Props) {
  return (
    <p className="text-gray-300 tracking-wide md:leading-7">
      {text}
    </p>
  );
}
