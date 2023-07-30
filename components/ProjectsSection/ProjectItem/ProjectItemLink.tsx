import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string | undefined;
  githubUrl: string | undefined;
  liveUrl: string | undefined;
};

export default function ProjectItemLink({ title, githubUrl, liveUrl }: Props) {
  return (
    <>
      {/* GITHUB LINK */}
      {githubUrl && (
        <Link
          href={githubUrl ?? ""}
          target="_blank"
          className="group relative text-sm text-gray-300 hover:text-yellow-500"
          aria-label={`Goto ${title}'s github repository`}
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
          <span className="tooltip">View github repository</span>
        </Link>
      )}

      {/* LIVE LINK */}
      {liveUrl && (
        <Link
          href={liveUrl ?? ""}
          target="_blank"
          className="group relative text-sm text-gray-300 hover:text-yellow-500"
          aria-label={`Goto ${title}'s live demo`}
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
          <span className="tooltip">View live app</span>
        </Link>
      )}
    </>
  );
}
