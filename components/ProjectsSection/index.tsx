import React, { useRef } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import ProjectItem from "./ProjectItem";
import ProjectScrollBtn from "./ProjectScrollBtn";
import SkewRect from "../SkewRect";
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
    snapContainerRef.current?.scrollBy({
      left: snapContainerRef.current.offsetWidth,
      behavior: "smooth"
    });
  };

  // Function to scroll to previous project
  const scrollToPrevious = () => {
    snapContainerRef.current?.scrollBy({
      left: -snapContainerRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };

  return (
    <SectionWrapper id="projects">
      <div className="h-full flex flex-col max-w-7xl mx-auto">
        <SectionHeading title="Projects" />

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="z-10 relative xl:-mt-24 p-1 max-h-full flex items-center overflow-x-visible overflow-y-hidden">
          <ProjectScrollBtn
            icon="left"
            handleBtnClick={scrollToPrevious}
          />
          <div ref={snapContainerRef} className="scrollbar-hide flex gap-3 max-h-full h-screen w-full overflow-y-hidden overflow-x-auto snap-x snap-mandatory">
            {projects.map((project) => (
              <ProjectItem
                key={project._id}
                imgSrc={urlForImage(project.image).url()}
                title={project.title}
                description={project.summary}
                skills={project.technologies}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>
          <ProjectScrollBtn
            icon="right"
            handleBtnClick={scrollToNext}
          />
        </motion.div>
      </div>

      <SkewRect from="left" />
    </SectionWrapper>
  );
};
