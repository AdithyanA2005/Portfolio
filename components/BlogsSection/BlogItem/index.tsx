import React from "react";
import Link from "next/link";
import BlogCoverImage from "./BlogCoverImage";

type Props = {
  url: string;
  title: string;
  brief: string;
  imgSrc: string;
  dateAdded: Date;
};

export default function BlogItem({ url, title, brief, imgSrc, dateAdded }: Props) {
  const date = new Date(dateAdded);
  const dateOptions: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" };
  const dateStr = date.toLocaleDateString("en-US", dateOptions);

  return (
    <div className="relative group bg-black bg-opacity-40 backdrop-blur-md rounded-xl">
      {/* Blog Image */}
      <BlogCoverImage src={imgSrc} />

      {/* Blog Contents */}
      <div className="p-3 flex flex-col gap-2">
        <h1 className="text-gray-300 text-xl">{title}</h1>
        <span className="text-gray-400 text-sm font-mono float-right">{dateStr}</span>
        <p className="text-gray-400">{brief}</p>
      </div>

      {/* BLOG HOVER COVER */}
      <div className="absolute inset-0 hidden group-hover:grid place-items-center bg-black bg-opacity-50 backdrop-blur-sm rounded-[inherit]">
        <Link 
          href={url} 
          target="_blank" 
          className="grid place-items-center p-5 rounded-full text-white hover:text-yellow-500 bg-gray-700 bg-opacity-60 aspect-square text-sm uppercase font-semibold"
        >
          View Blog
        </Link>
      </div>
    </div>
  );
};
