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

  // If viewing a specific product
  if (selectedProduct && activeBrand) {
    return (
      <ProductDetail
        product={selectedProduct}
        brand={activeBrand}
        onBack={() => setSelectedProduct(null)}
        onBackToBrands={() => {
          setSelectedProduct(null)
          setSubView('grid')
        }}
        onGoToTienda={() => onNavigate('tienda')}
      />
    )
  }

  // If viewing a specific brand
  if (activeBrand) {
    return (
      <BrandView
        brand={activeBrand}
        onBack={() => setSubView('grid')}
        onSelectProduct={setSelectedProduct}
      />
    )
  }

  // Main grid view
  return (
    <main className="min-h-screen bg-[#F3F0DF] pt-24 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-4 font-sans">
          Explorador Narrativo
        </p>
        <h1 className="font-serif text-6xl md:text-7xl text-[#1A1A1A] mb-4 text-balance font-bold">
          Colectivos
        </h1>
        <p className="font-sans text-lg md:text-xl text-[#1A1A1A]/60 leading-relaxed mb-16 max-w-2xl">
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
                className="w-1.5 h-10 mb-8 transition-none"
                style={{ backgroundColor: brand.accentColor }}
              />
              <p
                className="text-xs tracking-[0.3em] uppercase mb-2 font-semibold font-sans group-hover:opacity-80 transition-opacity"
                style={{ color: brand.accentColor }}
              >
                {brand.region} · {brand.state}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] group-hover:text-[#F3F0DF] mb-4 transition-colors duration-500 font-bold">
                {brand.name}
              </h2>
              <p className="text-base md:text-lg text-[#1A1A1A]/60 group-hover:text-[#F3F0DF]/60 leading-relaxed mb-6 transition-colors duration-500 font-sans">
                {brand.description}
              </p>
              <div className="flex items-center gap-2 text-[#1A1A1A]/30 group-hover:text-[#FACC15] transition-colors duration-500">
                <span className="text-xs tracking-[0.2em] uppercase font-semibold font-sans">
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
    <main className="min-h-screen bg-[#1A1A1A] text-[#F3F0DF] pt-24 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Back button - clearly visible */}
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-[#FACC15] hover:text-[#F3F0DF] transition-colors text-sm tracking-[0.15em] uppercase font-semibold font-sans mb-16 py-3"
        >
          <ArrowLeft size={18} />
          Todos los Colectivos
        </button>

        {/* Brand header */}
        <div className="mb-20">
          <div
            className="w-1.5 h-12 mb-8"
            style={{ backgroundColor: brand.accentColor }}
          />
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4 font-semibold font-sans"
            style={{ color: brand.accentColor }}
          >
            {brand.region} · {brand.state}
          </p>
          <h1 className="font-serif text-6xl md:text-7xl mb-6 font-bold">{brand.name}</h1>
          <p className="font-sans text-lg md:text-xl text-[#F3F0DF]/60 leading-relaxed max-w-2xl">
            {brand.description}
          </p>
        </div>

        {/* Products grid */}
        <p className="text-xs tracking-[0.4em] uppercase text-[#F3F0DF]/40 mb-8 font-semibold font-sans">
          {brand.products.length} Expresiones
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2C2C2C]">
          {brand.products.map((product) => (
            <button
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group bg-[#1A1A1A] hover:bg-[#2C2C2C] p-10 md:p-12 text-left transition-all duration-300 flex flex-col gap-6 border-l-2"
              style={{ borderColor: brand.accentColor + '40' }}
            >
              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-3xl text-[#F3F0DF] group-hover:text-[#FACC15] transition-colors duration-300 mb-2 font-bold">
                  {product.name}
                </h3>
                {product.agave && (
                  <p className="text-xs tracking-[0.2em] text-[#F3F0DF]/40 group-hover:text-[#F3F0DF]/60 font-sans mb-6 transition-colors font-semibold">
                    {product.agave}
                  </p>
                )}
                <div className="space-y-4 mb-8">
                  {product.notes.vista && (
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#F3F0DF]/30 group-hover:text-[#FACC15] transition-colors font-sans mb-1 font-semibold">
                        Vista
                      </p>
                      <p className="text-xs md:text-sm leading-relaxed text-[#F3F0DF]/50 group-hover:text-[#F3F0DF]/70 transition-colors line-clamp-2 font-serif">
                        {product.notes.vista}
                      </p>
                    </div>
                  )}
                  {product.notes.nariz && (
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#F3F0DF]/30 group-hover:text-[#FACC15] transition-colors font-sans mb-1 font-semibold">
                        Nariz
                      </p>
                      <p className="text-xs md:text-sm leading-relaxed text-[#F3F0DF]/50 group-hover:text-[#F3F0DF]/70 transition-colors line-clamp-2 font-serif">
                        {product.notes.nariz}
                      </p>
                    </div>
                  )}
                  {!product.notes.vista && !product.notes.nariz && product.notes.boca && (
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#F3F0DF]/30 group-hover:text-[#FACC15] transition-colors font-sans mb-1 font-semibold">
                        Perfil
                      </p>
                      <p className="text-xs md:text-sm leading-relaxed text-[#F3F0DF]/50 group-hover:text-[#F3F0DF]/70 transition-colors line-clamp-2 font-serif">
                        {product.notes.boca}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-[#F3F0DF]/10">
                <div className="text-[11px] tracking-[0.15em] uppercase text-[#F3F0DF]/30 group-hover:text-[#F3F0DF]/50 transition-colors font-sans font-semibold">
                  {product.notes.vista && product.notes.nariz ? 'Vista · Nariz · Boca' : 'Perfil'}
                </div>
                <div className="flex items-center gap-2 text-[#FACC15] group-hover:text-[#F3F0DF] transition-colors">
                  <span className="text-xs tracking-[0.2em] uppercase font-sans font-semibold">
                    Ver completo
                  </span>
                  <ArrowRight size={12} />
                </div>
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
  onBackToBrands,
  onGoToTienda,
}: {
  product: Product
  brand: Brand
  onBack: () => void
  onBackToBrands: () => void
  onGoToTienda: () => void
}) {
  const sensorNotes = [
    { label: 'Vista', icon: Eye, content: product.notes.vista },
    { label: 'Nariz', icon: Wind, content: product.notes.nariz },
    { label: 'Boca', icon: Flame, content: product.notes.boca },
  ].filter((n) => n.content)

  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#F3F0DF] pt-24 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb navigation - clearly visible */}
        <div className="flex items-center gap-4 mb-16">
          <button
            onClick={onBackToBrands}
            className="flex items-center gap-3 text-[#FACC15] hover:text-[#F3F0DF] transition-colors text-sm tracking-[0.15em] uppercase font-semibold font-sans py-3"
          >
            <ArrowLeft size={18} />
            Todos los Colectivos
          </button>
          <span className="text-[#F3F0DF]/30 text-sm">/</span>
          <button
            onClick={onBack}
            className="text-[#F3F0DF]/60 hover:text-[#FACC15] transition-colors text-sm tracking-[0.15em] uppercase font-semibold font-sans py-3"
          >
            {brand.name}
          </button>
        </div>

        {/* Product header */}
        <div
          className="w-1.5 h-10 mb-8"
          style={{ backgroundColor: brand.accentColor }}
        />
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4 font-semibold font-sans"
          style={{ color: brand.accentColor }}
        >
          {brand.name} · {brand.region}, {brand.state}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl mb-4 font-bold">{product.name}</h1>
        {product.agave && (
          <p className="font-sans text-sm tracking-[0.25em] uppercase text-[#F3F0DF]/40 mb-16 font-semibold">
            {product.agave}
          </p>
        )}

        {/* Tasting notes */}
        <div className="border-t border-[#F3F0DF]/10 space-y-px bg-[#0A0A0A]">
          {sensorNotes.map(({ label, icon: Icon, content }, idx) => (
            <div
              key={label}
              className="border-b border-[#F3F0DF]/10 py-12 md:py-16 px-8 md:px-12 flex flex-col md:flex-row gap-8 md:gap-16 group hover:bg-[#2C2C2C]/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4 md:w-36 shrink-0">
                <Icon size={18} className="text-[#FACC15] shrink-0 mt-1" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#F3F0DF]/50 font-semibold font-sans group-hover:text-[#FACC15] transition-colors">
                  {label}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-[#F3F0DF]/85 group-hover:text-[#F3F0DF] transition-colors duration-300 text-balance">
                  {content}
                </p>
                <div className="mt-6 flex gap-1.5">
                  {sensorNotes.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        i === idx ? 'bg-[#FACC15]' : 'bg-[#F3F0DF]/10'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button
            onClick={onGoToTienda}
            className="group w-full md:w-auto flex items-center justify-center md:justify-start gap-3 bg-[#FACC15] text-[#1A1A1A] px-10 py-5 text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#F3F0DF] transition-all duration-300 font-sans"
          >
            Ver Disponibilidad en Tienda
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </main>
  )
}
