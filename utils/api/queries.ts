import { groq } from "next-sanity";

// SANITY
export const pageInfoQuery = groq`*[_type == "info"][0]`;
export const skillsQuery = groq`*[_type == "skill"]`;
export const projectsQuery = groq`*[_type == "project"] {..., technologies[]->}`;
export const socialsQuery = groq`*[_type == "social"]`;

// HASHNODE
export const hashnodeQuery = `
query {
  user(username: "adithyana") {
      publication {
        posts(page: 0) {
          title
          slug
          brief
          coverImage
          dateAdded
          cuid
          slug
        }
      }
    }
  }
`;
