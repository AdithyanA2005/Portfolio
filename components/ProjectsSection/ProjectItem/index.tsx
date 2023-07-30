import React from "react";
import { motion } from "framer-motion";
import ProjectItemImage from "./ProjectItemImage";
import ProjectItemTitle from "./ProjectItemTitle";
import ProjectItemDescription from "./ProjectItemDescription";
import ProjectItemTags from "./ProjectItemTags";
import ProjectItemLink from "./ProjectItemLink";
import { Skill } from "@/utils/api/typings";

type Props = {
  imgSrc: string | undefined;
  title: string | undefined;
  description: string | undefined;
  skills: Skill[] | undefined;
  githubLink: string | undefined;
  liveLink: string | undefined;
};

export default function ProjectItem({ imgSrc, title, description, skills, githubLink, liveLink }: Props) {
  return (
    <motion.article
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col rounded-xl bg-black bg-opacity-40 backdrop-blur-md snap-center"
    >
      <ProjectItemImage src={imgSrc ?? ""} />

      <div className="flex-1 p-4 flex flex-col justify-around gap-2">
        <ProjectItemTitle text={title ?? ""} />
        <ProjectItemTags tags={skills} />
        <ProjectItemDescription text={description ?? ""} />

        <div className="mt-1 p-1 flex justify-start gap-4">
          <ProjectItemLink
            title={title}
            githubUrl={githubLink}
            liveUrl={liveLink}
          />
        </div>
      </div>
    </motion.article>
  );
}
