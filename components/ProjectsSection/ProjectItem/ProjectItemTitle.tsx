import React from "react";

type Props = {
  text: string;
};

export default function ProjectItemTitle({ text }: Props) {
  return (
    <h1 className="uppercase font-semibold text-yellow-500 text-lg sm:text-xl tracking-wider">
      {text}
    </h1>
  );
}
