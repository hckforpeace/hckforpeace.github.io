import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data.js'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      {/* Soft bloom behind the section. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/8 blur-[130px]"
      />

      <SectionHeading index="02" title="About" />

      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <Reveal>
          <p className="text-xl leading-relaxed text-bright/90 sm:text-[1.4rem] sm:leading-[1.6]">
            {profile.bio}
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-3">
            {[
              { k: 'Based in', v: profile.location },
              { k: 'Focus', v: profile.role },
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
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl card-edge">
            {/* TODO: drop a photo at public/portrait.jpg and swap this block
                for <img src="/portrait.jpg" alt="" className="h-full w-full object-cover" /> */}
            <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_30%_0%,rgba(167,139,250,.35),transparent_55%),radial-gradient(100%_100%_at_90%_100%,rgba(34,211,238,.25),transparent_55%)]" />
            <div className="absolute inset-0 flex items-end p-7">
              <p className="font-display text-sm tracking-[0.2em] text-muted uppercase">
                Portrait goes here
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
