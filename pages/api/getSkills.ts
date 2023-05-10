import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";
import { Skill } from "@/utils/api/typings";
import { skillsQuery } from "@/utils/api/queries";

type Data = {
  skills: Skill[];
};

export default async function getSkillsHandlere(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skill[] = await client.fetch(skillsQuery);
  res.status(200).json({ skills });
};
