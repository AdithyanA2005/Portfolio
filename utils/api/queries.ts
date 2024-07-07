import { groq } from "next-sanity";

// SANITY
export const pageInfoQuery = groq`*[_type == "info"][0]`;
export const skillsQuery = groq`*[_type == "skill"]`;
export const projectsQuery = groq`*[_type == "project"] {..., technologies[]->}`;
export const socialsQuery = groq`*[_type == "social"]`;
export const qualificationsQuery = groq`*[_type == "qualification"]`;

// HASHNODE
export const hashnodeQuery = `
query {
  user(username: "adithyana") {
    posts(pageSize: 10, page: 1) {
      edges {
        node {
          id
          title
          url
          brief
          coverImage {
            url
          }
          publishedAt
        }
      }
    }
  }
}
`;
