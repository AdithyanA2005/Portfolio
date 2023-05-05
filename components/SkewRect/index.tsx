import React from "react";

type Props = {
  from: "left" | "right";
};

export default function({ from }: Props) {
  return (
    <div className={`absolute left-0 z-0 ${from === "left" ? "bottom-[30%] -skew-y-12" : "bottom-[25%] skew-y-12"} w-full h-[40vh] bg-opacity-60 bg-gray-700`} />
  );
};
