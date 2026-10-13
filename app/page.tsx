import { createMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata = createMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: '/',
  absoluteTitle: true,
});

export default function Home() {
  return <h1>Hello World</h1>;
}
