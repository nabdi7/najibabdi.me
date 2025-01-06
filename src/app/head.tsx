import { siteConfig } from '@/config/site'

export default function Head() {
  return (
    <>
      <title>{siteConfig.name} | Software Engineer</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta charSet="utf-8" />
      <link rel="apple-touch-icon" sizes="57x57" href="/favicon.ico" />

      {/* Primary Meta Tags */}
      <meta name="title" content={siteConfig.name} />
      <meta name="description" content={siteConfig.description} />
      <meta name="keywords" content="software engineer, full stack, mobile app development, machine learning, {siteConfig.name}" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:title" content={siteConfig.name} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:image" content={`${siteConfig.url}/og-image.jpg`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteConfig.url} />
      <meta property="twitter:title" content={siteConfig.name} />
      <meta property="twitter:description" content={siteConfig.description} />
      <meta property="twitter:image" content={`${siteConfig.url}/og-image.jpg`} />

      <link rel="icon" href="/favicon.ico" />
    </>
  )
}