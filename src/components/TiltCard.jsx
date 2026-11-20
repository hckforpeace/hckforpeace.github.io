import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react'

/*
 * Pointer-reactive card: subtle 3D tilt plus a spotlight that tracks the
 * cursor. The spotlight is a radial gradient positioned from motion values,
 * so it never triggers a React re-render.
 */
export default function TiltCard({ children, className = '', glow = 'var(--color-accent)', max = 7 }) {
  const ref = useRef(null)

  const rx = useSpring(0, { stiffness: 220, damping: 22 })
  const ry = useSpring(0, { stiffness: 220, damping: 22 })
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const opacity = useSpring(0, { stiffness: 180, damping: 26 })

  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, ${glow}, transparent 70%)`

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    mx.set(px * 100)
    my.set(py * 100)
    ry.set((px - 0.5) * max * 2)
    rx.set(-(py - 0.5) * max * 2)
  }

  const onLeave = () => {
    rx.set(0)
    ry.set(0)
    opacity.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerEnter={() => opacity.set(0.16)}
      onPointerLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`group relative isolate overflow-hidden rounded-3xl card-edge ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background: spotlight, opacity }}
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity"
      />
      {children}
    </motion.div>
  )
}
