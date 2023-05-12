import React from "react";
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
    <div className="min-w-full flex md:gap-5  flex-col xl:flex-row items-center justify-center overflow-y-auto border-2 md:border-none border-yellow-500 md:bg-transparent rounded-xl snap-center">
      <ProjectItemImage src={imgSrc ?? ""} />

      <div className="p-5 md:p-0 flex flex-col flex-1 justify-evenly gap-4">
        <ProjectItemTitle text={title ?? ""} />
        <ProjectItemTags tags={skills} />
        <ProjectItemDescription text={description ?? ""} />

        <div className="mt-1 p-1 flex flex-col sm:flex-row justify-between gap-1">
          {githubLink && <ProjectItemGithubLink url={githubLink} />}
          {liveLink && <ProjectItemLiveLink url={liveLink} />}
        </div>
      </div>
    </div>
  );
};
