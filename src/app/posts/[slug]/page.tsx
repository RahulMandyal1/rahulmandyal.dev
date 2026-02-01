import { blogs } from "#site/content";
import Balancer from "react-wrap-balancer";
import { Mdx } from "@/components/Mdx";
import { formatDate } from "@/libs/utils";
import NotFound from "@/components/NotFound";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <NotFound />;
  }

  return (
    <section>
      <h1 className="text-2xl font-bold tracking-tighter">
        <Balancer>{blog.title}</Balancer>
      </h1>
      <div className="mb-8 mt-2 flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
        <p>
          {formatDate(blog.publishedAt)} - {blog.readingTime.text}
        </p>
      </div>
      <Mdx code={blog.content} />
    </section>
  );
}
