import React from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import SkillItem from "./SkillItem";
import SkewRect from "../SkewRect";
import { urlForImage } from "@/sanity/lib/image";
import { Skill } from "@/utils/api/typings";

type Props = {
  skills: Skill[] | undefined;
};

export default function SkillsSection({ skills }: Props) {
  return (
    <SectionWrapper id="skills">
      <div className="z-10 h-full flex flex-col max-w-7xl mx-auto">
        <SectionHeading title="Skills" />

        <div className="z-[inherit] flex items-center justify-evenly flex-wrap overflow-y-auto gap-4 md:gap-7">
          {skills?.map((skill) => (
            <SkillItem
              key={skill?._id}
              src={skill.image ? urlForImage(skill.image).url() : undefined}
              alt={skill?.title}
              percentage={skill?.progress}
            />
          ))}
        </div>
      </div>

      <SkewRect from="right" />
    </SectionWrapper>
  );
}
