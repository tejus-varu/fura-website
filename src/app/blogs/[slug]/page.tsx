import { Metadata } from "next";
import { seedBlogPosts } from "@/config/blogs";
import { brand } from "@/config/brand";
import BlogPostClientView from "@/components/sections/BlogPostClientView";

// Required for Next.js static export
export function generateStaticParams() {
  return seedBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = seedBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: `Article | ${brand.name}`,
    };
  }

  return {
    title: `${post.title} | ${brand.name}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage.src],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const staticPost = seedBlogPosts.find((p) => p.slug === slug);

  return <BlogPostClientView initialPost={staticPost || null} slug={slug} />;
}
