import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type Props = {
  url: string;
};

export default function ProjectItemLiveLink({ url }: Props) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex gap-2 ml-0.5 text-md items-center text-gray-300 hover:text-yellow-500"
    >
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      <span>View live app</span>
    </Link>
  );
}
