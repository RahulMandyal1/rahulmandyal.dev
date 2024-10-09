import React from "react";
import { BlogCard } from "@/components/BlogCard";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";

export function BlogList() {
  const blogs = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="space-y-4">
      <ul>
        {blogs.map((blog) => (
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
