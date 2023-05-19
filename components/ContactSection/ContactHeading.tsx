import React from "react";

type Props = {};

export default function ContactHeading({ }: Props) {
  return (
    <h4 className="text-3xl font-semibold text-white">
      I have got what you just need.{" "}
      <span className="decoration-yellow-500 underline">Lets Talk.</span>
    </h4>
  );
}
