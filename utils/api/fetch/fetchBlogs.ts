import { hashnodeQuery } from "../queries";
import { Blog, HashnodePost, HashnodeResponse } from "../typings";

export default async function fetchBlogs(): Promise<Blog[]> {
  // Fetch response from hashnode api
  const response = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: hashnodeQuery }),
  });

  // Convert response to json and get list of posts
  const resJson: HashnodeResponse = await response.json();
  const posts: HashnodePost[] = resJson.data.user.publication.posts;

  // Create a list of blogs with necessary fields in it
  const blogs: Blog[] = posts.map((blog) => {
    const url = `https://hashnode.com/post/${blog.cuid}/${blog.slug}`;
    const newBlog: Blog = {
      url: url,
      title: blog.title,
      brief: blog.brief,
      coverImage: blog.coverImage,
      dateAdded: blog.dateAdded,
    };
    return newBlog;
  });

  return blogs;
}
