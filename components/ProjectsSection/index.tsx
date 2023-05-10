import React, { useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import SkewRect from "../SkewRect";
import ProjectItem from "./ProjectItem";
import ScrollBtn from "./ScrollBtn";
import { Project } from "@/utils/api/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: Props) {

  // Reference to the div containing different projects
  const snapContainerRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to next project 
  const scrollToNext = () => {
    snapContainerRef.current?.scrollBy({ left: snapContainerRef.current.offsetWidth, behavior: 'smooth' });
  };

  // Function to scroll to previous project
  const scrollToPrevious = () => {
    snapContainerRef.current?.scrollBy({ left: -snapContainerRef.current.offsetWidth, behavior: 'smooth' });
  };

  return (
    <SectionWrapper id="projects">
      <div className="h-full flex flex-col max-w-7xl mx-auto">
        <SectionHeading title="Projects" />

        <div className="z-10 relative max-h-full flex items-center overflow-x-visible overflow-y-hidden">
          {/* Scroll to previous */}
          <ScrollBtn handleBtnClick={scrollToPrevious} icon="left" />

          {/* Snap container containing projects */}
          <div
            ref={snapContainerRef}
            className="scrollbar-hide flex gap-3 max-h-full h-screen w-full overflow-y-hidden overflow-x-auto snap-x snap-mandatory"
          >
            {projects.map((project) => (
              <ProjectItem
                key={project._id}
                src={urlForImage(project.image).url()}
                title={project.title}
                description={project.summary}
                skills={project.technologies}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>

          {/* Scroll to next */}
          <ScrollBtn handleBtnClick={scrollToNext} icon="right" />
        </div>
      </div>

      <SkewRect from="left" />
    </SectionWrapper>
  );
};
