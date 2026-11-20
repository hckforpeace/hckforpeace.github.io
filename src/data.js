/*
 * ────────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE. Edit this file, nothing else.
 *  Everything marked TODO is placeholder — swap in real details.
 * ────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Damien',
  // TODO: your actual title
  role: 'Software Engineer',
  // Shown as the big hero statement. Keep it to ~12 words.
  tagline: 'I build things for the web that are fast, sharp and hard to break.',
  // One short paragraph, first person.
  bio: `TODO: two or three sentences about what you do, what you care about,
  and what kind of problems you like being handed. Say what you are good at
  without padding — the projects below do the proving.`,
  location: 'France',
  email: 'damien@prestancelab.com',
  available: true,
  availableLabel: 'Open to new projects',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/hckforpeace', icon: 'github' },
  // TODO: replace with your real profile URLs, or delete the lines you don't want.
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:damien@prestancelab.com', icon: 'mail' },
]

/*
 * Projects. `featured: true` makes the card span two columns.
 * `accent` picks the card's glow: 'violet' | 'cyan' | 'pink'
 */
export const projects = [
  {
    title: 'TODO — Flagship project',
    year: '2026',
    blurb:
      'What it does in one sentence, then why it was hard. Lead with the outcome, not the tech.',
    detail:
      'A second line for the thing you are actually proud of — the constraint you worked around, the scale it handles, the metric it moved.',
    tags: ['React', 'TypeScript', 'Postgres'],
    links: { live: '#', repo: 'https://github.com/hckforpeace' },
    accent: 'violet',
    featured: true,
  },
  {
    title: 'TODO — Second project',
    year: '2025',
    blurb: 'One sentence on what it is and who it is for.',
    tags: ['Python', 'FastAPI'],
    links: { repo: 'https://github.com/hckforpeace' },
    accent: 'cyan',
  },
  {
    title: 'TODO — Third project',
    year: '2025',
    blurb: 'One sentence. Specific beats impressive.',
    tags: ['Nix', 'CI/CD'],
    links: { repo: 'https://github.com/hckforpeace' },
    accent: 'pink',
  },
  {
    title: 'TODO — Fourth project',
    year: '2024',
    blurb: 'Side projects count — say what you learned building it.',
    tags: ['WebGL', 'Canvas'],
    links: { live: '#' },
    accent: 'violet',
  },
]

/*
 * Experience, newest first. `current: true` gets the pulsing marker.
 */
export const experience = [
  {
    company: 'TODO — Current employer',
    role: 'TODO — Your role',
    period: '2024 — Present',
    current: true,
    points: [
      'What you own, in one line.',
      'A result with a number in it, if you have one.',
    ],
    stack: ['React', 'Node', 'AWS'],
  },
  {
    company: 'TODO — Previous employer',
    role: 'TODO — Your role',
    period: '2022 — 2024',
    points: [
      'What you shipped and who used it.',
      'Something you improved rather than just maintained.',
    ],
    stack: ['Vue', 'Python'],
  },
  {
    company: 'TODO — Education or first role',
    role: 'TODO — Degree or title',
    period: '2019 — 2022',
    points: ['Keep this one short.'],
    stack: [],
  },
]

export const stack = [
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL', 'Bash'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Vite', 'Tailwind', 'WebGL', 'Motion'],
  },
  {
    group: 'Backend & data',
    items: ['Node', 'FastAPI', 'Postgres', 'Redis', 'GraphQL'],
  },
  {
    group: 'Infra',
    items: ['Nix', 'Docker', 'GitHub Actions', 'Terraform', 'Linux'],
  },
]

// The scrolling strip under the hero.
export const marquee = [
  'React', 'TypeScript', 'Nix', 'Postgres', 'WebGL', 'Python',
  'Docker', 'GitHub Actions', 'Tailwind', 'Go', 'Linux', 'Redis',
]

export const sections = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]
