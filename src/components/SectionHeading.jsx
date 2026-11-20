import Reveal from './Reveal.jsx'

export default function SectionHeading({ index, title, lead }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-display text-xs tracking-[0.3em] text-accent">
          {index}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
      </div>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-bright sm:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg leading-relaxed text-muted">{lead}</p>}
    </Reveal>
  )
}
