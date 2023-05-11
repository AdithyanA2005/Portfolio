import type { NextApiRequest, NextApiResponse } from "next";
import { hashnodeQuery } from "@/utils/api/queries";
import { Blog, HashnodeResponse } from "@/utils/api/typings";

type Data = {
  blogs: Blog[];
};

export default async function getSocialsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const response = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: hashnodeQuery }),
  });

  const resJson: HashnodeResponse = await response.json();
  const data = resJson.data;
  const posts = data.user.publication.posts;

  const blogs: Blog[] = posts.map(blog => {
    const url = `https://hashnode.com/post/${blog.cuid}/${blog.slug}`;
    return {
      url: url,
      title: blog.title,
      brief: blog.brief,
      coverImage: blog.coverImage,
      dateAdded: new Date(blog.dateAdded),
    };
  });

  res.status(200).json({ blogs });
};
