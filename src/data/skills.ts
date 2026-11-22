export type Tone = 'navy' | 'blue' | 'surface' | 'light' | 'accent';

export interface Tool { name: string; logo: string; tone: Tone }
export interface Shelf { title: string; tools: Tool[] }

export const shelves: Shelf[] = [
  {
    title: 'Design',
    tools: [
      { name: 'Figma', logo: 'figma', tone: 'blue' },
      { name: 'Paper', logo: 'paper', tone: 'accent' },
      { name: 'Photoshop', logo: 'photoshop', tone: 'navy' },
    ],
  },
  {
    title: 'Code',
    tools: [
      { name: 'Claude Code', logo: 'claude-code', tone: 'navy' },
      { name: 'Codex', logo: 'codex', tone: 'blue' },
      { name: 'VS Code', logo: 'vscode', tone: 'surface' },
      { name: 'GitHub', logo: 'github', tone: 'light' },
    ],
  },
  {
    title: 'Workflow',
    tools: [
      { name: 'Notion', logo: 'notion', tone: 'light' },
      { name: 'Claude', logo: 'claude', tone: 'blue' },
      { name: 'Behance', logo: 'behance', tone: 'navy' },
    ],
  },
];

/** Heights match the Figma "Skill Book" instances. */
export const skills: { name: string; tone: Tone; height: number }[] = [
  { name: 'UX design', tone: 'navy', height: 137 },
  { name: 'UI design', tone: 'blue', height: 130 },
  { name: 'Product design', tone: 'surface', height: 180 },
  { name: 'UX research', tone: 'light', height: 155 },
  { name: 'Design systems', tone: 'blue', height: 184 },
  { name: 'Interaction design', tone: 'navy', height: 205 },
  { name: 'Usability testing', tone: 'surface', height: 191 },
  { name: 'No-code', tone: 'accent', height: 125 },
  { name: 'Accessibility', tone: 'blue', height: 160 },
];
