'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Clock, Users, Sparkles, MapPin, Check } from 'lucide-react'

const details = [
  { icon: Clock, label: 'Duración', value: '2.5 horas' },
  { icon: Sparkles, label: 'Destilados', value: '5 expresiones' },
  { icon: Users, label: 'Cupo', value: 'Máximo 8 personas' },
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

const MONTH_NAMES_ES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
]
const DAY_NAMES_ES = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do']

// Pre-set some available dates (fridays + saturdays of the current months)
function getAvailableDates(year: number, month: number): Set<number> {
  const available = new Set<number>()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  for (let d = 1; d <= daysInMonth; d++) {
    const day = new Date(year, month, d).getDay() // 0=Sun, 5=Fri, 6=Sat
    if (day === 5 || day === 6) available.add(d)
  }
  return available
}

function InteractiveCalendar({
  selectedDate,
  onSelect,
}: {
  selectedDate: Date | null
  onSelect: (date: Date) => void
}) {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())

  const firstDayOfMonth = new Date(viewYear, viewMonth, 1)
  // Monday-based week offset (0=Mon ... 6=Sun)
  const startOffset = (firstDayOfMonth.getDay() + 6) % 7
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const availableDates = getAvailableDates(viewYear, viewMonth)

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day)
    d.setHours(0, 0, 0, 0)
    const t = new Date(); t.setHours(0, 0, 0, 0)
    return d < t
  }

  const isSelected = (day: number) =>
    selectedDate?.getFullYear() === viewYear &&
    selectedDate?.getMonth() === viewMonth &&
    selectedDate?.getDate() === day

  const cells: (number | null)[] = [
    ...Array(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  // Pad to full weeks
  while (cells.length % 7 !== 0) cells.push(null)

  return (
    <div className="bg-[#2C2C2C] p-6 md:p-8">
      {/* Month nav */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="text-[#F3F0DF]/40 hover:text-[#FACC15] transition-colors p-1"
          aria-label="Mes anterior"
        >
          <ChevronLeft size={16} />
        </button>
        <p className="font-serif text-lg text-[#F3F0DF] tracking-wide">
          {MONTH_NAMES_ES[viewMonth]} {viewYear}
        </p>
        <button
          onClick={nextMonth}
          className="text-[#F3F0DF]/40 hover:text-[#FACC15] transition-colors p-1"
          aria-label="Mes siguiente"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAY_NAMES_ES.map((d) => (
          <div key={d} className="text-center text-[10px] tracking-[0.15em] uppercase text-[#F3F0DF]/20 font-sans py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, idx) => {
          if (!day) return <div key={idx} />
          const available = availableDates.has(day) && !isPast(day)
          const selected = isSelected(day)
          return (
            <button
              key={idx}
              disabled={!available}
              onClick={() => onSelect(new Date(viewYear, viewMonth, day))}
              className={`aspect-square flex items-center justify-center text-sm font-sans transition-all duration-200 ${
                selected
                  ? 'bg-[#FACC15] text-[#1A1A1A] font-semibold'
                  : available
                  ? 'text-[#F3F0DF] hover:bg-[#F3F0DF]/10 cursor-pointer'
                  : 'text-[#F3F0DF]/15 cursor-default'
              }`}
              aria-label={`${day} de ${MONTH_NAMES_ES[viewMonth]}`}
              aria-pressed={selected}
            >
              {day}
            </button>
          )
        })}
      </div>

      <p className="mt-4 text-[10px] tracking-[0.15em] uppercase text-[#F3F0DF]/20 font-sans text-center">
        Fechas disponibles: viernes y sábados
      </p>
    </div>
  )
}

export default function ViewExperiencias() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [reserved, setReserved] = useState(false)

  const handleReserve = () => {
    if (selectedDate) setReserved(true)
  }

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
          Una sesión guiada de dos horas y media que no enseña a beber mezcal — te enseña
          a leer el paisaje oaxaqueño en un vaso.
        </p>
      </section>

      {/* Price + calendar */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 border-b border-[#2C2C2C]">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#F3F0DF]/30 mb-4 font-sans">Inversión</p>
            <p className="font-serif text-7xl text-[#FACC15] mb-1">$1,300</p>
            <p className="text-sm text-[#F3F0DF]/30 font-sans mb-10">
              MXN por persona · Incluye 5 destilados
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="border-t border-[#F3F0DF]/10 pt-5">
                  <Icon size={13} className="text-[#6B7F5E] mb-3" />
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#F3F0DF]/30 mb-1 font-sans">
                    {label}
                  </p>
                  <p className="font-serif text-base text-[#F3F0DF]">{value}</p>
                </div>
              ))}
            </div>

            {/* Reservation confirmation */}
            {reserved ? (
              <div className="flex items-center gap-3 bg-[#6B7F5E]/20 border border-[#6B7F5E]/40 px-6 py-4">
                <Check size={14} className="text-[#6B7F5E] shrink-0" />
                <div>
                  <p className="font-sans text-xs text-[#F3F0DF] font-medium">
                    Solicitud enviada
                  </p>
                  <p className="font-sans text-xs text-[#F3F0DF]/40 mt-0.5">
                    {selectedDate?.toLocaleDateString('es-MX', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            ) : (
              <button
                onClick={handleReserve}
                disabled={!selectedDate}
                className={`w-full md:w-auto px-10 py-4 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 font-sans ${
                  selectedDate
                    ? 'bg-[#FACC15] text-[#1A1A1A] hover:bg-[#F3F0DF]'
                    : 'bg-[#2C2C2C] text-[#F3F0DF]/20 cursor-not-allowed'
                }`}
              >
                {selectedDate ? 'Reservar Lugar' : 'Selecciona una fecha'}
              </button>
            )}
          </div>

          {/* Right: calendar */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#F3F0DF]/30 mb-4 font-sans">
              Calendario de Fechas
            </p>
            <InteractiveCalendar
              selectedDate={selectedDate}
              onSelect={(d) => { setSelectedDate(d); setReserved(false) }}
            />
            {selectedDate && (
              <p className="mt-3 text-xs text-[#FACC15] font-sans tracking-wide">
                Fecha seleccionada:{' '}
                {selectedDate.toLocaleDateString('es-MX', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                })}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-12 font-sans">Itinerario</p>
        <div>
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

      {/* Closing quote */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="bg-[#2C2C2C] p-10">
          <p className="font-serif text-xl italic text-[#F3F0DF]/60 leading-relaxed text-balance">
            &ldquo;No se explica el mezcal. Se escucha. Cada trago es una conversación entre
            el maguey, la tierra y quien lo destila.&rdquo;
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-[#6B7F5E] mt-6 font-sans">
            — Equipo Tutuma
          </p>
        </div>
      </section>
    </main>
  )
}
