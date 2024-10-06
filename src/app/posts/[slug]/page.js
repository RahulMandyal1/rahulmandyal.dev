import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation"; // To handle non-existent slugs

// Generates static paths for the dynamic pages
export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }) {
  // Fetch the post based on the slug from the URL
  const post = allPosts.find((post) => post.slug === params.slug);

  // If no post is found, trigger a 404 page
  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.date}</div>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
}

