import React from "react";

type Blog = {
  readingTime: { text: string };
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
};

const blogData: Blog[] = [
  {
    readingTime: { text: "5 min read" },
    slug: "introduction-to-react",
    title: "An Introduction to React",
    summary:
      "Learn the basics of React, a popular JavaScript library for building user interfaces.",
    publishedAt: "2023-01-15",
  },
  {
    readingTime: { text: "3 min read" },
    slug: "css-grid-basics",
    title: "CSS Grid Basics",
    summary:
      "Explore the fundamentals of CSS Grid layout and how it can simplify your web designs.",
    publishedAt: "2023-02-22",
  },
  {
    readingTime: { text: "7 min read" },
    slug: "typescript-for-beginners",
    title: "TypeScript for Beginners",
    summary:
      "Get started with TypeScript and learn how it can enhance your JavaScript development.",
    publishedAt: "2023-03-10",
  },
];

function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="space-y-2 cursor-pointer transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50 p-4 rounded-lg">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={blog.publishedAt}>
            {formatDate(blog.publishedAt)}
          </time>
          &nbsp;— {blog.readingTime.text}
        </dd>
      </dl>
      <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
        {blog.title}
      </h3>
      <p className="prose max-w-none text-gray-500 dark:text-gray-400">
        {blog.summary}
      </p>
    </article>
  );
}

export function BlogList() {
  return (
    <div className="space-y-4">
      {blogData.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </div>
  );
}
