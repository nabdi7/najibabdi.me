import Link from "next/link";
import Image from "next/image";

import { formatDate } from "@/lib/utils";
import MDXContent from "@/components/blogs/mdx-content";
import { getBlogs, getBlogBySlug } from "@/lib/blogs";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { notFound } from "next/navigation";
import Subscribe from "@/components/subscribe/Subscribe";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  const slugs = blogs.map((blog) => ({ slug: blog.slug }));

  return slugs;
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const { metadata, content } = blog;
  const { title, image, author, publishedAt } = metadata;

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
              alt={title || ""}
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


// import Link from "next/link";
// import Image from "next/image";
// import { Metadata } from 'next';
// import { formatDate } from "@/lib/utils";
// import MDXContent from "@/components/blogs/mdx-content";
// import { getBlogs, getBlogBySlug } from "@/lib/blogs";
// import { ArrowLeftIcon } from "@radix-ui/react-icons";
// import { notFound } from "next/navigation";
// import Subscribe from "@/components/subscribe/Subscribe";

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const blog = await getBlogBySlug(params.slug);
  
//   if (!blog) {
//     return {
//       title: 'Blog Not Found'
//     };
//   }

//   return {
//     title: blog.metadata.title,
//     description: blog.metadata.summary || '',
//     openGraph: {
//       title: blog.metadata.title,
//       description: blog.metadata.summary || '',
//       type: 'article',
//       authors: [blog.metadata.author || ''],
//       publishedTime: blog.metadata.publishedAt,
//     },
//   };
// }

// export async function generateStaticParams() {
//   const blogs = await getBlogs();
//   const slugs = blogs.map((blog) => ({ slug: blog.slug }));

//   return slugs;
// }

// export default async function Blog({ params }: { params: { slug: string } }) {
//   const { slug } = params;
//   const blog = await getBlogBySlug(slug);

//   if (!blog) {
//     notFound();
//   }

//   const { metadata, content } = blog;
//   const { title, image, author, publishedAt } = metadata;

//   return (
//     <section className="pb-24 pt-32">
//       <div className="container max-w-3xl">
//         <Link
//           href="/blogs"
//           className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
//         >
//           <ArrowLeftIcon className="h-5 w-5" />
//           <span>Back to blogs</span>
//         </Link>

//         {image && (
//           <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
//             <Image
//               src={image}
//               alt={title || ""}
//               className="object-cover"
//               fill
//             />
//           </div>
//         )}

//         <header>
//           <h1 className="title no-underline">{title}</h1>
//           <div className="flex items-center space-x-4 mt-3">
//             <div className="relative h-10 w-10 overflow-hidden rounded-full">
//               <Image
//                 src="/najib.jpg"
//                 alt={author || "Author"}
//                 className="object-cover"
//                 fill
//               />
//             </div>
//             <p className="text-xs text-muted-foreground">
//               {author}, {formatDate(publishedAt ?? "")}
//             </p>
//           </div>
//         </header>

//         <main className="prose mt-16 dark:prose-invert">
//           <MDXContent source={content} />
//         </main>

//         <footer className="mt-16">
//           <Subscribe />
//         </footer>
//       </div>
//     </section>
//   );
// }