import { useRouter } from "next/router";
import { PageInfo, Project, Skill, Social } from "./typings";

// http://localhost:3000 while developement
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


// Fetch page infos from next api
export async function fetchPageInfo() {
  const response = await fetch(`${baseUrl}/api/getPageInfo`)
  const pageInfo: PageInfo = await response.json();
  return pageInfo;
};

// Fetch projects from next api
export async function fetchProjects() {
  const response = await fetch(`${baseUrl}/api/getProjects`);
  const data = await response.json();
  const projects: Project[] = data.projects;
  return projects;
};

// Fetch skills from next api
export async function fetchSkills() {
  const response = await fetch(`${baseUrl}/api/getSkills`);
  const data = await response.json();
  const skills: Skill[] = data.skills;
  return skills;
};


// Fetch socials from next api
export async function fetchSocials() {
  const response = await fetch(`${baseUrl}/api/getSocials`);
  const data = await response.json();
  const socials: Social[] = data.socials;
  return socials;
};

