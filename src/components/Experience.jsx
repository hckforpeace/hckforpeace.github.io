import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { experience } from '../data.js'

export default function Experience() {
  const ref = useRef(null)
  // The timeline spine draws itself as the section scrolls through view.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 55%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36"
    >
      <SectionHeading
        index="03"
        title="Experience"
        lead="Where I've worked and what I was responsible for."
      />

      <div ref={ref} className="relative pl-10 sm:pl-14">
        <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[11px]" />
        <motion.div
          aria-hidden
          style={{ scaleY }}
          className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-transparent sm:left-[11px]"
        />

        <div className="flex flex-col gap-14">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -left-10 top-2 flex h-4 w-4 items-center justify-center sm:-left-14"
                >
                  {job.current && (
                    <span className="absolute h-3 w-3 animate-pulse-ring rounded-full bg-accent" />
                  )}
                  <span
                    className={`relative h-[9px] w-[9px] rounded-full ring-4 ring-ink ${
                      job.current ? 'bg-accent' : 'bg-line'
                    }`}
                  />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-bright">
                    {job.role}
                    <span className="text-muted"> · {job.company}</span>
                  </h3>
                  <span className="font-display text-xs tracking-[0.18em] text-muted">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {job.points.map((pt) => (
                    <li
                      key={pt}
                      className="relative pl-5 text-[0.975rem] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-accent/70"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>

                {job.stack.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line px-2 py-0.5 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
