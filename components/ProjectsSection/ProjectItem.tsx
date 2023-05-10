import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Skill } from "@/utils/api/typings";

type Props = {
  src: string;
  title: string;
  description: string;
  skills: Skill[];
  githubLink?: string;
  liveLink?: string;
};

export default function ProjectItem({ src, title, description, skills, githubLink, liveLink }: Props) {
  return (
    <div className="min-w-full flex md:gap-5 flex-col xl:flex-row items-center justify-center overflow-y-auto border-2 md:border-none border-yellow-500 md:bg-transparent rounded-xl snap-center">
      {/* The preview image of app */}
      <img src={src} className="object-contain md:max-h-80 xl:max-h-72 w-auto rounded-t-[inherit] md:rounded-lg " />
K
      <div className="p-5 md:p-0 flex flex-col flex-1 justify-evenly gap-4">
        {/* App title */}
        <h1 className="uppercase font-semibold md:text-center text-yellow-500 text-lg sm:text-xl xl:text-2xl tracking-wider">{title}</h1>

        {/* App tags */}
        <div className="flex flex-wrap md:justify-center gap-1.5 ">
          {skills.map((skill) =>
            <span className="px-2 py-1 text-xs lg:text-sm font-semibold tracking-wider rounded-md text-gray-50 bg-gray-700">{skill.title}</span>
          )}
        </div>

        {/* App description */}
        <p className="text-gray-300 tracking-wide md:text-center md:leading-7 lg:leading-8 lg:text-[1rem]">{description}</p>

        {/* App links */}
        <div className="mt-1 flex flex-col sm:flex-row justify-between gap-1">
          {/* Github repo */}
          {githubLink && (
            <Link href={githubLink} target="_blank" className="flex gap-1.5 items-center text-gray-300 hover:text-yellow-500">
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <span>View github repository</span>
            </Link>
          )}

          {/* Live Demo */}
          {liveLink && (
            <Link href={liveLink} target="_blank" className="flex gap-2 ml-0.5 items-center text-gray-300 hover:text-yellow-500">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              <span>View live app</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
