'use client'

import { Clock, Users, MapPin, Car, Calendar, Globe, Wine, UtensilsCrossed, Home, Archive, UserCheck } from 'lucide-react'

const details = [
  { icon: Clock, label: 'Duración', value: '1 hora 45 min a 2 horas + traslado' },
  { icon: Wine, label: 'Destilados', value: '5 expresiones (mezcal y whiskey)' },
  { icon: Users, label: 'Capacidad', value: 'Grupos de 2 a 6 personas' },
  { icon: MapPin, label: 'Lugar', value: 'Casa del Maíz y del Maguey' },
  { icon: Car, label: 'Transporte', value: 'Incluido dentro de Oaxaca' },
  { icon: Calendar, label: 'Edad mínima', value: 'Mayores de 18 años' },
  { icon: Globe, label: 'Idioma', value: 'Español (acompañamiento en inglés disponible)' },
]

const includes = [
  { icon: Car, text: 'Transporte redondo dentro de Oaxaca' },
  { icon: Wine, text: 'Bebida refrescante de bienvenida' },
  { icon: Wine, text: 'Selección guiada de cinco destilados: mezcales y whiskeys de maíz nativo' },
  { icon: UtensilsCrossed, text: 'Bocados e intervenciones sensoriales diseñadas para acompañar el recorrido' },
  { icon: Home, text: 'Recorrido guiado por la Casa del Maíz y del Maguey' },
  { icon: Archive, text: 'Cierre en el Archivo de continuidad' },
  { icon: UserCheck, text: 'Acompañamiento del equipo de Tutuma' },
]

const BASE_URL = 'https://tidycal.com/tutumahorizontesustentable'

const groupTiers = [
  { people: 2, total: '2,600', url: `${BASE_URL}/experiencia-m48rv27` },
  { people: 3, total: '3,900', url: `${BASE_URL}/experiencia-19y8l4v` },
  { people: 4, total: '5,200', url: `${BASE_URL}/experiencia` },
  { people: 5, total: '6,500', url: `${BASE_URL}/experiencia-1k890jn-3el98n0` },
  { people: 6, total: '7,800', url: `${BASE_URL}/experiencia-1k890jn` },
]

const faqs = [
  { q: '¿Es una cata de mezcal?', a: 'No es una cata tradicional. Es una experiencia sensorial que va más allá de calificar sabores.' },
  { q: '¿Qué hace diferente esta experiencia?', a: 'Cada destilado funciona como una entrada al territorio: al maíz, al maguey, al tiempo, al trabajo campesino.' },
  { q: '¿Incluye transporte?', a: 'Sí, incluye transporte redondo dentro de Oaxaca.' },
  { q: '¿Dónde se realiza?', a: 'En la Casa del Maíz y del Maguey, San Felipe del Agua, Oaxaca.' },
  { q: '¿Cuánto dura?', a: '1 hora 45 minutos a 2 horas, más tiempo de traslado.' },
  { q: '¿En qué idioma se realiza?', a: 'En español. Para personas de habla inglesa, contamos con acompañamiento en inglés.' },
  { q: '¿Necesito saber de mezcal o whiskey?', a: 'No, la experiencia está diseñada para todos los niveles.' },
  { q: '¿Incluye comida?', a: 'Incluye bocados e intervenciones sensoriales diseñadas para acompañar el recorrido.' },
  { q: '¿Pueden asistir menores de edad?', a: 'No, es exclusiva para mayores de 18 años.' },
  { q: '¿Puedo reservar si viajo solo/a?', a: 'Sí, puedes reservar individualmente.' },
  { q: '¿Puedo reservar para más de 6 personas?', a: 'Para grupos más grandes, contáctanos directamente.' },
]

export default function ViewExperiencias() {
  const handleReserve = (url: string = BASE_URL) => {
    window.open(url, '_blank')
  }

  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#F3F0DF] pt-24 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 border-b border-[#2C2C2C]">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-6 font-sans">Experiencias</p>
        <h1 className="font-serif text-[clamp(2.5rem,10vw,7rem)] leading-[0.95] tracking-tight mb-6 text-balance font-bold">
          No es Cata.<br />
          <em className="italic text-[#FACC15]">Es territorio.</em>
        </h1>
        <p className="font-sans text-lg md:text-xl text-[#F3F0DF]/60 leading-relaxed max-w-3xl mb-8">
          <strong className="text-[#F3F0DF]">Experiencia sensorial de mezcal y whiskey de maíz nativo en Oaxaca</strong>
          <br /><br />
          Hay una forma de probar que no se queda en la copa. En esta experiencia, cada destilado funciona como una entrada al territorio: al maíz, al maguey, al tiempo, al trabajo campesino y a las decisiones que hacen posible cada botella.
        </p>
        <p className="font-sans text-lg md:text-xl text-[#F3F0DF]/60 leading-relaxed max-w-3xl mb-8">
          No venimos a calificar sabores. Venimos a entender lo que hay detrás de ellos.
        </p>
        <p className="font-sans text-lg md:text-xl text-[#F3F0DF]/60 leading-relaxed max-w-3xl">
          Durante aproximadamente dos horas, vivirás un recorrido sensorial guiado por el universo de Tutuma: mezcales, whiskeys de maíz nativo, territorio, percepción y sistema. La experiencia combina destilados seleccionados con bocados e intervenciones sensoriales diseñadas especialmente para acompañar el recorrido.
        </p>
      </section>

      {/* Price + Info */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 border-b border-[#2C2C2C]">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Price and CTA */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#F3F0DF]/30 mb-4 font-semibold font-sans">Inversión</p>
            <p className="font-serif text-7xl md:text-8xl text-[#FACC15] mb-1 font-bold leading-none">$1,300</p>
            <p className="text-lg md:text-xl text-[#F3F0DF]/40 font-sans mb-10">
              MXN por persona
            </p>

            <button
              onClick={() => handleReserve()}
              className="w-full md:w-auto px-12 py-5 text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 font-sans bg-[#FACC15] text-[#1A1A1A] hover:bg-[#F3F0DF]"
            >
              Reservar Ahora
            </button>

            <div className="mt-12 p-6 bg-[#2C2C2C] border-l-4 border-[#6B7F5E] space-y-4">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#FACC15] font-semibold font-sans">
                Antes de reservar
              </p>
              <p className="text-sm text-[#F3F0DF]/70 leading-relaxed font-sans">
                Esta experiencia incluye consumo de bebidas alcohólicas y es exclusiva para personas mayores de 18 años. El precio es de <strong className="text-[#F3F0DF]">$1,300 MXN por persona</strong>.
              </p>
              <p className="text-sm text-[#F3F0DF]/70 leading-relaxed font-sans">
                Para reservar, selecciona el horario disponible y completa tus datos. Después te contactaremos por WhatsApp para confirmar el número de personas, transporte redondo y total a pagar. La reserva queda confirmada únicamente una vez realizado el pago correspondiente.
              </p>
              <p className="text-sm text-[#F3F0DF]/70 leading-relaxed font-sans">
                Una vez enviado el enlace de pago, el horario se mantendrá bloqueado durante <strong className="text-[#F3F0DF]">6 horas</strong>. Si no recibimos el pago dentro de ese plazo, será liberado automáticamente.
              </p>
            </div>
          </div>

          {/* Right: Details */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#F3F0DF]/30 mb-8 font-semibold font-sans">
              Información Esencial
            </p>
            <div className="space-y-6">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 border-b border-[#F3F0DF]/10 pb-6">
                  <Icon size={18} className="text-[#6B7F5E] mt-1 shrink-0" />
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-[#F3F0DF]/40 mb-1 font-semibold font-sans">
                      {label}
                    </p>
                    <p className="font-sans text-base text-[#F3F0DF]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 border-b border-[#2C2C2C]">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-12 font-semibold font-sans">Qué incluye</p>
        <div className="grid md:grid-cols-2 gap-6">
          {includes.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-[#2C2C2C]/50">
              <Icon size={18} className="text-[#FACC15] mt-1 shrink-0" />
              <p className="font-sans text-base text-[#F3F0DF]/80">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing by group size */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 border-b border-[#2C2C2C]">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-4 font-semibold font-sans">Precio por grupo</p>
        <p className="font-sans text-base text-[#F3F0DF]/50 mb-12 max-w-2xl">
          La experiencia de 2.5 horas en La Casa del Maíz y del Maguey se reserva por grupo completo, a $1,300 MXN por persona. Elige el horario según el número de asistentes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#2C2C2C]">
          {groupTiers.map(({ people, total, url }) => (
            <button
              key={people}
              onClick={() => handleReserve(url)}
              className="group bg-[#1A1A1A] hover:bg-[#FACC15] transition-colors duration-300 p-8 text-left"
            >
              <div className="flex items-center gap-2 mb-6">
                <Users size={16} className="text-[#6B7F5E] group-hover:text-[#1A1A1A] transition-colors" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#F3F0DF]/40 group-hover:text-[#1A1A1A] font-semibold font-sans transition-colors">
                  {people} personas
                </span>
              </div>
              <p className="font-serif text-3xl text-[#F3F0DF] group-hover:text-[#1A1A1A] font-bold leading-none mb-1 transition-colors">
                ${total}
              </p>
              <p className="text-xs text-[#F3F0DF]/40 group-hover:text-[#1A1A1A]/70 font-sans transition-colors">MXN total</p>
            </button>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16 border-b border-[#2C2C2C]">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-8 font-semibold font-sans">Ubicación</p>
          <h3 className="font-serif text-2xl md:text-3xl text-[#F3F0DF] mb-4 font-bold">La Casa del Maíz y del Maguey</h3>
          <p className="font-sans text-base text-[#F3F0DF]/60 mb-6">
            Camino a la Chigulera #10G, San Felipe del Agua<br />
            Oaxaca de Juárez, Oaxaca, CP 68026
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/529511000613"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-[#1A1A1A] transition-all font-semibold text-sm"
            >
              WhatsApp: +52 951 100 0613
            </a>
            <a
              href="mailto:info@horizontesustentable.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#F3F0DF]/30 text-[#F3F0DF] hover:border-[#FACC15] hover:text-[#FACC15] transition-all font-semibold text-sm"
            >
              info@horizontesustentable.com
            </a>
          </div>
      </section>

      {/* FAQs */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-16">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-12 font-semibold font-sans">Preguntas Frecuentes</p>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <details key={i} className="group border-b border-[#F3F0DF]/10">
              <summary className="flex items-center gap-4 py-6 cursor-pointer list-none">
                <span className="font-mono text-xs text-[#FACC15] w-8">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-lg md:text-xl text-[#F3F0DF] group-hover:text-[#FACC15] transition-colors flex-1">
                  {faq.q}
                </h3>
                <span className="text-[#F3F0DF]/30 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <div className="pb-6 pl-12">
                <p className="font-sans text-base text-[#F3F0DF]/60 leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="bg-[#2C2C2C] p-12 md:p-16 text-center">
          <p className="font-serif text-2xl md:text-3xl text-[#F3F0DF] leading-relaxed mb-8 max-w-2xl mx-auto">
            Experiencia de 2.5 Horas en La Casa del Maíz y del Maguey
          </p>
          <button
            onClick={() => handleReserve()}
            className="px-12 py-5 text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 font-sans bg-[#FACC15] text-[#1A1A1A] hover:bg-[#F3F0DF]"
          >
            Reservar Ahora
          </button>
        </div>
      </section>
    </main>
  )
}
