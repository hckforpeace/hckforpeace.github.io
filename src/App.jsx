import Nav from './components/Nav.jsx'
import Cursor from './components/Cursor.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Stack from './components/Stack.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { marquee } from './data.js'

export default function App() {
  return (
    <div className="grain relative min-h-screen">
      <ScrollProgress />
      <Cursor />
      <Nav />

      <main>
        <Hero />
        <Marquee items={marquee} />
        <Projects />
        <About />
        <Experience />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
