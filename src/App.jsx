import { useState, useCallback } from 'react'
import { SECTION_IDS } from './data'
import { useActiveSection } from './hooks'
import { Sidebar, MobileHeader } from './components/layout'
import {
  Introduction,
  Projects,
  Experience,
  TechStack,
  Certifications,
  Recommendations,
  Github,
} from './components/sections'

export default function App() {
  const active = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), [])

  return (
    <div className="app">
      <Sidebar active={active} onNavigate={handleNavigate} />

      <MobileHeader open={menuOpen} onToggle={toggleMenu} active={active} onNavigate={handleNavigate} />

      <main className="main">
        <Introduction />
        <Projects />
        <Experience />
        <TechStack />
        <Certifications />
        <Recommendations />
        <Github />
      </main>
    </div>
  )
}
