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
  role: 'Software engineer — backend, product & AI agent infrastructure',
  tagline:
    'I build backend systems and agent runtimes that survive contact with reality.',
  bio: `BSc in Computer Science from the University of Poitiers, then the core
  curriculum at École 42. Nearly two years of engineering experience — a Paris
  startup and Airbus Defence and Space. I work mainly on backend services,
  agentic AI, infrastructure and DevOps, and I'm looking for a full-time role
  in those areas.`,
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
 */
export const projects = [
  {
    title: 'Durable Agents',
    year: '2026',
    blurb:
      'An LLM agent runtime where you author a harness — an ordered list of plain-English steps, each with its own tool allowlist and turn budget.',
    detail:
      'Every step runs as a bounded agent loop inside a Temporal workflow, so killing a worker mid-flight and restarting it carries the run on without redoing finished work. Tools come from MCP servers; only a short carry-over summary crosses between steps, so a ten-step harness never accumulates ten steps of context. Pause and resume are Temporal signals rather than database flags.',
    tags: ['Python', 'FastAPI', 'Temporal', 'PostgreSQL', 'MCP', 'React'],
    links: { repo: 'https://github.com/hckforpeace/Durable-Agents' },
    accent: 'violet',
    featured: true,
  },
  {
    title: 'Transcendence',
    year: '2025',
    blurb:
      'A containerised real-time Pong platform with tournaments — the final project of the École 42 core curriculum, built by a team of four.',
    detail:
      'Node.js and Fastify backend, Google Sign-In and 2FA, a Q-learning AI opponent, a hardened ModSecurity WAF with HashiCorp Vault, Grafana and Prometheus monitoring, and Kubernetes deployment through Argo CD.',
    tags: ['Node.js', 'Fastify', 'Docker', 'Kubernetes', 'Argo CD', 'Vault'],
    links: { repo: 'https://github.com/hckforpeace/Transcendance' },
    accent: 'cyan',
  },
  {
    title: 'RAG against the machine',
    year: '2026',
    blurb:
      'A retrieval-augmented generation pipeline built end to end over the vLLM source tree — 2,874 files, ~38 MB of Python and Markdown.',
    detail:
      'Retrieved sources are character spans, not copies: a file path plus a range, scored with recall@k against a labelled set. Work in progress, built milestone by milestone.',
    tags: ['Python', 'uv', 'Qwen3'],
    links: { repo: 'https://github.com/hckforpeace/RAG-against-the-machine' },
    accent: 'pink',
  },
  {
    title: 'NixOS configuration',
    year: '2026',
    blurb:
      'Flake-based, fully declarative NixOS config pinned to a single nixpkgs commit — no hand-edited files anywhere on the system.',
    detail:
      'Split into portable modules and per-machine hosts, so standing up a second machine means writing one new host directory and touching nothing shared.',
    tags: ['Nix', 'Linux', 'i3'],
    links: { repo: 'https://github.com/hckforpeace/nixos-config' },
    accent: 'violet',
  },
  {
    title: 'Self-hosted infrastructure',
    year: '2024 — now',
    blurb:
      'A TrueNAS/ZFS server running local LLM inference with Ollama, plus Immich and Vaultwarden, all reachable only through a Tailscale VPN.',
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
