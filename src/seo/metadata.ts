import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants';

type GenerateMetadataProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
};

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = '/images/og-image.jpg',
  canonical,
}: GenerateMetadataProps = {}): Metadata {
  const metaTitle = title ? `${title} | ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`;
  const metaDescription = description || SITE_CONFIG.description;
  const metaKeywords = keywords || 'clothing shop, fashion, men clothing, women clothing, kids clothing, online shopping';

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: SITE_CONFIG.name }],
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
    alternates: canonical ? { canonical } : undefined,
  };
}
