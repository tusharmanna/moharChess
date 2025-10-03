import { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

const DEFAULT_METADATA = {
  siteName: "MoharChess",
  siteUrl: "https://moharchess.com",
  defaultOgImage: "/images/mohar.jpg",
  twitterHandle: "@moharchess",
};

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = DEFAULT_METADATA.defaultOgImage,
}: PageMetadata): Metadata {
  const fullTitle = `${title} | ${DEFAULT_METADATA.siteName}`;
  const fullUrl = DEFAULT_METADATA.siteUrl;

  return {
    title: fullTitle,
    description,
    keywords: keywords || "chess, kids, children, chess classes, chess lessons, chess school, chess training, mohar chess",
    authors: [{ name: "MoharChess" }],
    creator: "MoharChess",
    publisher: "MoharChess",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: fullUrl,
      siteName: DEFAULT_METADATA.siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: DEFAULT_METADATA.twitterHandle,
    },
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
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}
