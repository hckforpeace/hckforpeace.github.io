export default function Marquee({ items }) {
  // Rendered twice back to back so the -50% translate loops seamlessly.
  const run = [...items, ...items]

  return (
    <div className="relative flex overflow-hidden border-y border-line/70 py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {run.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-10">
            <span className="font-display text-sm uppercase tracking-[0.22em] text-muted">
              {item}
            </span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
    </div>
  )
}
