import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { sections, profile } from '../data.js'

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Scroll-spy: whichever section owns the middle of the viewport wins.
  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    targets.forEach((t) => io.observe(t))

    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled ? 'mt-3 py-2' : 'mt-5 py-3'
        }`}
      >
        <a
          href="#top"
          className="group font-display text-sm font-semibold tracking-tight text-bright"
        >
          <span className="text-gradient">{profile.name}</span>
          <span className="text-muted">.dev</span>
        </a>

        {/* Desktop pill */}
        <div
          className={`hidden items-center gap-1 rounded-full border px-2 py-1.5 transition-all duration-500 md:flex ${
            scrolled
              ? 'glass border-line/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,.8)]'
              : 'border-transparent'
          }`}
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="relative rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors hover:text-bright"
            >
              {active === s.id && (
                <motion.span
                  layoutId="nav-active"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-bright/8 ring-1 ring-inset ring-accent/25"
                />
              )}
              <span
                className={`relative ${active === s.id ? 'text-bright' : ''}`}
              >
                {s.label}
              </span>
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-bright transition-colors hover:bg-accent/20 md:block"
        >
          Get in touch
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="glass rounded-full border border-line p-2.5 text-bright md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass mx-6 mt-2 overflow-hidden rounded-3xl border border-line md:hidden"
          >
            <div className="flex flex-col p-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-muted transition-colors hover:bg-bright/5 hover:text-bright"
                >
                  {s.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="mt-1 rounded-2xl bg-accent/15 px-4 py-3 text-sm font-medium text-bright"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
