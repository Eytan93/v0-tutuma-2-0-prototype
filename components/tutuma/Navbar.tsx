'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

type View = 'sistema' | 'productos' | 'experiencias' | 'tienda' | 'regalos'

interface NavbarProps {
  currentView: View
  onNavigate: (view: View) => void
}

const navItems: { label: string; view: View }[] = [
  { label: 'El Sistema', view: 'sistema' },
  { label: 'Colectivos', view: 'productos' },
  { label: 'Experiencias', view: 'experiencias' },
  { label: 'Tienda', view: 'tienda' },
  { label: 'Regalos', view: 'regalos' },
]

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (view: View) => {
    onNavigate(view)
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigate('sistema')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
          title="Ir a inicio"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TUTUMA-HORIZONTE-SUSTENTABLE-RGB_CREMA-7tT3OOqTBSgsyCnZ4rMCFFxdgYFFph.png"
            alt="Tutuma - Horizonte Sustentable"
            width={120}
            height={50}
            priority
            className="h-auto w-auto"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navItems.map(({ label, view }) => (
            <button
              key={view}
              onClick={() => handleNavigate(view)}
              className={`text-xs tracking-[0.2em] uppercase font-sans transition-colors duration-300 pb-1 border-b ${
                currentView === view
                  ? 'text-[#FACC15] border-[#FACC15]'
                  : 'text-[#F3F0DF]/70 border-transparent hover:text-[#F3F0DF] hover:border-[#F3F0DF]/40'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#F3F0DF] hover:text-[#FACC15] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav
          className="md:hidden bg-[#1A1A1A] border-t border-[#2C2C2C] px-6 py-6 flex flex-col gap-5"
          aria-label="Navegación móvil"
        >
          {navItems.map(({ label, view }) => (
            <button
              key={view}
              onClick={() => handleNavigate(view)}
              className={`text-sm tracking-[0.2em] uppercase text-left transition-colors duration-200 ${
                currentView === view ? 'text-[#FACC15]' : 'text-[#F3F0DF]/70 hover:text-[#F3F0DF]'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
