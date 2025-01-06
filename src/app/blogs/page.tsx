import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getBlogs } from "@/lib/blogs";
import BlogsWithSearch from "@/components/blogs/blogs-with-search";
import Subscribe from "@/components/subscribe/Subscribe";

export const metadata: Metadata = {
  title: "Najib Abdi - Blogs",
  description:
    "Blog articles on software development, web development, mobile app development, science and more.",
  keywords: [
    "software development blogs",
    "web development articles",
    "mobile app development",
    "tech blogs",
    "programming tutorials",
    "Najib Abdi blogs",
    "software engineering insights",
    "coding tips",
    "tech articles",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteConfig.url}/blogs`,
    title: "Najib Abdi - Blogs",
    description:
      "Blog articles on software development, web development, mobile app development, science and more.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Najib Abdi's Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Najib Abdi - Blogs",
    description:
      "Blog articles on software development, web development, mobile app development, science and more.",
    creator: "@najibabdi7",
    images: [`${siteConfig.url}/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h1 className="title no-underline mb-12">Blogs</h1>

        <BlogsWithSearch blogs={blogs} />
        <div className="mt-16">
          <Subscribe />
        </div>
      </div>
    </section>
  );
}
