import { groq } from "next-sanity";

export const pageInfoQuery = groq`*[_type == "info"][0]`;
export const skillsQuery = groq`*[_type == "skill"]`;
export const projectsQuery = groq`*[_type == "project"] {..., technologies[]->}`;
export const socialsQuery = groq`*[_type == "social"]`;
