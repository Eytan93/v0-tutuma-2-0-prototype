'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { sistemaCapitulos, brands } from '@/lib/tutuma-data'

interface ViewSistemaProps {
  onNavigate: (view: 'productos' | 'experiencias' | 'tienda' | 'regalos') => void
}

export default function ViewSistema({ onNavigate }: ViewSistemaProps) {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#F3F0DF]">

      {/* ── Hero — full-bleed photographic background ── */}
      <section className="relative min-h-screen flex flex-col justify-end pb-24 px-6 md:px-16 lg:px-24 pt-32 overflow-hidden">
        {/* Background photo */}
        <Image
          src="/images/hero-agave.jpg"
          alt="Campo de agaves en Oaxaca"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay — keeps all text 100% legible */}
        <div className="absolute inset-0 bg-[#1A1A1A]/70" />
        {/* Subtle vertical lines */}
        <div className="absolute top-0 left-0 w-px h-full bg-[#F3F0DF]/10 z-10" />
        <div className="absolute top-0 right-24 w-px h-full bg-[#F3F0DF]/5 hidden md:block z-10" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          <p className="text-[#FACC15] text-xs tracking-[0.4em] uppercase mb-8 font-sans">
            Tutuma 2.0 — Sistema de Acceso
          </p>
          <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-[-0.02em] text-[#F3F0DF] mb-10 text-balance">
            El mezcal<br />
            <em className="italic text-[#FACC15]">como territorio</em>
          </h1>
          <p className="font-sans text-[#F3F0DF]/70 text-base leading-relaxed max-w-xl mb-12">
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
              className="flex items-center gap-3 border border-[#F3F0DF]/40 text-[#F3F0DF]/80 px-8 py-4 text-xs tracking-[0.2em] uppercase hover:border-[#F3F0DF] hover:text-[#F3F0DF] transition-colors duration-300"
            >
              Ver Experiencias
            </button>
          </div>
        </div>

        <div className="absolute bottom-24 right-6 md:right-16 text-right hidden md:block z-10">
          <p className="font-serif text-8xl text-[#F3F0DF]/10 select-none leading-none">7</p>
          <p className="text-xs tracking-[0.3em] uppercase text-[#F3F0DF]/25 font-sans">capítulos</p>
        </div>
      </section>

      {/* ── Los 7 Capítulos — immersive photo cards ── */}
      <section className="bg-[#F3F0DF] text-[#1A1A1A] py-24 px-6 md:px-16 lg:px-24">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-3 font-sans">El Sistema</p>
        <h2 className="font-serif text-5xl md:text-6xl mb-4 text-balance font-bold">
          Siete capítulos del origen
        </h2>
        <p className="font-sans text-lg md:text-xl text-[#1A1A1A]/60 leading-relaxed max-w-2xl mb-16">
          El mezcal artesanal no se entiende en una etiqueta. Se entiende en siete momentos
          que van desde la tierra hasta tu copa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sistemaCapitulos.map((cap) => (
            <article
              key={cap.number}
              className="group relative overflow-hidden"
            >
              {/* Photo */}
              <div className="relative h-72 md:h-80 w-full overflow-hidden">
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent" />
                {/* Chapter number — top left */}
                <span className="absolute top-5 left-5 font-serif text-[#F3F0DF]/50 text-sm md:text-base tracking-[0.3em] font-semibold">
                  {cap.number}
                </span>
                {/* Title overlaid on photo */}
                <h3 className="absolute bottom-5 left-5 font-serif text-3xl md:text-4xl text-[#F3F0DF] leading-tight font-bold">
                  {cap.title}
                </h3>
              </div>
              {/* Description below photo */}
              <div className="bg-[#EDEADE] px-6 py-6 border-b border-[#C8C4B0]">
                <p className="font-sans text-base md:text-lg leading-relaxed text-[#1A1A1A]/70">
                  {cap.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Brands overview ── */}
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
                className="w-1 h-8 mb-6"
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

      {/* ── Footer CTA ── */}
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
