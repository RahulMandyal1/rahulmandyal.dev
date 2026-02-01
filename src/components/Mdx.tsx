export function Mdx({ code }: { code: string }) {
  return (
    <article
      className="prose prose-neutral dark:prose-invert prose-quoteless max-w-none"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
