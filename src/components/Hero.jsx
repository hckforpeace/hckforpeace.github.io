import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import ShaderBackground from './ShaderBackground.jsx'
import Magnetic from './Magnetic.jsx'
import { profile, socials } from '../data.js'
import { iconFor } from './icons.jsx'

const EASE = [0.16, 1, 0.3, 1]

export default function Hero() {
  const { scrollY } = useScroll()
  // Content drifts up and fades as you scroll past — cheap parallax depth.
  const y = useTransform(scrollY, [0, 700], [0, 110])
  const opacity = useTransform(scrollY, [0, 520], [1, 0])

  const words = profile.tagline.split(' ')

  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden">
      <ShaderBackground />

      {/* Hard fade into the page background so the shader has a clean edge. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-10 h-56 bg-gradient-to-b from-transparent to-ink"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 pb-32"
      >
        {profile.available && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-9 flex w-fit items-center gap-2.5 rounded-full border border-line/80 glass px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium tracking-wide text-muted">
              {profile.availableLabel}
            </span>
          </motion.div>
        )}

        <h1 className="max-w-4xl font-display text-[clamp(2.6rem,7.4vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 34, rotateX: -55 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.85, delay: 0.1 + i * 0.045, ease: EASE }}
              className="mr-[0.26em] inline-block origin-bottom"
            >
              {i >= words.length - 3 ? (
                <span className="text-gradient">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
        >
          <span className="font-display text-base text-bright">
            {profile.role}
          </span>
          <span className="h-4 w-px bg-line" />
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-accent" />
            {profile.location}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.56, ease: EASE }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="#work"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-bright px-6 py-3.5 text-sm font-semibold text-ink"
            >
              <span className="relative z-10">See my work</span>
              <ArrowUpRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent via-accent-2 to-accent transition-transform duration-500 group-hover:translate-x-0" />
            </a>
          </Magnetic>

          <Magnetic strength={0.18}>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-bright transition-colors hover:border-accent/50 hover:bg-accent/10"
            >
              Email me
            </a>
          </Magnetic>

          <div className="ml-2 flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="rounded-full p-2.5 text-muted transition-colors hover:bg-bright/5 hover:text-bright"
              >
                {iconFor(s.icon, 18)}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#work"
        aria-label="Scroll to work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-muted transition-colors hover:text-bright"
      >
        <ArrowDown size={20} className="animate-float" />
      </motion.a>
    </section>
  )
}
