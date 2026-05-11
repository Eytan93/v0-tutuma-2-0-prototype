'use client'

import { ArrowRight, Droplets, MapPin, Award } from 'lucide-react'

interface ViewSistemaProps {
  onNavigate: (view: 'productos' | 'experiencias' | 'tienda' | 'regalos') => void
}

const pillars = [
  {
    icon: MapPin,
    title: 'Origen Verificado',
    desc: 'Cada destilado trazable a su pueblo, maestro y cosecha. Transparencia radical en toda la cadena.',
  },
  {
    icon: Droplets,
    title: 'Perfil Sensorial',
    desc: 'Vista, nariz y boca documentados con rigor. El vocabulario del territorio, no de la mercadotecnia.',
  },
  {
    icon: Award,
    title: 'Operadores de Conexión',
    desc: 'Red curada de intermediarios comprometidos con el pago justo y la preservación de la tradición.',
  },
]

const brands = [
  { name: 'Rajabule', region: 'Sola de Vega', agave: 'Arroqueño · Tobalá · Mexicano · Espadín' },
  { name: '400 Lustros', region: 'Miahuatlán', agave: 'Tepeztate · Sierrudo · Madrecuishe · Cucharillo' },
  { name: 'Mi Gusto Es', region: 'Matatlán', agave: 'Espadín · Tepeztate · Tobalá · Ed. Especiales' },
  { name: 'Sierra Norte', region: 'Sierra Juárez', agave: 'Whiskey de Maíz — 6 variedades nativas' },
]

export default function ViewSistema({ onNavigate }: ViewSistemaProps) {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#F3F0DF]">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end pb-24 px-6 md:px-16 lg:px-24 pt-32 relative overflow-hidden">
        {/* Decorative line */}
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
          <p className="font-sans text-[#F3F0DF]/60 text-lg leading-relaxed max-w-xl mb-12">
            Un sistema de acceso a destilados artesanales de México. Conectamos origen, 
            maestro y paladar sin intermediarios innecesarios.
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

        {/* Floating stat */}
        <div className="absolute bottom-24 right-6 md:right-16 text-right hidden md:block">
          <p className="font-serif text-6xl text-[#F3F0DF]/10">26</p>
          <p className="text-xs tracking-[0.3em] uppercase text-[#F3F0DF]/30">destilados</p>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[#F3F0DF] text-[#1A1A1A] py-24 px-6 md:px-16 lg:px-24">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-4 font-sans">El Sistema</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-16 text-balance">Tres principios inamovibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border-t border-[#1A1A1A]/20 pt-8">
              <Icon size={20} className="text-[#6B7F5E] mb-6" />
              <h3 className="font-serif text-2xl mb-4">{title}</h3>
              <p className="font-sans text-sm leading-relaxed text-[#1A1A1A]/60">{desc}</p>
            </div>
          ))}
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
            <div key={brand.name} className="bg-[#2C2C2C] p-10 hover:bg-[#1A1A1A] transition-colors duration-300 group cursor-pointer" onClick={() => onNavigate('productos')}>
              <p className="text-xs tracking-[0.3em] uppercase text-[#6B7F5E] mb-3 font-sans">{brand.region}</p>
              <h3 className="font-serif text-3xl text-[#F3F0DF] mb-4 group-hover:text-[#FACC15] transition-colors duration-300">
                {brand.name}
              </h3>
              <p className="text-xs text-[#F3F0DF]/40 leading-relaxed font-sans">{brand.agave}</p>
              <div className="mt-6 flex items-center gap-2 text-[#FACC15] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs tracking-[0.2em] uppercase">Ver colección</span>
                <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#1A1A1A] py-24 px-6 md:px-16 lg:px-24 text-center">
        <p className="font-serif text-xl italic text-[#F3F0DF]/40 mb-2">&ldquo;No es cata. Es territorio.&rdquo;</p>
        <button
          onClick={() => onNavigate('experiencias')}
          className="mt-8 inline-flex items-center gap-3 text-[#FACC15] text-xs tracking-[0.3em] uppercase hover:gap-5 transition-all duration-300"
        >
          Conocer las Experiencias <ArrowRight size={12} />
        </button>
      </section>
    </main>
  )
}
