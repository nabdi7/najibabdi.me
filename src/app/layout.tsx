import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next/types'
import { Inter, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local' 
import Script from "next/script";
import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/components/theme/providers'
import Header from '@/components/navbar/header'
import Footer from '@/components/footer/footer'
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'], 
  variable: '--font-serif'
})
// Uthmanic font
const uthmanic = localFont({
  src: '../../public/fonts/Uthmanic-Script.woff2', 
  variable: '--font-uthmanic'
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Najib Abdi",
    "Web Developer",
    "Software Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    "Computer Science",
    "Software Development",
  ],
  authors: [
    {
      name: "Najib Abdi",
      url: "https://najibabdi.me",
    },
  ],
  creator: "Najib Abdi",
  publisher: "Najib Abdi",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Najib Abdi - Software Engineer",
    description: "Najib Abdi is a full stack and mobile app developer",
    images: [`/opengraph-image.png`],
    creator: "@najibabdi",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YFK3CZKZKQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YFK3CZKZKQ');
          `}
        </Script>
      </head>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable,
          uthmanic.variable 
        )}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSGSTWJ6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Providers>
          <Header />
          <main className='grow'>{children} <Analytics /> <SpeedInsights /></main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
