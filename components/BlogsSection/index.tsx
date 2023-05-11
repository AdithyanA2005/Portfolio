import React from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import BlogItem from "./BlogItem";
import SkewRect from "../SkewRect";
import { Blog } from "@/utils/api/typings";

type Props = {
  blogs: Blog[];
};

export default function BlogsSection({ blogs }: Props) {
  return (
    <SectionWrapper id="blogs">
      <div className="z-10 h-full flex flex-col max-w-7xl mx-auto">
        <SectionHeading title="Blogs" />

        <div className="z-[inherit] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto gap-4">
          {blogs.map((blog) => (
            <BlogItem
              url={blog.url}
              title={blog.title}
              brief={blog.brief}
              imgSrc={blog.coverImage}
              dateAdded={blog.dateAdded}
            />
          ))}
        </div>
      </div>

      <SkewRect from="left" />
    </SectionWrapper>
  );
};
