import { hashnodeQuery } from "../queries";
import { Blog, HashnodeResponse } from "../typings";

export default async function fetchBlogs(): Promise<Blog[]> {
  // Fetch response from hashnode api
  const response = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: hashnodeQuery }),
  });

  // Convert response to json and get list of posts
  const resJson: HashnodeResponse = await response.json();
  const data = resJson.data;

  // Create a list of blogs with necessary fields in it
  return data.user.posts.edges.map(edge => ({
    title: edge.node.title,
    brief: edge.node.brief,
    url: edge.node.url,
    coverImage: edge.node.coverImage.url,
    publishedAt: edge.node.publishedAt
  }))
}
