/*
 * ────────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE. Edit this file, nothing else.
 *  Sourced from Pierre_Beylouni_CV.tex and the public repos.
 *  Deliberately omitted: phone number, postal address.
 * ────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Pierre',
  fullName: 'Pierre Beylouni',
  role: 'Software engineer — Agentic AI · Backend · Infrastructure · Product',
  tagline: 'I build software products.',
  bio: `BSc in Computer Science from the University of Poitiers, then the core
  curriculum at École 42. Nearly two years of engineering experience — a Paris
  startup and Airbus Defence and Space. I build software products end to end,
  with a bias towards agentic AI, solid services and the infrastructure that
  carries them, and I'm looking for a full-time role doing exactly that.`,
  location: 'Paris, France',
  email: 'beylouni.pierre@gmail.com',
  available: true,
  availableLabel: 'Open to full-time software engineering roles',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/hckforpeace', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pierre-beylouni-79051418a',
    icon: 'linkedin',
  },
  { label: 'Email', href: 'mailto:beylouni.pierre@gmail.com', icon: 'mail' },
]

/*
 * `featured: true` makes a card span two columns.
 * `accent` picks the card's glow: 'violet' | 'cyan' | 'pink'
 * `status` adds a pulsing pill next to the year, e.g. 'Ongoing' — omit it when done.
 */
export const projects = [
  {
    title: 'Durable Agents',
    year: '2026',
    blurb:
      'An agent runtime for long-running AI work you should not have to babysit: you describe the job as an ordered list of plain-English steps, and it carries them out end to end.',
    detail:
      'Runs keep going across crashes, restarts and deploys without ever redoing finished work, and can be paused, inspected or resumed at any point. A web dashboard shows what every run is doing and how far it has got.',
    tags: ['Python', 'FastAPI', 'Temporal', 'PostgreSQL', 'MCP', 'React'],
    links: { repo: 'https://github.com/hckforpeace/Durable-Agents' },
    accent: 'violet',
    featured: true,
  },
  {
    title: 'Transcendence',
    year: '2025',
    blurb:
      'A real-time multiplayer Pong platform with accounts, matchmaking and tournaments — the final project of the École 42 core curriculum, built by a team of four.',
    detail:
      'Players sign in, get matched and play in the browser, against each other or against an AI opponent that learned the game by playing it. Built to stand up as a real deployment — secured, monitored and self-healing — rather than a demo on a laptop.',
    tags: ['Node.js', 'Fastify', 'Docker', 'Kubernetes', 'Argo CD', 'Vault'],
    links: { repo: 'https://github.com/hckforpeace/Transcendance' },
    accent: 'cyan',
  },
  {
    title: 'RAG against the machine',
    year: '2026',
    blurb:
      'Ask a question about a codebase nobody has read in full and get an answer drawn from the source, with a pointer to exactly where it came from.',
    detail:
      'Built over the vLLM project — 2,874 files of Python and Markdown, far more than fits in any single prompt. Answers are checked against a hand-labelled set rather than eyeballed, so improvements are measured rather than assumed.',
    status: 'Ongoing',
    tags: ['Python', 'uv', 'Qwen3'],
    links: { repo: 'https://github.com/hckforpeace/RAG-against-the-machine' },
    accent: 'pink',
  },
  {
    title: 'NixOS configuration',
    year: '2026',
    blurb:
      'My whole Linux environment as code: every machine I work on rebuilt from one repository, identically, with nothing configured by hand.',
    detail:
      'A fresh machine goes from blank to ready in a single command, and any change that breaks something can be rolled back wholesale. Adding another machine means describing only what is different about it.',
    tags: ['Nix', 'Linux', 'i3'],
    links: { repo: 'https://github.com/hckforpeace/nixos-config' },
    accent: 'violet',
  },
  {
    title: 'Self-hosted infrastructure',
    year: '2024 — now',
    blurb:
      'A home server that keeps my data mine — private photo library, password vault and AI models that run locally — on hardware I own and reachable only by me.',
    tags: ['TrueNAS', 'ZFS', 'Docker', 'Tailscale', 'Ollama'],
    links: { repo: 'https://github.com/hckforpeace/truenas_project' },
    accent: 'cyan',
  },
]

/*
 * Newest first. `current: true` gets the pulsing marker.
 */
export const experience = [
  {
    company: 'Tamtam · Paris',
    role: 'Product Engineer (internship)',
    period: 'Jan — Jul 2026',
    points: [
      'Built the tools behind the product’s backend agent, so customer success teams could assemble LLM workflows that call custom tools and run actions on a customer’s behalf instead of repeating them by hand.',
      'Shipped an MCP server exposing a customer’s CRM to the in-app AI assistant, so users ask the LLM in plain language about records they keep in HubSpot or Salesforce.',
      'Took front-end, backend and agentic features end to end, from scoping to production.',
    ],
    stack: ['Go', 'Echo', 'Temporal', 'PostgreSQL', 'MCP', 'Kubernetes'],
  },
  {
    company: 'Airbus Defence and Space (Cyber) · Élancourt',
    role: 'Software Engineer (apprenticeship)',
    period: 'Sep 2025 — Jan 2026',
    points: [
      'Refactored Java/JAX-RS modules on the CSOAR product, fixed bugs and wrote JUnit tests to clear SonarQube quality gates.',
    ],
    stack: ['Java', 'JAX-RS', 'JUnit', 'SonarQube'],
  },
  {
    company: 'University of Poitiers',
    role: 'Cybersecurity R&D Intern',
    period: 'Apr — Jul 2023',
    points: [
      'Built a training cyberrange that teaches secure coding to student developers.',
    ],
    stack: ['PHP', 'MySQL'],
  },
  {
    company: 'Potech Consulting · Beirut',
    role: 'Threat Intelligence Intern',
    period: 'Jun — Aug 2021',
    points: [
      'Wrote Python modules for passive reconnaissance and phishing detection, and supported penetration tests on web applications.',
    ],
    stack: ['Python', 'OSINT'],
  },
]

export const education = [
  {
    school: 'École 42, Paris',
    detail:
      'Core curriculum completed — selective, project-based, peer-to-peer engineering school; C/C++ systems programming.',
    period: '2023 — 2025',
  },
  {
    school: 'University of Poitiers',
    detail: 'BSc in Computer Science.',
    period: '2020 — 2023',
  },
]

export const stack = [
  {
    group: 'Languages',
    items: ['Go', 'TypeScript', 'Python', 'C', 'C++', 'Java', 'SQL'],
  },
  {
    group: 'Backend & data',
    items: ['Temporal', 'Echo', 'Node.js', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
  {
    group: 'AI agents & LLMs',
    items: ['MCP servers & gateways', 'Tool design', 'Anthropic API', 'Agent loops', 'Ollama'],
  },
  {
    group: 'Infra & cloud',
    items: ['Kubernetes', 'Helm', 'Argo CD', 'Docker', 'AWS ECS', 'Nix', 'Prometheus', 'Grafana'],
  },
]

// The scrolling strip under the hero.
export const marquee = [
  'Go', 'Temporal', 'MCP', 'Kubernetes', 'PostgreSQL', 'Python',
  'TypeScript', 'Docker', 'Argo CD', 'React', 'Nix', 'Linux',
]

export const sections = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]
