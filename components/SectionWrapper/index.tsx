import React, { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
  xPadding?: boolean;
};

export default function SectionWrapper({ id, xPadding = true,  children }: Props) {
  return (
    <section id={id} className={`relative pt-16 h-full min-h-screen snap-start ${xPadding && "px-5"}`}>
      {children}
    </section>
  );
};
