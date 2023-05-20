import React from "react";
import { motion } from "framer-motion";
import ProjectItemImage from "./ProjectItemImage";
import ProjectItemTitle from "./ProjectItemTitle";
import ProjectItemDescription from "./ProjectItemDescription";
import ProjectItemTags from "./ProjectItemTags";
import ProjectItemGithubLink from "./ProjectItemGithubLink";
import ProjectItemLiveLink from "./ProjectItemLiveLink";
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
      className="flex flex-col w-[85vw] max-h-min md:max-w-xl rounded-xl bg-black bg-opacity-40 snap-center"
    >
      <ProjectItemImage src={imgSrc ?? ""} />

      <div className="flex-1 p-4 flex flex-col justify-evenly gap-4">
        <ProjectItemTitle text={title ?? ""} />
        <ProjectItemTags tags={skills} />
        <ProjectItemDescription text={description ?? ""} />

        <div className="mt-1 p-1 flex flex-col sm:flex-row justify-between gap-1">
          {githubLink && <ProjectItemGithubLink url={githubLink} />}
          {liveLink && <ProjectItemLiveLink url={liveLink} />}
        </div>
      </div>
    </motion.article>
  );
}
