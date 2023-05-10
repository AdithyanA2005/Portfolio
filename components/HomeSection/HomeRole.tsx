import React from "react";

type Props = {
  text: string;
};

export default function HomeRole({ text }: Props) {
  return (
    <h2 className="text-[1rem] text-center uppercase tracking-[0.3rem] text-gray-400">{text}</h2>
  );
};
