'use client'

import { useState } from 'react'
import { ArrowLeft, Eye, Wind, Flame, ArrowRight } from 'lucide-react'
import { brands, type Brand, type Product } from '@/lib/tutuma-data'

interface ViewProductosProps {
  onNavigate: (view: 'tienda') => void
}

type SubView = 'grid' | string

export default function ViewProductos({ onNavigate }: ViewProductosProps) {
  const [subView, setSubView] = useState<SubView>('grid')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const activeBrand = brands.find((b) => b.id === subView)

  if (selectedProduct && activeBrand) {
    return (
      <ProductDetail
        product={selectedProduct}
        brand={activeBrand}
        onBack={() => setSelectedProduct(null)}
        onGoToTienda={() => onNavigate('tienda')}
      />
    )
  }

  if (activeBrand) {
    return (
      <BrandView
        brand={activeBrand}
        onBack={() => setSubView('grid')}
        onSelectProduct={setSelectedProduct}
      />
    )
  }

  return (
    <main className="min-h-screen bg-[#F3F0DF] pt-24 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-4 font-sans">
          Explorador Narrativo
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] mb-4 text-balance">
          Marcas de Origen
        </h1>
        <p className="font-sans text-[#1A1A1A]/50 text-sm leading-relaxed mb-16 max-w-lg">
          Cuatro expresiones del territorio oaxaqueño. Selecciona una marca para explorar
          su colección completa con perfil sensorial detallado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#C8C4B0]">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setSubView(brand.id)}
              className="group bg-[#F3F0DF] hover:bg-[#1A1A1A] transition-colors duration-500 p-10 text-left"
            >
              <div
                className="w-1 h-10 mb-8 transition-none"
                style={{ backgroundColor: brand.accentColor }}
              />
              <p
                className="text-xs tracking-[0.3em] uppercase mb-2 font-sans group-hover:opacity-80 transition-opacity"
                style={{ color: brand.accentColor }}
              >
                {brand.region} · {brand.state}
              </p>
              <h2 className="font-serif text-4xl text-[#1A1A1A] group-hover:text-[#F3F0DF] mb-4 transition-colors duration-500">
                {brand.name}
              </h2>
              <p className="text-sm text-[#1A1A1A]/50 group-hover:text-[#F3F0DF]/50 leading-relaxed mb-6 transition-colors duration-500 font-sans">
                {brand.description}
              </p>
              <div className="flex items-center gap-2 text-[#1A1A1A]/30 group-hover:text-[#FACC15] transition-colors duration-500">
                <span className="text-xs tracking-[0.2em] uppercase font-sans">
                  {brand.products.length} expresiones
                </span>
                <ArrowRight size={12} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}

function BrandView({
  brand,
  onBack,
  onSelectProduct,
}: {
  brand: Brand
  onBack: () => void
  onSelectProduct: (p: Product) => void
}) {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#F3F0DF] pt-24 pb-24">
      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-16">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#F3F0DF]/40 hover:text-[#FACC15] transition-colors text-xs tracking-[0.2em] uppercase mb-10"
        >
          <ArrowLeft size={12} />
          Todas las marcas
        </button>
        <div
          className="w-1 h-10 mb-6"
          style={{ backgroundColor: brand.accentColor }}
        />
        <p
          className="text-xs tracking-[0.4em] uppercase mb-3 font-sans"
          style={{ color: brand.accentColor }}
        >
          {brand.region} · {brand.state}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl mb-4">{brand.name}</h1>
        <p className="font-sans text-[#F3F0DF]/50 text-sm leading-relaxed max-w-lg">
          {brand.description}
        </p>
      </div>

      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="space-y-px">
          {brand.products.map((product) => (
            <button
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group w-full bg-[#2C2C2C] hover:bg-[#F3F0DF] p-8 md:p-10 text-left transition-colors duration-300 flex flex-col md:flex-row md:items-start md:justify-between gap-6"
            >
              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-3xl text-[#F3F0DF] group-hover:text-[#1A1A1A] transition-colors duration-300 mb-1">
                  {product.name}
                </h3>
                {product.agave && (
                  <p className="text-xs tracking-[0.2em] text-[#F3F0DF]/30 group-hover:text-[#1A1A1A]/40 font-sans mb-4 transition-colors">
                    {product.agave}
                  </p>
                )}
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-[#F3F0DF]/20 group-hover:text-[#1A1A1A]/30 font-sans transition-colors">
                    Vista · Nariz · Boca
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#FACC15] group-hover:text-[#6B7F5E] transition-colors shrink-0">
                <span className="text-xs tracking-[0.2em] uppercase font-sans">
                  Ver perfil completo
                </span>
                <ArrowRight size={12} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}

function ProductDetail({
  product,
  brand,
  onBack,
  onGoToTienda,
}: {
  product: Product
  brand: Brand
  onBack: () => void
  onGoToTienda: () => void
}) {
  const sensorNotes = [
    { label: 'Vista', icon: Eye, content: product.notes.vista },
    { label: 'Nariz', icon: Wind, content: product.notes.nariz },
    { label: 'Boca', icon: Flame, content: product.notes.boca },
  ]

  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#F3F0DF] pt-24 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#F3F0DF]/40 hover:text-[#FACC15] transition-colors text-xs tracking-[0.2em] uppercase mb-12"
        >
          <ArrowLeft size={12} />
          {brand.name}
        </button>

        <div
          className="w-1 h-8 mb-6"
          style={{ backgroundColor: brand.accentColor }}
        />
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4 font-sans"
          style={{ color: brand.accentColor }}
        >
          {brand.name} · {brand.region}, {brand.state}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl mb-2">{product.name}</h1>
        {product.agave && (
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#F3F0DF]/30 mb-12">
            {product.agave}
          </p>
        )}

        {/* Full verbatim tasting notes */}
        <div className="border-t border-[#F3F0DF]/10">
          {sensorNotes.map(({ label, icon: Icon, content }) => (
            <div
              key={label}
              className="border-b border-[#F3F0DF]/10 py-10 flex flex-col md:flex-row gap-4 md:gap-12"
            >
              <div className="flex items-center gap-3 md:w-28 shrink-0">
                <Icon size={13} className="text-[#6B7F5E] shrink-0" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#F3F0DF]/40 font-sans">
                  {label}
                </span>
              </div>
              <p className="font-serif text-lg md:text-xl leading-relaxed text-[#F3F0DF]/80">
                {content}
              </p>
            </div>
          ))}
        </div>

        {/* CTA — no price shown */}
        <div className="mt-14">
          <button
            onClick={onGoToTienda}
            className="group w-full md:w-auto flex items-center justify-center md:justify-start gap-3 bg-[#FACC15] text-[#1A1A1A] px-10 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#F3F0DF] transition-colors duration-300 font-sans"
          >
            Ver Disponibilidad en Tienda
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </main>
  )
}
