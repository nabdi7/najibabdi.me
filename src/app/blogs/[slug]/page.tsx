import { use } from "react";
import type { Metadata } from 'next/types'
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import MDXContent from "@/components/blogs/mdx-content";
import { getPosts, getPostBySlug } from "@/lib/posts";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { notFound } from "next/navigation";
import Subscribe from "@/components/subscribe/Subscribe";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found'
    };
  }

  const { metadata } = post;
  
  // Generate URL-friendly title from the slug
  const formattedTitle = resolvedParams.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: metadata.title || formattedTitle,
    description: metadata.summary || metadata.title,
    authors: [{ name: metadata.author }],
    openGraph: {
      title: metadata.title || formattedTitle,
      description: metadata.summary || metadata.title,
      type: 'article',
      publishedTime: metadata.publishedAt,
      authors: [metadata.author || ''],
      images: metadata.image ? [
        {
          url: metadata.image,
          width: 1200,
          height: 630,
          alt: metadata.title || formattedTitle
        }
      ] : []
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title || formattedTitle,
      description: metadata.summary || metadata.title,
      images: metadata.image ? [metadata.image] : []
    }
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const post = use(getPostBySlug(resolvedParams.slug));

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;

  // Generate formatted title for fallback
  const formattedTitle = resolvedParams.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">
        <Link
          href="/blogs"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to blogs</span>
        </Link>

        {image && (
          <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title || formattedTitle}
              className="object-cover"
              fill
            />
          </div>
        )}

        <header>
          <h1 className="title no-underline">{title || formattedTitle}</h1>
          <div className="flex items-center space-x-4 mt-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="/najib.jpg"
                alt={author || "Author"}
                className="object-cover"
                fill
              />
            </div>
            <p className="text-xs text-muted-foreground">
              {author}, {formatDate(publishedAt ?? "")}
            </p>
          </div>
        </header>

        <main className="prose mt-16 dark:prose-invert">
          <MDXContent source={content} />
        </main>

        <footer className="mt-16">
          <Subscribe />
        </footer>
      </div>
    </section>
  );
}