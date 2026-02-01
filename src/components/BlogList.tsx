import React from "react";
import { BlogCard } from "@/components/BlogCard";
import { blogs } from "#site/content";
import Link from "next/link";

export function BlogList() {
  const sortedBlogs = [...blogs]
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 3);

  return (
    <div className="space-y-4">
      <ul>
        {sortedBlogs.map((blog) => (
          <li
            key={blog.slug}
            className="py-1 divide-y divide-gray-200 dark:divide-gray-700"
          >
            <Link href={`/posts/${blog.slug}`}>
              <BlogCard blog={blog} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
