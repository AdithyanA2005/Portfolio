import { client } from "@/sanity/lib/client";
import { skillsQuery } from "../queries";
import { Skill } from "../typings";

export default async function fetchSkills(): Promise<Skill[]> {
  const skills: Skill[] = await client.fetch<Skill[]>(skillsQuery);
  return skills;
}
