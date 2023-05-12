import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import BlogItem from "./BlogItem";
import SkewRect from "../SkewRect";
import { Blog } from "@/utils/api/typings";

type Props = {
  blogs: Blog[];
  blogsLink: string;
};

export default function BlogsSection({ blogs, blogsLink }: Props) {
  return (
    <SectionWrapper id="blogs">
      <div className="z-10 h-full flex flex-col max-w-7xl mx-auto">
        <SectionHeading title="Blogs" />

        {/* Blogs Container */}
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

          {/* Link to blogging site */}
          <Link
            href={blogsLink}
            target="_blank"
            className=" rounded-lg transition-all justify-center bg-black bg-opacity-50 hover:bg-opacity-60 flex items-center gap-1 hover:gap-1.5 text-gray-400 hover:text-yellow-500 text-lg p-2.5"
          >
            <span className="">View All</span>
            <FontAwesomeIcon icon={faAngleDoubleRight} size="sm" />
          </Link>
        </div>
      </div>

      <SkewRect from="left" />
    </SectionWrapper>
  );
};
