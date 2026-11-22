import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../../assets/cases/**/*.png', { eager: true });

/** Resolve a case image by its short path, e.g. `img('subtrack/01-overview')`. */
export function img(path: string): ImageMetadata {
  const file = files[`../../assets/cases/${path}.png`];
  if (!file) throw new Error(`Case image not found: ${path}`);
  return file.default;
}

export interface CaseImage {
  src: ImageMetadata;
  alt: string;
}

export type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; image: CaseImage }
  /** Long landing pages: images stacked with no gaps, one rounded frame */
  | { type: 'strip'; images: CaseImage[] }
  | { type: 'cards'; cards: { title: string; text: string }[] }
  | { type: 'buttons'; buttons: { label: string; href: string; variant: 'secondary' | 'ghost' }[] };

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  /** Each value is a list of lines */
  meta: { label: string; value: string[] }[];
  cover: CaseImage;
  sections: Section[];
}

/** Section with a heading and one image (SubTrack-style slides). */
export function slide(project: string, id: string, title: string, files: string[], altBase = title): Section {
  return {
    id,
    title,
    blocks: files.map((file, i) => ({
      type: 'image' as const,
      image: {
        src: img(`${project.toLowerCase()}/${file}`),
        alt: files.length > 1 ? `${project} ${altBase.toLowerCase()}, part ${i + 1}` : `${project} ${altBase.toLowerCase()}`,
      },
    })),
  };
}

/** Section showing a long page as a strip of images. */
export function strip(project: string, id: string, title: string, count: number): Section {
  return {
    id,
    title,
    blocks: [
      {
        type: 'strip',
        images: Array.from({ length: count }, (_, i) => ({
          src: img(`${project.toLowerCase()}/final-${i + 1}`),
          alt: `${project} final design, part ${i + 1} of ${count}`,
        })),
      },
    ],
  };
}
