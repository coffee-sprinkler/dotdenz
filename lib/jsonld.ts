import { siteConfig } from './site';

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;
const sameAs = Object.values(siteConfig.social).filter(Boolean);

function personSchema() {
  return {
    '@type': 'Person',
    '@id': personId,
    name: siteConfig.fullName,
    url: siteConfig.url,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    knowsAbout: siteConfig.skills,
    address: { '@type': 'PostalAddress', addressCountry: siteConfig.country },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { '@id': personId },
  };
}

// Rendered once in the root layout.
export function siteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [personSchema(), websiteSchema()],
  };
}

// For project / case study pages.
export function projectSchema(p: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.name,
    description: p.description,
    url: `${siteConfig.url}${p.path}`,
    inLanguage: siteConfig.language,
    author: { '@id': personId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
