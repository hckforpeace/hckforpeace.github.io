import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { stack } from '../data.js'

export default function Stack() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <SectionHeading index="04" title="Stack" lead="Tools I reach for without thinking." />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.06}>
            <div className="h-full rounded-3xl border border-line bg-ink-2/60 p-6 transition-colors duration-500 hover:border-accent/35">
              <h3 className="font-display text-xs uppercase tracking-[0.2em] text-accent">
                {group.group}
              </h3>
              <ul className="mt-5 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[0.95rem] text-bright/85">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
