import { subtrack } from './subtrack';
import { partwise } from './partwise';
import { vortex } from './vortex';
import { motionly } from './motionly';
import { projects } from '../projects';
import type { CaseStudy } from './types';

const bySlug: Record<string, CaseStudy> = { subtrack, partwise, vortex, motionly };

/** Cases in the same order as the Home carousel (also the "Next project" loop). */
export const cases: CaseStudy[] = projects.map((p) => bySlug[p.slug]);

export function nextCase(slug: string): CaseStudy {
  const i = cases.findIndex((c) => c.slug === slug);
  return cases[(i + 1) % cases.length];
}

export type { CaseStudy } from './types';
