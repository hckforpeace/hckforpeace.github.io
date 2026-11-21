import { ArrowUp } from 'lucide-react'
import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-9 text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.fullName}. Built with React, Vite and a
          fragment shader.
        </p>
        <a
          href="#top"
          className="flex items-center gap-1.5 transition-colors hover:text-bright"
        >
          Back to top
          <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  )
}
