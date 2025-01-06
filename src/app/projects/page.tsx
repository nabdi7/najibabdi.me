import React from "react";
import { Metadata } from "next";
import ProjectsList from "@/components/projects/Projects";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Najib Abdi - Projects",
  description:
    "Explore Najib Abdi's software engineering projects, including full-stack applications, mobile apps, and innovative solutions in web development.",
  keywords: [
    "software engineering projects",
    "web development portfolio",
    "mobile app projects",
    "Najib Abdi portfolio",
    "full stack projects",
    "software development showcase",
    "React projects",
    "programming portfolio",
    "tech projects",
    "software solutions",
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
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteConfig.url}/projects`,
    title: "Najib Abdi - Projects",
    description:
      "Explore Najib Abdi's software engineering projects, including full-stack applications, mobile apps, and innovative solutions in web development.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Najib Abdi's Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Najib Abdi - Projects",
    description:
      "Explore Najib Abdi's software engineering projects, including full-stack applications, mobile apps, and innovative solutions in web development.",
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

export default async function Projects() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <ProjectsList />
      </div>
    </section>
  );
}
