import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {
  url: string;
};

export default function ProjectItemGithubLink({ url }: Props) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex gap-1.5 items-center text-gray-300 hover:text-yellow-500"
    >
      <FontAwesomeIcon icon={faGithub} size="lg" />
      <span>View github repository</span>
    </Link>
  );
};
