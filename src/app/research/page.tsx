import React from "react";
import type { Metadata } from 'next/types'
// import Research from "@/components/research/research";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Najib Abdi - Research & Publications",
  description:
    "Academic research and publications on machine learning, algorithms, software development, and computer science. Exploring cutting-edge technology and computational methods.",
  keywords: [
    "machine learning research",
    "algorithm research",
    "computer science research",
    "software development research",
    "academic publications",
    "AI research",
    "computational methods",
    "Najib Abdi research",
    "technical papers",
    "computer science publications",
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
    canonical: "/research",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteConfig.url}/research`,
    title: "Najib Abdi - Research & Publications",
    description:
      "Academic research and publications on machine learning, algorithms, software development, and computer science. Exploring cutting-edge technology and computational methods.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Najib Abdi's Research Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Najib Abdi - Research & Publications",
    description:
      "Academic research and publications in machine learning, algorithms, and computer science.",
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
  // verification: {
  //   google: 'your-google-verification-code',
  //   'google-scholar': 'your-google-scholar-id',
  // },
  // other: {
  //   'citation_author': siteConfig.author,
  //   'citation_publication_date': new Date().getFullYear().toString(),
  //   'dc.type': 'Research',
  //   'dc.subject': 'Computer Science, Machine Learning, Software Development',
  //   'dc.rights': 'All rights reserved',
  //   'dc.language': 'en',
  // },
};

export default async function Research() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h1 className="title no-underline text-foreground">Research</h1>
        <p className="mt-3 font-light text-muted-foreground">In progress...</p>
      </div>
      {/* <Research /> */}
    </section>
  );
}
