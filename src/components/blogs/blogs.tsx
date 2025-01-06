import Link from "next/link";
import { BlogMetadata } from "@/lib/blogs";
import { formatDate, estimateReadingTime } from "@/lib/utils";

export default function Blogs({ blogs }: { blogs: BlogMetadata[] }) {
  return (
    <ul className="flex flex-col gap-8">
      {blogs.map((blog) => (
        <li key={blog.slug}>
          <Link href={`/blogs/${blog.slug}`} className="block">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-x-4">
              <div className="max-w-lg">
                <p className="text-lg font-semibold group-hover:text-blue-500">
                  {blog.title}
                </p>
                <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                  {blog.summary}
                </p>
              </div>

              <div className="mt-3 sm:mt-0 flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-1 text-sm font-light text-muted-foreground">
                <span>{formatDate(blog.publishedAt ?? "")}</span>
                <span className="sm:hidden">•</span>
                <span>{estimateReadingTime(blog.content).text}</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
