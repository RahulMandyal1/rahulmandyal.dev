import { formatDate } from "@/libs/utils";

type BlogCardProps = {
  readingTime: { text: string; minutes: number; words: number };
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
};

export function BlogCard({ blog }: { blog: BlogCardProps }) {
  return (
    <article className="space-y-2 cursor-pointer transition hover:bg-stone-200/50 dark:hover:bg-zinc-800/50 p-4 rounded-lg">
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
      <p className="prose max-w-none text-gray-600 dark:text-gray-400">{blog.summary}</p>
    </article>
  );
}
