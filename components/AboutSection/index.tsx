import React from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import AboutAvatar from "./AboutAvatar";
import AboutDescription from "./AboutDescription";
import AboutDogAndOwner from "./AboutDogAndOwner";
import SkewRect from "../SkewRect";

type Props = {
  imgSrc: string;
  aboutMe: string;
};

export default function AboutSection({ imgSrc, aboutMe }: Props) {
  return (
    <SectionWrapper id="about">
      <div className="z-10 h-full flex flex-col max-w-7xl mx-auto">
        <SectionHeading title="about me" />

        <div className="z-[inherit] overflow-hidden pb-3 flex flex-col items-center md:flex-row gap-3 md:gap-5">
          <AboutAvatar imageUrl={imgSrc} />
          <AboutDescription text={aboutMe} />
        </div>
      </div>

      <SkewRect from="left" />
      <AboutDogAndOwner />
    </SectionWrapper>
  );
};
