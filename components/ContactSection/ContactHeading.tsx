import React from "react";

type Props = {};

export default function ContactHeading({ }: Props) {
  return (
    <h2 className="text-center text-3xl font-semibold text-white">
      I have got what you just need.{" "}
      <span className="decoration-yellow-500 underline">Lets Talk.</span>
    </h2>
  );
}
