import type { Metadata } from 'next';
import { siteConfig } from './site';

type PageMeta = {
  title: string;
  description: string;
  path: string; // "/movie-tracker"
  absoluteTitle?: boolean; // true = skip the "| Denz" template (home page)
  noIndex?: boolean;
  type?: 'website' | 'article';
};

export function createMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
  type = 'website',
}: PageMeta): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: { card: 'summary_large_image', title, description },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
