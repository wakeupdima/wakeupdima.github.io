import type { ImageMetadata } from 'astro';
import subtrackPreview from '../assets/projects/subtrack-preview.png';
import partwisePreview from '../assets/projects/partwise-preview.png';
import vortexPreview from '../assets/projects/vortex-preview.png';
import motionlyPreview from '../assets/projects/motionly-preview.png';

export interface Project {
  slug: string;
  name: string;
  description: string;
  meta: string[];
  preview: ImageMetadata;
  previewAlt: string;
  website?: string;
}

/** Order matters: carousel loop and "Next project" follow it. */
export const projects: Project[] = [
  {
    slug: 'subtrack',
    name: 'SubTrack',
    description: 'See every subscription before it charges.',
    meta: ['UX/UI case study', 'Mobile', '2026'],
    preview: subtrackPreview,
    previewAlt: 'SubTrack case study cover',
  },
  {
    slug: 'partwise',
    name: 'Partwise',
    description: 'B2B site for sourcing electronic components to Ukraine.',
    meta: ['UX/UI concept', 'Web', 'Designed and coded', '2026'],
    preview: partwisePreview,
    previewAlt: 'Partwise case study cover',
    website: 'https://wakeupdima.github.io/partwise/',
  },
  {
    slug: 'vortex',
    name: 'Vortex',
    description: 'Brand identity and website for a conceptual AI agency.',
    meta: ['Concept', 'Branding and web'],
    preview: vortexPreview,
    previewAlt: 'Vortex case study cover',
  },
  {
    slug: 'motionly',
    name: 'Motionly',
    description: 'Landing page for a marketing agency.',
    meta: ['Concept', 'Web'],
    preview: motionlyPreview,
    previewAlt: 'Motionly case study cover',
  },
];
