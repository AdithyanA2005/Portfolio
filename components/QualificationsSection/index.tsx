import React from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import SkewRect from "../SkewRect";
import QualificationItem from "./QualificationItem";
import { Qualification } from "@/utils/api/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  qualifications: Qualification[];
};

export default function QualificationsSection({ qualifications }: Props) {
  return (
    <SectionWrapper id="qualifications">
      <div className="z-10 h-full flex flex-col max-w-7xl mx-auto">
        <SectionHeading title="Qualifications" />

        <div className="scrollbar-none z-10 overflow-y-scroll grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {qualifications?.map((qualification) => (
            <QualificationItem
              title={qualification.title ?? undefined}
              imgSrc={qualification.image ? urlForImage(qualification.image).url() : undefined}
            />
          ))}
        </div>
      </div>

      <SkewRect from="left" />
    </SectionWrapper>
  );
}
