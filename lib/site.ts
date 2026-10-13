export const siteConfig = {
  name: 'Denz',
  fullName: 'Dennis Duplon',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dotdenz.dev').replace(
    /\/$/,
    '',
  ),
  title: 'Denz | WordPress & Frontend Developer',
  description:
    'Frontend developer building fast, accessible WordPress sites with ACF Pro and custom themes, now expanding into Next.js and full-stack projects.',
  jobTitle: 'Frontend Developer',
  language: 'en',
  locale: 'en_PH',
  country: 'PH',
  skills: [
    'WordPress',
    'ACF Pro',
    'PHP',
    'JavaScript',
    'React',
    'Vue',
    'Next.js',
  ],
  themeColor: { light: '#ffffff', dark: '#0a0a0a' },
  updated: '2026-10-13', // bump when home content changes (sitemap lastmod)

  social: {
    github: '',
    linkedin: '',
    x: '',
  },
};
