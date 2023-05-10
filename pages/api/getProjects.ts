import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";
import { Project } from "@/utils/api/typings";
import { projectsQuery } from "@/utils/api/queries";

type Data = {
  projects: Project[];
};

export default async function getProjectsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await client.fetch(projectsQuery);
  res.status(200).json({ projects });
};
