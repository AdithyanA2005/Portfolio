import React from "react";

type Props = {
  from: "left" | "right";
};

export default function SkewRect({ from }: Props) {
  return (
    <div
      className={`${from === "left"
          ? "bottom-[30%] -skew-y-12"
          : "bottom-[25%] skew-y-12"
        } absolute left-0 z-0 w-full h-[40vh] bg-opacity-60 bg-gray-700`}
    />
  );
};
