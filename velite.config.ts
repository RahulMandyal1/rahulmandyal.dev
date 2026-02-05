import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const computeReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return {
    text: `${minutes} min read`,
    minutes,
    words,
  };
};

const blogs = defineCollection({
  name: "Blog",
  pattern: "**/*.mdx",
  schema: s
    .object({
      title: s.string(),
      publishedAt: s.string(),
      summary: s.string(),
      image: s.string().optional(),
      draft: s.boolean().default(false),
      content: s.markdown({
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: "one-dark-pro",
            },
          ],
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ["anchor"],
              },
            },
          ],
        ],
      }),
      metadata: s.metadata(),
      path: s.path(),
    })
    .transform((data) => ({
      ...data,
      slug: data.path,
      readingTime: {
        text: `${data.metadata.readingTime} min read`,
        minutes: data.metadata.readingTime,
        words: data.metadata.wordCount,
      },
    })),
});

export default defineConfig({
  root: "src/content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { blogs },
  mdx: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    remarkPlugins: [remarkGfm] as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ] as any,
  },
});
