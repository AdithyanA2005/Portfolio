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

        <div className="scrollbar-none z-10 overflow-y-scroll grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
