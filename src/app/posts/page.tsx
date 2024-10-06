import { BlogCard } from "@/components/BlogCard";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import { ENV } from "@/libs/env";

const isProd = ENV.NODE_ENV === "production";

export default function Blog() {
  const blogs = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const undraftedBlogs = isProd ? blogs.filter((blog) => !blog.draft) : blogs;

  return (
    <section>
      <ul>
        {undraftedBlogs.map((blog) => (
          <li
            key={blog.slug}
            className="py-1 divide-y divide-gray-200 dark:divide-gray-700"
          >
            <Link href={`/blog/${blog.slug}`}>
              <BlogCard blog={blog} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
