import React from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import Avatar from "./Avatar";
import Description from "./Description";
import DogAndOwner from "./DogAndOwner";
import SkewRect from "../SkewRect";

type Props = {};

export default function AboutSection({ }: Props) {
  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdxhi94Vy3IncxfKzo-eIhF2n-ez_D1MqVdlkW8lhHjlwK8N4xH2X94pBPl-Dl_QJDQk&usqp=CAU";
  return (
    <SectionWrapper id="about">

      {/* Main content */}
      <div className="z-10 h-full flex flex-col max-w-7xl mx-auto">
        <SectionHeading title="about me" />

        <div className="z-[inherit] overflow-hidden pb-3 flex flex-col items-center md:flex-row gap-3 md:gap-5">
          <Avatar imageUrl={imageUrl} />
          <Description text="Hello, I am Adithyan A, I am from Kerala, India. Ever since I was introduced to the world of programming, I have been fascinated by the endless possibilities of it. I have a strong passion for coding and building digital solutions. I am constantly challenging myself to learn new technologies and programming languages to enhance my skills and stay up-to-date with the latest industry trends. I am looking for opportunities to collaborate and work with like-minded who share my passion for coding. Other than coding I spend time with my pet dog" />
        </div>
      </div>

      <SkewRect from="left" />
      <DogAndOwner />
    </SectionWrapper>
  );
};
