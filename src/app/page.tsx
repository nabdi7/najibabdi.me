import React from "react";
import type { Metadata } from 'next/types'
import About from "@/components/about/about";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Najib Abdi - Software Engineer",
  description:
    "Software engineer with a passion for machine learning, algorithms, and software development. Exploring cutting-edge technology and computational methods.",
  keywords: [
    "software engineer",
    "machine learning",
    "algorithm",
    "software development",
    "AI",
    "computational methods",
    "Najib Abdi",
    "technical papers",
    "computer science",
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
    title: "Najib Abdi - Software Engineer",
    description:
      "Software engineer with a passion for machine learning, algorithms, and software development. Exploring cutting-edge technology and computational methods.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Najib Abdi's Software Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Najib Abdi - Software Engineer",
    description:
      "Software engineer with a passion for machine learning, algorithms, and software development.",
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

export default function Home() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <About />
      </div>
    </section>
  );
}
