import { GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { education, profile } from '../data.js'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      {/* Soft bloom behind the section. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/8 blur-[130px]"
      />

      <SectionHeading index="02" title="About" />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <p className="text-xl leading-relaxed text-bright/90 sm:text-[1.35rem] sm:leading-[1.6]">
            {profile.bio}
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-7">
            {[
              { k: 'Based in', v: profile.location },
              { k: 'Status', v: profile.availableLabel },
            ].map((row) => (
              <div key={row.k}>
                <dt className="font-display text-xs uppercase tracking-[0.2em] text-muted">
                  {row.k}
                </dt>
                <dd className="mt-2 text-[0.975rem] text-bright">{row.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-3xl card-edge p-7 sm:p-8">
            <h3 className="flex items-center gap-2.5 font-display text-xs uppercase tracking-[0.2em] text-accent">
              <GraduationCap size={15} />
              Education
            </h3>

            <ul className="mt-7 flex flex-col gap-7">
              {education.map((e) => (
                <li key={e.school}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-display text-base font-semibold text-bright">
                      {e.school}
                    </p>
                    <span className="font-display text-xs tracking-[0.18em] text-muted">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-2 text-[0.925rem] leading-relaxed text-muted">
                    {e.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
