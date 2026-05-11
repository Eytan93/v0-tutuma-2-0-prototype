'use client'

import { Gift, Building2, BookOpen, ArrowRight } from 'lucide-react'

const kits = [
  {
    name: 'Kit Iniciación',
    subtitle: '3 destilados · Tarjeta explicativa',
    price: 2400,
    description:
      'Espadín, un silvestre y un ensamble. El trío perfecto para quien se asoma al mezcal por primera vez.',
    contents: ['Espadín de Matatlán', 'Tobalá de Miahuatlán', 'Ensamble Sola de Vega', 'Tarjeta Explicativa del Sistema'],
  },
  {
    name: 'Kit Terruño',
    subtitle: '5 destilados · Tarjeta + Mapa',
    price: 4800,
    description:
      'Un recorrido sensorial por cuatro regiones oaxaqueñas. Para quienes ya entienden que el mezcal es geografía.',
    contents: ['2 expresiones Rajabule', '1 expresión 400 Lustros', '1 expresión Mi Gusto Es', '1 Sierra Norte', 'Mapa de Terruños + Tarjeta'],
  },
  {
    name: 'Kit Coleccionista',
    subtitle: '7 destilados · Presentación especial',
    price: 8900,
    description:
      'Las expresiones más singulares del portfolio: silvestres de largo envejecimiento, ensambles únicos y ediciones limitadas.',
    contents: ['Selección curada por el equipo', 'Botella de edición especial', 'Tarjeta numerada y firmada', 'Acceso a experiencia privada'],
    featured: true,
  },
]

const corporate = [
  {
    icon: BookOpen,
    title: 'Tarjeta Explicativa del Sistema',
    desc: 'Cada kit incluye una tarjeta impresa con el mapa del sistema Tutuma, el perfil de cada destilado y el nombre del maestro elaborador. Una pieza que se conserva.',
  },
  {
    icon: Building2,
    title: 'Regalos Corporativos',
    desc: 'Kits personalizados para clientes, colaboradores y eventos. Branding discreto disponible. Pedidos desde 10 piezas. Contacta al equipo para cotización.',
  },
  {
    icon: Gift,
    title: 'Embalaje Especial',
    desc: 'Caja de madera lacada con cierre magnético. Papel kraft con el mapa de Oaxaca. Sin plástico, sin excesos. El envoltorio habla antes que el mezcal.',
  },
]

export default function ViewRegalos() {
  return (
    <main className="min-h-screen bg-[#F3F0DF] pt-24 pb-24">
      {/* Header */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 border-b border-[#C8C4B0]">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-4 font-sans">Regalos</p>
        <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] mb-6 text-balance">
          Regala territorio.<br />No solo una botella.
        </h1>
        <p className="font-sans text-[#1A1A1A]/50 text-sm leading-relaxed max-w-md">
          Kits de degustación curados con su Tarjeta Explicativa del Sistema. El contexto es parte del regalo.
        </p>
      </section>

      {/* Kits */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-10 font-sans">Kits de Degustación</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C8C4B0]">
          {kits.map((kit) => (
            <div
              key={kit.name}
              className={`p-10 flex flex-col ${kit.featured ? 'bg-[#1A1A1A] text-[#F3F0DF]' : 'bg-[#F3F0DF] text-[#1A1A1A]'}`}
            >
              {kit.featured && (
                <span className="text-xs tracking-[0.3em] uppercase text-[#FACC15] mb-4 font-sans">
                  Más completo
                </span>
              )}
              <h2 className={`font-serif text-3xl mb-1 ${kit.featured ? 'text-[#F3F0DF]' : 'text-[#1A1A1A]'}`}>
                {kit.name}
              </h2>
              <p className={`text-xs tracking-[0.2em] uppercase mb-6 font-sans ${kit.featured ? 'text-[#F3F0DF]/40' : 'text-[#1A1A1A]/40'}`}>
                {kit.subtitle}
              </p>
              <p className={`text-sm leading-relaxed mb-8 font-sans ${kit.featured ? 'text-[#F3F0DF]/60' : 'text-[#1A1A1A]/60'}`}>
                {kit.description}
              </p>
              <ul className="space-y-2 mb-10">
                {kit.contents.map((item) => (
                  <li key={item} className={`text-xs flex gap-2 font-sans ${kit.featured ? 'text-[#F3F0DF]/50' : 'text-[#1A1A1A]/50'}`}>
                    <span className="text-[#FACC15] shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-current/10 flex items-end justify-between">
                <div>
                  <p className={`font-serif text-3xl ${kit.featured ? 'text-[#FACC15]' : 'text-[#1A1A1A]'}`}>
                    ${kit.price.toLocaleString()}
                  </p>
                  <p className={`text-xs font-sans ${kit.featured ? 'text-[#F3F0DF]/30' : 'text-[#1A1A1A]/30'}`}>MXN</p>
                </div>
                <button
                  className={`flex items-center gap-2 px-6 py-3 text-xs tracking-[0.15em] uppercase transition-colors duration-300 font-sans ${
                    kit.featured
                      ? 'bg-[#FACC15] text-[#1A1A1A] hover:bg-[#F3F0DF]'
                      : 'bg-[#1A1A1A] text-[#F3F0DF] hover:bg-[#FACC15] hover:text-[#1A1A1A]'
                  }`}
                >
                  Adquirir <ArrowRight size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate + details */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {corporate.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border-t border-[#C8C4B0] pt-8">
              <Icon size={18} className="text-[#6B7F5E] mb-6" />
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">{title}</h3>
              <p className="font-sans text-sm text-[#1A1A1A]/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
