import React from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import Avatar from "./Avatar";
import Description from "./Description";
import DogAndOwner from "./DogAndOwner";
import SkewRect from "../SkewRect";

type Props = {
  imgSrc: string;
  aboutMe: string;
};

export default function AboutSection({ imgSrc, aboutMe }: Props) {
  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdxhi94Vy3IncxfKzo-eIhF2n-ez_D1MqVdlkW8lhHjlwK8N4xH2X94pBPl-Dl_QJDQk&usqp=CAU";
  return (
    <SectionWrapper id="about">

      {/* Main content */}
      <div className="z-10 h-full flex flex-col max-w-7xl mx-auto">
        <SectionHeading title="about me" />

        <div className="z-[inherit] overflow-hidden pb-3 flex flex-col items-center md:flex-row gap-3 md:gap-5">
          <Avatar imageUrl={imgSrc} />
          <Description text={aboutMe} />
        </div>
      </div>

      <SkewRect from="left" />
      <DogAndOwner />
    </SectionWrapper>
  );
};
