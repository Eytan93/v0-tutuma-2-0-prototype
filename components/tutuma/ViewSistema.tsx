'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { sistemaCapitulos, brands } from '@/lib/tutuma-data'

interface ViewSistemaProps {
  onNavigate: (view: 'productos' | 'experiencias' | 'tienda' | 'regalos') => void
}

export default function ViewSistema({ onNavigate }: ViewSistemaProps) {
  const [activeCapitulo, setActiveCapitulo] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#F3F0DF]">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end pb-24 px-6 md:px-16 lg:px-24 pt-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-px h-full bg-[#F3F0DF]/10" />
        <div className="absolute top-0 right-24 w-px h-full bg-[#F3F0DF]/5 hidden md:block" />
        <div className="max-w-5xl">
          <p className="text-[#FACC15] text-xs tracking-[0.4em] uppercase mb-8 font-sans">
            Tutuma 2.0 — Sistema de Acceso
          </p>
          <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-[-0.02em] text-[#F3F0DF] mb-10 text-balance">
            El mezcal<br />
            <em className="italic text-[#FACC15]">como territorio</em>
          </h1>
          <p className="font-sans text-[#F3F0DF]/60 text-base leading-relaxed max-w-xl mb-12">
            Un sistema de acceso a destilados artesanales de México. Conectamos origen,
            maestro y paladar a través de Operadores de Conexión comprometidos.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('productos')}
              className="group flex items-center gap-3 bg-[#FACC15] text-[#1A1A1A] px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#F3F0DF] transition-colors duration-300"
            >
              Explorar Marcas
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => onNavigate('experiencias')}
              className="flex items-center gap-3 border border-[#F3F0DF]/30 text-[#F3F0DF]/70 px-8 py-4 text-xs tracking-[0.2em] uppercase hover:border-[#F3F0DF] hover:text-[#F3F0DF] transition-colors duration-300"
            >
              Ver Experiencias
            </button>
          </div>
        </div>
        <div className="absolute bottom-24 right-6 md:right-16 text-right hidden md:block">
          <p className="font-serif text-7xl text-[#F3F0DF]/8 select-none">7</p>
          <p className="text-xs tracking-[0.3em] uppercase text-[#F3F0DF]/20 font-sans">capítulos</p>
        </div>
      </section>

      {/* Los 7 Capítulos */}
      <section className="bg-[#F3F0DF] text-[#1A1A1A] py-24 px-6 md:px-16 lg:px-24">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-3 font-sans">El Sistema</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">
          Siete capítulos del origen
        </h2>
        <p className="font-sans text-[#1A1A1A]/50 text-sm leading-relaxed max-w-md mb-16">
          El mezcal artesanal no se entiende en una etiqueta. Se entiende en siete momentos que van
          desde la tierra hasta tu copa.
        </p>

        <div className="divide-y divide-[#C8C4B0]">
          {sistemaCapitulos.map((cap, i) => {
            const isOpen = activeCapitulo === i
            return (
              <div key={cap.number}>
                <button
                  onClick={() => setActiveCapitulo(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 group text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-serif text-[#1A1A1A]/20 text-sm w-6 shrink-0">
                      {cap.number}
                    </span>
                    <span className="font-serif text-2xl md:text-3xl group-hover:text-[#6B7F5E] transition-colors duration-300">
                      {cap.title}
                    </span>
                  </div>
                  <span
                    className={`text-[#6B7F5E] text-lg leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-8 pl-12">
                    <p className="font-sans text-sm leading-relaxed text-[#1A1A1A]/60 max-w-2xl">
                      {cap.description}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Brands overview */}
      <section className="bg-[#2C2C2C] py-24 px-6 md:px-16 lg:px-24">
        <p className="text-xs tracking-[0.4em] uppercase text-[#FACC15] mb-4 font-sans">Portfolio</p>
        <h2 className="font-serif text-4xl md:text-5xl text-[#F3F0DF] mb-16 text-balance">
          Cuatro marcas.<br />Un territorio.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#F3F0DF]/10">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onNavigate('productos')}
              className="bg-[#2C2C2C] p-10 hover:bg-[#1A1A1A] transition-colors duration-300 group text-left"
            >
              <div
                className="w-1 h-8 mb-6 transition-colors duration-300"
                style={{ backgroundColor: brand.accentColor }}
              />
              <p className="text-xs tracking-[0.3em] uppercase mb-3 font-sans" style={{ color: brand.accentColor }}>
                {brand.region} · {brand.state}
              </p>
              <h3 className="font-serif text-3xl text-[#F3F0DF] mb-3 group-hover:text-[#FACC15] transition-colors duration-300">
                {brand.name}
              </h3>
              <p className="text-xs text-[#F3F0DF]/40 leading-relaxed font-sans mb-6">
                {brand.description}
              </p>
              <div className="flex items-center gap-2 text-[#FACC15] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs tracking-[0.2em] uppercase font-sans">
                  {brand.products.length} expresiones
                </span>
                <ArrowRight size={12} />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#1A1A1A] py-24 px-6 md:px-16 lg:px-24 text-center border-t border-[#2C2C2C]">
        <p className="font-serif text-2xl italic text-[#F3F0DF]/30 mb-8">
          &ldquo;No es cata. Es territorio.&rdquo;
        </p>
        <button
          onClick={() => onNavigate('experiencias')}
          className="inline-flex items-center gap-3 text-[#FACC15] text-xs tracking-[0.3em] uppercase hover:gap-5 transition-all duration-300"
        >
          Conocer las Experiencias <ArrowRight size={12} />
        </button>
      </section>
    </main>
  )
}
