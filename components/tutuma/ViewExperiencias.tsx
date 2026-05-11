'use client'

import { Clock, Users, Sparkles, MapPin } from 'lucide-react'

const details = [
  { icon: Clock, label: 'Duración', value: '2.5 horas' },
  { icon: Sparkles, label: 'Destilados', value: '5 expresiones' },
  { icon: Users, label: 'Cupo', value: 'Máximo 10 personas' },
  { icon: MapPin, label: 'Formato', value: 'Presencial · CDMX' },
]

const itinerary = [
  {
    time: '00:00',
    title: 'El contexto',
    desc: 'Introducción al sistema Tutuma, el mapa de las regiones y la filosofía del Operador de Conexión.',
  },
  {
    time: '00:30',
    title: 'Primera ronda — Espadín',
    desc: 'Punto de partida. Dos expresiones de distintos años y maestros para calibrar el paladar.',
  },
  {
    time: '01:00',
    title: 'Variedades silvestres',
    desc: 'Tepeztate, Tobalá, Madrecuishe. El territorio en estado salvaje.',
  },
  {
    time: '01:40',
    title: 'El ensamble',
    desc: 'Lectura en tres tiempos de un ensamble maestro. El punto culminante de la sesión.',
  },
  {
    time: '02:10',
    title: 'Preguntas y cierre',
    desc: 'Espacio abierto con el guía. Sin agenda. Pura conversación.',
  },
]

export default function ViewExperiencias() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#F3F0DF] pt-24 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 border-b border-[#2C2C2C]">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-6 font-sans">Experiencias</p>
        <h1 className="font-serif text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight mb-6 text-balance">
          No es cata.<br />
          <em className="italic text-[#FACC15]">Es territorio.</em>
        </h1>
        <p className="font-sans text-[#F3F0DF]/50 text-sm leading-relaxed max-w-md">
          Una sesión guiada de dos horas y media que no enseña a beber mezcal — te enseña a leer el paisaje oaxaqueño en un vaso.
        </p>
      </section>

      {/* Price + details */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 grid md:grid-cols-2 gap-16 border-b border-[#2C2C2C]">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-[#F3F0DF]/30 mb-4 font-sans">Inversión</p>
          <p className="font-serif text-7xl text-[#FACC15] mb-2">$1,300</p>
          <p className="text-sm text-[#F3F0DF]/30 font-sans">MXN por persona · Incluye 5 destilados</p>
          <button className="mt-8 bg-[#FACC15] text-[#1A1A1A] px-10 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#F3F0DF] transition-colors duration-300 font-sans">
            Reservar Lugar
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label} className="border-t border-[#F3F0DF]/10 pt-6">
              <Icon size={14} className="text-[#6B7F5E] mb-4" />
              <p className="text-xs tracking-[0.3em] uppercase text-[#F3F0DF]/30 mb-2 font-sans">{label}</p>
              <p className="font-serif text-lg text-[#F3F0DF]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Itinerary */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-12 font-sans">Itinerario</p>
        <div className="space-y-0">
          {itinerary.map((step, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-4 md:gap-12 border-b border-[#F3F0DF]/10 py-8 group"
            >
              <span className="font-mono text-xs text-[#F3F0DF]/20 md:w-16 shrink-0 pt-1">
                {step.time}
              </span>
              <div>
                <h3 className="font-serif text-xl text-[#F3F0DF] mb-2 group-hover:text-[#FACC15] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-[#F3F0DF]/40 leading-relaxed font-sans">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="bg-[#2C2C2C] p-10">
          <p className="font-serif text-xl italic text-[#F3F0DF]/60 leading-relaxed text-balance">
            &ldquo;No se explica el mezcal. Se escucha. Cada trago es una conversación entre el maguey, la tierra y quien lo destila.&rdquo;
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-[#6B7F5E] mt-6 font-sans">
            — Equipo Tutuma
          </p>
        </div>
      </section>
    </main>
  )
}
