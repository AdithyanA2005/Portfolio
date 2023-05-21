import React from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import ProjectItem from "./ProjectItem";
import SkewRect from "../SkewRect";
import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/utils/api/typings";

type Props = {
  projects?: Project[];
};

export default function ProjectsSection({ projects }: Props) {
  return (
    <SectionWrapper id="projects">
      <div className="h-full flex flex-col max-w-7xl mx-auto">
        <SectionHeading title="Projects" />

        <div className="scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-gray-700 z-10 grid grid-flow-col gap-4 overflow-x-scroll snap-x snap-mandatory">
          {projects?.map((project) => (
            <ProjectItem
              key={project._id}
              imgSrc={project.image ? urlForImage(project.image).url() : undefined}
              title={project?.title}
              description={project?.summary}
              skills={project?.technologies}
              githubLink={project?.githubLink}
              liveLink={project?.liveLink}
            />
          ))}
        </div>
      </div>

      <SkewRect from="left" />
    </SectionWrapper>
  );
}
