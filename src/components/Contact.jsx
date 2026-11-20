import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Magnetic from './Magnetic.jsx'
import { profile, socials } from '../data.js'
import { iconFor } from './icons.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard blocked (no permission, or insecure context) — the mailto
      // link below still works, so there's nothing to recover from.
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 sm:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[560px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(167,139,250,.18),transparent)] blur-3xl"
      />

      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">
            05 — Contact
          </p>
          <h2 className="mt-7 font-display text-[clamp(2.3rem,6vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
            Let's build <span className="text-gradient">something good</span>.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted">
            Got a project, a role, or a problem that needs a second pair of eyes?
            My inbox is open.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-bright px-7 py-4 text-sm font-semibold text-ink"
              >
                <span className="relative z-10">{profile.email}</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent via-accent-2 to-accent transition-transform duration-500 group-hover:translate-x-0" />
              </a>
            </Magnetic>

            <button
              type="button"
              onClick={copy}
              className="flex items-center gap-2 rounded-full border border-line px-5 py-4 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-bright"
            >
              {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex items-center justify-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="rounded-full border border-line p-3 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-bright"
              >
                {iconFor(s.icon, 18)}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
