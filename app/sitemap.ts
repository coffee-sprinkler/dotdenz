import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: siteConfig.updated },
    ...projects
      .filter((p) => p.published)
      .map((p) => ({
        url: `${siteConfig.url}${p.path}`,
        lastModified: p.updated,
      })),
  ];
}
