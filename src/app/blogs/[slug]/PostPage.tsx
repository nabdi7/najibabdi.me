// import { posts } from "#site/content";
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowLeftIcon } from "@radix-ui/react-icons";
// import { formatDate } from "@/lib/utils";
// import MDXContent from "@/components/blogs/mdx-content";
// import Subscribe from "@/components/subscribe/Subscribe";

// interface Post {
//   title: string;
//   content: string;
//   image?: string;
//   author: {
//     name: string;
//     image: string;
//   };
//   date: string;
// }

// interface BlogPageProps {
//   post: Post;
// }

// export default function BlogPage({ post }: BlogPageProps) {
//   return (
//     <section className="pb-24 pt-32">
//       <div className="container max-w-3xl">
//         <Link
//           href="/blog"
//           className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
//         >
//           <ArrowLeftIcon className="h-5 w-5" />
//           <span>Back to blog</span>
//         </Link>

//         {post.image && (
//           <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
//             <Image
//               src={post.image}
//               alt={post.title}
//               className="object-cover"
//               fill
//             />
//           </div>
//         )}

//         <header>
//           <h1 className="title no-underline">{post.title}</h1>
//           <div className="flex items-center space-x-4 mt-3">
//             <div className="relative h-10 w-10 overflow-hidden rounded-full">
//               <Image
//                 src={post.author.image}
//                 alt={post.author.name}
//                 className="object-cover"
//                 fill
//               />
//             </div>
//             <p className="text-xs text-muted-foreground">
//               {post.author.name}, {formatDate(post.date)}
//             </p>
//           </div>
//         </header>

//         <main className="prose mt-16 dark:prose-invert">
//           <MDXContent source={post.content} />
//         </main>

//         <footer className="mt-16">
//           <Subscribe />
//         </footer>
//       </div>
//     </section>
//   );
// }

// PostPage.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { formatDate } from "@/lib/utils";
import MDXContent from "@/components/blogs/mdx-content";
import Subscribe from "@/components/subscribe/Subscribe";

interface PostPageProps {
  post: {
    metadata: {
      title?: string; // Made optional to match the Post type
      image?: string;
      author?: string;
      publishedAt?: string;
      summary?: string;
    };
    content: string;
  };
}

export default function PostPage({ post }: PostPageProps) {
  const { metadata, content } = post;
  const { title = '', image, author, publishedAt } = metadata; // Provide default empty string

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
              alt={title}
              className="object-cover"
              fill
            />
          </div>
        )}

        <header>
          <h1 className="title no-underline">{title}</h1>
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
              {author || 'Anonymous'}, {formatDate(publishedAt ?? "")}
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