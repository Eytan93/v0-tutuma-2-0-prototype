'use client'

import { useState } from 'react'
import { ArrowLeft, Eye, Wind, Flame } from 'lucide-react'
import { brands, type Brand, type Product } from '@/lib/tutuma-data'

type SubView = 'grid' | string // 'grid' or brand id

export default function ViewProductos() {
  const [subView, setSubView] = useState<SubView>('grid')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const activeBrand = brands.find((b) => b.id === subView)

  if (selectedProduct && activeBrand) {
    return (
      <ProductDetail
        product={selectedProduct}
        brand={activeBrand}
        onBack={() => setSelectedProduct(null)}
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
        <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-4 font-sans">Portfolio</p>
        <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] mb-4 text-balance">
          Marcas de Origen
        </h1>
        <p className="font-sans text-[#1A1A1A]/50 text-sm leading-relaxed mb-16 max-w-lg">
          Cuatro expresiones del territorio oaxaqueño. Selecciona una marca para explorar su colección completa con perfil sensorial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#C8C4B0]">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setSubView(brand.id)}
              className="group bg-[#F3F0DF] hover:bg-[#1A1A1A] transition-colors duration-500 p-10 text-left"
            >
              <div
                className="w-2 h-12 mb-8 transition-colors duration-500"
                style={{ backgroundColor: brand.color }}
              />
              <p className="text-xs tracking-[0.3em] uppercase text-[#6B7F5E] group-hover:text-[#6B7F5E] mb-2 font-sans">
                {brand.region} · {brand.state}
              </p>
              <h2 className="font-serif text-4xl text-[#1A1A1A] group-hover:text-[#F3F0DF] mb-4 transition-colors duration-500">
                {brand.name}
              </h2>
              <p className="text-sm text-[#1A1A1A]/50 group-hover:text-[#F3F0DF]/50 leading-relaxed mb-6 transition-colors duration-500">
                {brand.description}
              </p>
              <div className="flex items-center gap-2 text-[#1A1A1A]/30 group-hover:text-[#FACC15] transition-colors duration-500">
                <span className="text-xs tracking-[0.2em] uppercase font-sans">
                  {brand.products.length} expresiones
                </span>
                <span className="text-lg">→</span>
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
      {/* Header */}
      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-16">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#F3F0DF]/40 hover:text-[#FACC15] transition-colors text-xs tracking-[0.2em] uppercase mb-10"
        >
          <ArrowLeft size={12} />
          Todas las marcas
        </button>
        <p className="text-xs tracking-[0.4em] uppercase mb-3 font-sans" style={{ color: brand.color }}>
          {brand.region} · {brand.state}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl mb-6">{brand.name}</h1>
        <p className="font-sans text-[#F3F0DF]/50 text-sm leading-relaxed max-w-lg">
          {brand.description}
        </p>
      </div>

      {/* Products */}
      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2C2C2C]">
          {brand.products.map((product) => (
            <button
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group bg-[#1A1A1A] hover:bg-[#2C2C2C] p-8 text-left transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#F3F0DF] group-hover:text-[#FACC15] transition-colors duration-300 mb-1">
                    {product.name}
                  </h3>
                  {product.year && (
                    <span className="text-xs tracking-[0.2em] text-[#F3F0DF]/30 font-sans">
                      Cosecha {product.year}
                    </span>
                  )}
                </div>
                <span className="text-[#F3F0DF]/20 group-hover:text-[#FACC15]/50 transition-colors text-xs tracking-widest uppercase font-sans">
                  ${product.price.toLocaleString()} MXN
                </span>
              </div>
              <div className="space-y-3 border-t border-[#F3F0DF]/10 pt-6">
                <div className="flex gap-3">
                  <Eye size={12} className="text-[#6B7F5E] mt-0.5 shrink-0" />
                  <p className="text-xs text-[#F3F0DF]/40 leading-relaxed line-clamp-1 font-sans">{product.vista}</p>
                </div>
                <div className="flex gap-3">
                  <Wind size={12} className="text-[#6B7F5E] mt-0.5 shrink-0" />
                  <p className="text-xs text-[#F3F0DF]/40 leading-relaxed line-clamp-2 font-sans">{product.nariz}</p>
                </div>
              </div>
              <p className="mt-6 text-xs text-[#FACC15]/0 group-hover:text-[#FACC15]/60 transition-colors font-sans tracking-[0.15em] uppercase">
                Ver perfil completo →
              </p>
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
}: {
  product: Product
  brand: Brand
  onBack: () => void
}) {
  const sensorNotes = [
    { label: 'Vista', icon: Eye, content: product.vista },
    { label: 'Nariz', icon: Wind, content: product.nariz },
    { label: 'Boca', icon: Flame, content: product.boca },
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

        <p className="text-xs tracking-[0.4em] uppercase mb-4 font-sans" style={{ color: brand.color }}>
          {brand.name} · {brand.region}
        </p>
        <div className="flex flex-wrap items-end gap-4 mb-2">
          <h1 className="font-serif text-5xl md:text-6xl">{product.name}</h1>
          {product.year && (
            <span className="font-serif text-2xl italic text-[#F3F0DF]/30 mb-1">
              {product.year}
            </span>
          )}
        </div>
        <p className="font-sans text-[#FACC15] text-lg mb-16">
          ${product.price.toLocaleString()} MXN
        </p>

        <div className="space-y-0 border-t border-[#F3F0DF]/10">
          {sensorNotes.map(({ label, icon: Icon, content }) => (
            <div key={label} className="border-b border-[#F3F0DF]/10 py-10 flex flex-col md:flex-row gap-4 md:gap-12">
              <div className="flex items-center gap-3 md:w-32 shrink-0">
                <Icon size={14} className="text-[#6B7F5E]" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#F3F0DF]/40 font-sans">{label}</span>
              </div>
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-[#F3F0DF]/80 text-balance">
                {content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button className="w-full md:w-auto bg-[#FACC15] text-[#1A1A1A] px-12 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#F3F0DF] transition-colors duration-300 font-sans">
            Adquirir — ${product.price.toLocaleString()} MXN
          </button>
        </div>
      </div>
    </main>
  )
}
