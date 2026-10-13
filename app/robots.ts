import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const isProduction = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === 'production'
  : process.env.NODE_ENV === 'production';

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
