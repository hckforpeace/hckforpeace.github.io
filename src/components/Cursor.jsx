import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

/*
 * A lagging glow that follows the pointer. Skipped entirely on touch
 * devices and when the user asks for reduced motion.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 140, damping: 18, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 140, damping: 18, mass: 0.6 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    setEnabled(true)
    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-50 -ml-[180px] -mt-[180px] h-[360px] w-[360px] rounded-full opacity-45 mix-blend-screen blur-3xl"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(167,139,250,.5)_0%,rgba(34,211,238,.18)_45%,transparent_70%)]" />
    </motion.div>
  )
}
