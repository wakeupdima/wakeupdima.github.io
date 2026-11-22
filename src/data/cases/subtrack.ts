import { img, slide, type CaseStudy } from './types';

const p = 'SubTrack';

export const subtrack: CaseStudy = {
  slug: 'subtrack',
  title: 'SubTrack',
  subtitle: 'See every subscription before it charges.',
  meta: [
    { label: 'Role', value: ['UX/UI Designer', 'Solo project'] },
    { label: 'Timeline', value: ['Sep–Oct 2026'] },
    { label: 'Platform', value: ['iOS'] },
    { label: 'Tools', value: ['Figma, Notion'] },
    { label: 'Deliverables', value: ['Research & testing', 'UX/UI design', 'Prototype'] },
  ],
  cover: { src: img('subtrack/cover'), alt: 'SubTrack app screens' },
  sections: [
    slide(p, 'overview', 'Overview', ['01-overview']),
    slide(p, 'challenge', 'The challenge', ['02-challenge'], 'challenge'),
    slide(p, 'research', 'Research', ['03-research']),
    slide(p, 'user-journey', 'User & journey', ['04-user-journey'], 'user and journey'),
    slide(p, 'goals', 'Goals', ['05-goals']),
    slide(p, 'information-architecture', 'Information architecture', ['06-information-architecture']),
    slide(p, 'user-flow', 'Core user flow', ['07-user-flow']),
    slide(p, 'key-features', 'Key features', ['08-key-features-1', '08-key-features-2']),
    slide(p, 'visual-direction', 'Visual direction', ['09-visual-direction']),
    slide(p, 'design-system', 'Design system', ['10-design-system']),
  ],
};
