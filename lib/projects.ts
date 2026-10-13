export type Project = {
  title: string;
  description: string;
  path: string;
  updated: string; // YYYY-MM-DD, change only on meaningful edits
  published: boolean;
};

export const projects: Project[] = [
  {
    title: 'Movie Tracker',
    description:
      'Movie browser built with Next.js: search, URL-driven filters, and cached API responses.',
    path: '/movie-tracker',
    updated: '2026-10-13',
    published: false,
  },
  {
    title: 'Expense Tracker',
    description:
      'Expense tracker with charts, Supabase auth, and row-level security.',
    path: '/expense-tracker',
    updated: '2026-10-13',
    published: false,
  },
  {
    title: 'Job Application Tracker',
    description:
      'Kanban-style job tracker with auth, CRUD, and server actions.',
    path: '/job-tracker',
    updated: '2026-10-13',
    published: false,
  },
  {
    title: 'UI Component Library',
    description: 'Accessible, typed component library with Storybook docs.',
    path: '/ui',
    updated: '2026-10-13',
    published: false,
  },
];
