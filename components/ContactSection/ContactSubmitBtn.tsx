import React from "react";

type Props = {
  text: string;
};

export default function ContactSubmitBtb({ text }: Props) {
  return (
    <button
      type="submit"
      className="text-gray-800 bg-yellow-500 hover:bg-yellow-600 focus:ring focus:outline-none focus:ring-yellow-300 font-bold tracking-widest rounded-lg w-full sm:w-auto px-5 py-2.5 text-center transition-all"
    >
      {text}
    </button>
  );
}
