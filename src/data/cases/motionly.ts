import { img, slide, strip, type CaseStudy } from './types';

const p = 'Motionly';

export const motionly: CaseStudy = {
  slug: 'motionly',
  title: 'Motionly',
  subtitle: 'Landing page for a marketing agency.',
  meta: [
    { label: 'Role', value: ['UX/UI Designer', 'Solo project'] },
    { label: 'Type', value: ['Concept project'] },
    { label: 'Platform', value: ['Web, desktop'] },
    { label: 'Tools', value: ['Figma'] },
    { label: 'Deliverables', value: ['Research', 'Wireframes', 'UI design', 'Illustrations'] },
  ],
  cover: { src: img('motionly/cover'), alt: 'Motionly landing page' },
  sections: [
    slide(p, 'overview', 'Overview', ['overview']),
    slide(p, 'problem-solution', 'Problem & solution', ['problem-solution'], 'problem and solution'),
    slide(p, 'design-approach', 'Design approach', ['design-approach']),
    slide(p, 'process', 'Process', ['process']),
    slide(p, 'key-solutions', 'Key solutions', ['key-solutions']),
    strip(p, 'final-design', 'Final design', 9),
  ],
};
