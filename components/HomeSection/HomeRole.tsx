import React from "react";

type Props = {
  text: string;
};

export default function HomeRole({ text }: Props) {
  return (
    <h2 className="text- font-medium text-center uppercase tracking-[0.2rem] text-stone-400">
      {text}
    </h2>
  );
}
