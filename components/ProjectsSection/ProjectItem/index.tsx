import React from "react";
import ProjectItemImage from "./ProjectItemImage";
import ProjectItemTitle from "./ProjectItemTitle";
import ProjectItemDescription from "./ProjectItemDescription";
import ProjectItemTags from "./ProjectItemTags";
import ProjectItemGithubLink from "./ProjectItemGithubLink";
import ProjectItemLiveLink from "./ProjectItemLiveLink";
import { Skill } from "@/utils/api/typings";
import { motion } from "framer-motion";

type Props = {
  imgSrc: string;
  title: string;
  description: string;
  skills: Skill[];
  githubLink?: string;
  liveLink?: string;
};

export default function ProjectItem({ imgSrc, title, description, skills, githubLink, liveLink }: Props) {
  return (
    <motion.div
      initial={{ y:100, opacity: 0 }}
      whileInView={{ y:0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-w-full flex md:gap-5  flex-col xl:flex-row items-center justify-center overflow-y-auto border-2 md:border-none border-yellow-500 md:bg-transparent rounded-xl snap-center"
    >
      <ProjectItemImage src={imgSrc} />

      <div className="p-5 md:p-0 flex flex-col flex-1 justify-evenly gap-4">
        <ProjectItemTitle text={title} />
        <ProjectItemTags tags={skills} />
        <ProjectItemDescription text={description} />

        <div className="mt-1 p-1 flex flex-col sm:flex-row justify-between gap-1">
          {githubLink && <ProjectItemGithubLink url={githubLink} />}
          {liveLink && <ProjectItemLiveLink url={liveLink} />}
        </div>
      </div>
    </motion.div>
  );
};
