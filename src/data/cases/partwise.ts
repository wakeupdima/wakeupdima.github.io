import { img, type CaseStudy } from './types';

export const partwise: CaseStudy = {
  slug: 'partwise',
  title: 'Partwise',
  subtitle: 'The right part. Sourced clearly.',
  meta: [
    { label: 'Role', value: ['UX/UI Designer', 'Solo project'] },
    { label: 'Type', value: ['Educational concept'] },
    { label: 'Timeline', value: ['Nov 2026'] },
    { label: 'Platform', value: ['Web'] },
    { label: 'Tools', value: ['Figma, Figma Motion,', 'Notion, HTML/CSS/JS'] },
  ],
  cover: { src: img('partwise/cover'), alt: 'Partwise landing page hero' },
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      blocks: [
        {
          type: 'p',
          text: 'Partwise is a Kyiv company that buys electronic components from suppliers in China and delivers them to order for businesses in Ukraine. The site is a small B2B catalogue with an enquiry form — no cart and no online payment: every purchase is agreed with a manager.',
        },
        { type: 'p', text: 'Educational UX/UI concept. Audience needs are hypotheses; interviews are planned.' },
      ],
    },
    {
      id: 'challenge',
      title: 'The challenge',
      blocks: [
        {
          type: 'p',
          text: 'Engineers and buyers need to check a part and request a price fast. Supplier sites in this niche hide the catalogue, use vague buttons like “Get started” and ask for long forms with a mandatory phone number.',
        },
      ],
    },
    {
      id: 'users',
      title: 'Users',
      blocks: [
        {
          type: 'cards',
          cards: [
            {
              title: 'Engineer',
              text: 'Studies a component: part number, manufacturer, parameters, dimensions, mounting and datasheet. Shares the link or part number with a buyer.',
            },
            {
              title: 'Buyer',
              text: 'Sends the exact part number and quantity. Needs the price, packaging, MOQ and delivery time to Ukraine.',
            },
          ],
        },
        { type: 'p', text: 'One interface for both roles, without sign-up or role switching.' },
      ],
    },
    {
      id: 'ux-principles',
      title: 'UX principles',
      blocks: [
        {
          type: 'list',
          items: [
            'The full part number stays with the user from the card to the enquiry.',
            'Purpose and key parameters first, details below.',
            'Datasheets open without sign-up; unknown parameters are marked.',
            '“To order” is never presented as “in stock in Kyiv”.',
            'Price in USD or “on request”.',
            'The short form continues the choice — no retyping the part number.',
          ],
        },
      ],
    },
    {
      id: 'competitor-review',
      title: 'Competitor review',
      blocks: [
        {
          type: 'list',
          items: [
            'Catalogue as its own menu item, not hidden in Services (Smith).',
            'One main path and field hints, no mandatory phone (Fusion).',
            'The selected model fills in automatically and the result of sending is clear (Mouser).',
            'Manufacturer part number kept separate from internal codes; datasheet right from the card (DigiKey, LCSC).',
          ],
        },
        { type: 'p', text: 'Expert hypotheses based on page structure, not user tests.' },
      ],
    },
    {
      id: 'catalogue',
      title: 'Catalogue',
      blocks: [
        {
          type: 'p',
          text: 'Six MEAN WELL SPBW06 DC/DC modules grouped by input range: F (9–36 V) and G (18–75 V). Each card shows the part number, input, output and current, with Datasheet and Request price.',
        },
        { type: 'image', image: { src: img('partwise/catalogue'), alt: 'Partwise catalogue with six DC/DC module cards' } },
      ],
    },
    {
      id: 'how-it-works',
      title: 'How it works',
      blocks: [
        {
          type: 'p',
          text: 'Three steps from a part number to a supply proposal. A sent enquiry does not reserve stock or confirm a purchase.',
        },
        { type: 'image', image: { src: img('partwise/how-it-works'), alt: 'Partwise “How it works” section with three steps' } },
      ],
    },
    {
      id: 'enquiry-form',
      title: 'Enquiry form',
      blocks: [
        {
          type: 'p',
          text: 'Part number, quantity and email are required; name or company is optional. The form has five states: default, prefilled from the catalogue, error, sending and success.',
        },
        { type: 'image', image: { src: img('partwise/enquiry-form'), alt: 'Partwise enquiry form' } },
      ],
    },
    {
      id: 'ux-audit',
      title: 'UX audit',
      blocks: [
        {
          type: 'list',
          items: [
            'Fixed header and section links shorten the path to an enquiry.',
            '“Request price” on every card instead of dead-end “View” buttons.',
            'Originality as a trust argument: card, process step, FAQ and a line by the form.',
            'Catalogue moved up to the third section; a duplicate statement block removed.',
            'Manager response time and a direct contact block added.',
          ],
        },
      ],
    },
    {
      id: 'visual-direction',
      title: 'Visual direction',
      blocks: [
        {
          type: 'p',
          text: 'Modern industrial tech: glass components on a light cream background, Chakra Petch for the interface and JetBrains Mono for labels, isometric illustrations animated in Figma Motion.',
        },
        { type: 'image', image: { src: img('partwise/visual-direction'), alt: 'Partwise visual direction: colors, type and illustrations' } },
      ],
    },
    {
      id: 'built-in-code',
      title: 'Built in code',
      blocks: [
        { type: 'p', text: 'The landing page is built with HTML, CSS and JavaScript and published on GitHub Pages.' },
        {
          type: 'buttons',
          buttons: [
            { label: 'Visit website ↗', href: 'https://wakeupdima.github.io/partwise/', variant: 'secondary' },
            { label: 'GitHub repository ↗', href: 'https://github.com/wakeupdima/partwise', variant: 'ghost' },
          ],
        },
      ],
    },
    {
      id: 'next-steps',
      title: 'Next steps',
      blocks: [
        {
          type: 'list',
          items: [
            'Run a UX test: understand the offer, find a part, check the datasheet, send an enquiry and describe the next step.',
            'Confirm business details: supplier checks, MOQ, real lead times, payment and delivery.',
            'Turn the project into a full case study.',
          ],
        },
      ],
    },
  ],
};
