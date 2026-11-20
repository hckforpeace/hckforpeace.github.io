import { Github, Linkedin, Mail, Twitter, Globe } from 'lucide-react'

const MAP = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  globe: Globe,
}

export function iconFor(name, size = 18) {
  const Icon = MAP[name] ?? Globe
  return <Icon size={size} />
}
