import Link from "next/link";
import Image from "next/image";
import React from "react";

type Props = {
  imgSrc: string;
  title: string;
  tags: string[];
  desc: string;
  githubLink?: string;
  liveLink?: string;
};

export default function ProjectItem({ imgSrc, title, desc, tags, githubLink, liveLink }: Props) {
  return (
    <div className="flex md:gap-5 flex-col md:flex-row items-center justify-center overflow-y-auto bg-stone-800 md:bg-transparent min-w-full rounded-xl snap-center">
      {/* The preview image of app */}
      <img src={imgSrc} className="w-full md:max-w-xs lg:max-w-md max-h-80 md:h-auto rounded-t-[inherit] md:rounded-lg object-cover" />

      <div className="p-5 md:p-0 flex flex-col flex-1 justify-evenly gap-3.5">
        {/* App title */}
        <h1 className="uppercase font-semibold text-yellow-500 text-lg lg:text-xl tracking-wider">{title}</h1>

        {/* App tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) =>
            <span className="px-2 py-1 text-xs font-semibold tracking-wider rounded-md text-gray-50 bg-gray-700">{tag}</span>
          )}
        </div>

        {/* App description */}
        <p className="text-gray-300 tracking-wider">{desc}</p>

        {/* App links */}
        <div className="mt-1 flex justify-between gap-1.5">
          {/* Github repo */}
          {githubLink && (
            <Link href={githubLink} target="_blank" className="flex gap-1.5 items-center text-indigo-300">
              <Image src="/github.svg" alt="Github" height={20} width={20} />
              <span>View github repository</span>
            </Link>
          )}

          {/* Live Demo */}
          {liveLink && (
            <Link href={liveLink} target="_blank" className="flex gap-2 ml-0.5 items-center text-indigo-300">
              <Image src="/openlink.svg" alt="Link" height={17} width={15.5} />
              <span>View live app</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
