import { ArrowUpRight, Github } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import { projects } from '../data.js'

const GLOW = {
  violet: 'rgba(167,139,250,0.55)',
  cyan: 'rgba(34,211,238,0.45)',
  pink: 'rgba(244,114,182,0.45)',
}

const BAR = {
  violet: 'from-accent/80',
  cyan: 'from-accent-2/80',
  pink: 'from-accent-3/80',
}

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <SectionHeading
        index="01"
        title="Selected work"
        lead="A few things I've built end to end — the constraints mattered more than the stack."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 0.07}
            className={p.featured ? 'sm:col-span-2' : ''}
          >
            <TiltCard
              glow={GLOW[p.accent] ?? GLOW.violet}
              max={p.featured ? 4 : 7}
              className="h-full"
            >
              <div className="flex h-full flex-col p-7 sm:p-9">
                <div className="mb-6 flex items-start justify-between gap-6">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-bright sm:text-[1.7rem]">
                    {p.title}
                  </h3>
                  <span className="shrink-0 font-display text-xs tracking-[0.2em] text-muted">
                    {p.year}
                  </span>
                </div>

                <p className="text-[0.975rem] leading-relaxed text-muted">
                  {p.blurb}
                </p>
                {p.detail && (
                  <p className="mt-3 max-w-2xl text-[0.975rem] leading-relaxed text-muted/80">
                    {p.detail}
                  </p>
                )}

                <div className="mt-7 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-bright/4 px-3 py-1 text-xs tracking-wide text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-5 pt-8">
                  {p.links?.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link flex items-center gap-1.5 text-sm font-medium text-bright"
                    >
                      Live site
                      <ArrowUpRight
                        size={15}
                        className="text-accent transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  )}
                  {p.links?.repo && (
                    <a
                      href={p.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-bright"
                    >
                      <Github size={15} />
                      Source
                    </a>
                  )}
                </div>

                {/* Accent bar that wipes in on hover. */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r ${
                    BAR[p.accent] ?? BAR.violet
                  } to-transparent transition-transform duration-700 group-hover:scale-x-100`}
                />
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
