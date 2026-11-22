import { img, slide, strip, type CaseStudy } from './types';

const p = 'Vortex';

export const vortex: CaseStudy = {
  slug: 'vortex',
  title: 'Vortex',
  subtitle: 'Brand identity and website for a conceptual AI agency.',
  meta: [
    { label: 'Role', value: ['UX/UI Designer', 'Solo project'] },
    { label: 'Type', value: ['Concept project'] },
    { label: 'Platform', value: ['Web, desktop'] },
    { label: 'Tools', value: ['Figma'] },
    { label: 'Deliverables', value: ['Brand identity', 'Landing page', 'Pixel-art illustrations'] },
  ],
  cover: { src: img('vortex/cover'), alt: 'Vortex website with pixel-art illustrations' },
  sections: [slide(p, 'overview', 'Overview', ['overview']), strip(p, 'final-design', 'Final design', 6)],
};
