import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {
  texts: string[];
};

export default function HomeTyper({ texts }: Props) {
  const [typerText] = useTypewriter({ words: texts, loop: true, delaySpeed: 2000 });

  return (
    <h1 className="text-4xl text-center text-yellow-500">
      <span>{typerText}</span>
      <Cursor cursorColor="#F7AB0A" />
    </h1>
  );
};
