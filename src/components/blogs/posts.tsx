import Link from "next/link";
import { PostMetadata } from "@/lib/posts";
import { formatDate, estimateReadingTime } from "@/lib/utils";

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className="flex flex-col gap-8">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blogs/${post.slug}`} className="block">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-x-4">
              <div className="max-w-lg">
                <p className="text-lg font-semibold group-hover:text-blue-500">
                  {post.title}
                </p>
                <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                  {post.summary}
                </p>
              </div>

              <div className="mt-3 sm:mt-0 flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-1 text-sm font-light text-muted-foreground">
                <span>{formatDate(post.publishedAt ?? "")}</span>
                <span className="sm:hidden">•</span>
                <span>{estimateReadingTime(post.content).text}</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
