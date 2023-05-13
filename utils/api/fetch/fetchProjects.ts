import { client } from "@/sanity/lib/client";
import { projectsQuery } from "../queries";
import { Project } from "../typings";

export default async function fetchProjects(): Promise<Project[]> {
  const projects: Project[] = await client.fetch<Project[]>(projectsQuery);
  return projects;
}
