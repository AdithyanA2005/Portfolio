import React from "react";
import { Skill } from "@/utils/api/typings";

type Props = {
  tags: Skill[] | undefined;
};

export default function ProjectItemTags({ tags }: Props) {
  return (
    <div className="flex flex-wrap md:justify-center gap-1.5 ">
      {tags?.map((tag) => (
        <span key={tag._id} className="px-2 py-1 text-xs lg:text-sm font-semibold tracking-wider rounded-md text-gray-50 bg-gray-700">
          {tag?.title}
        </span>
      ))}
    </div>
  );
};
