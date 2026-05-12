'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ShoppingBag, Check } from 'lucide-react'
import { allProducts, brands } from '@/lib/tutuma-data'

type CartItem = { id: string; name: string; price: number; qty: number }

export default function ViewTienda() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [added, setAdded] = useState<string | null>(null)
  const [filterBrand, setFilterBrand] = useState<string>('all')

  const filtered =
    filterBrand === 'all'
      ? allProducts
      : allProducts.filter((p) => p.brandId === filterBrand)

  const handleAdd = (id: string, name: string, price: number) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id)
      if (existing) return prev.map((i) => i.id === id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { id, name, price, qty: 1 }]
    })
    setAdded(id)
    setTimeout(() => setAdded(null), 1500)
  }

  const totalItems = cart.reduce((s, i) => s + i.qty, 0)
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <main className="min-h-screen bg-[#F3F0DF] pt-24 pb-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background image with overlay */}
      <Image
        src="/images/bg-tienda.jpg"
        alt="Botellas de mezcal en estantes"
        fill
        className="object-cover object-center absolute inset-0 -z-10"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-[#F3F0DF]/85 -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#6B7F5E] mb-3 font-sans">Tienda</p>
            <h1 className="font-serif text-6xl md:text-7xl text-[#1A1A1A] font-bold">
              {filtered.length} productos
            </h1>
          </div>
          {totalItems > 0 && (
            <div className="flex items-center gap-3 bg-[#1A1A1A] text-[#F3F0DF] px-8 py-4 text-sm font-sans tracking-wide">
              <ShoppingBag size={16} />
              <span className="text-xs tracking-[0.2em] uppercase">
                {totalItems} {totalItems === 1 ? 'ítem' : 'ítems'} · ${total.toLocaleString()} MXN
              </span>
            </div>
          )}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setFilterBrand('all')}
            className={`px-6 py-3 text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-200 font-sans ${
              filterBrand === 'all'
                ? 'bg-[#1A1A1A] text-[#F3F0DF]'
                : 'border border-[#C8C4B0] text-[#1A1A1A]/50 hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
            }`}
          >
            Todas
          </button>
          {brands.map((b) => (
            <button
              key={b.id}
              onClick={() => setFilterBrand(b.id)}
              className={`px-6 py-3 text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-200 font-sans ${
                filterBrand === b.id
                  ? 'bg-[#1A1A1A] text-[#F3F0DF]'
                  : 'border border-[#C8C4B0] text-[#1A1A1A]/50 hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* Grid — no tasting notes, only name + price + CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#C8C4B0]">
          {filtered.map((product) => {
            const isAdded = added === product.id
            const brandColor = brands.find((b) => b.id === product.brandId)?.accentColor ?? '#6B7F5E'
            return (
              <div key={product.id} className="bg-[#F3F0DF] p-6 flex flex-col gap-4">
                <div className="w-1.5 h-10" style={{ backgroundColor: brandColor }} />
                <div className="flex-1">
                  <p className="text-xs tracking-[0.2em] uppercase text-[#1A1A1A]/40 mb-2 font-semibold font-sans">
                    {product.brandName}
                  </p>
                  <h3 className="font-serif text-lg md:text-xl text-[#1A1A1A] leading-tight font-bold">
                    {product.name}
                  </h3>
                  {product.agave && (
                    <p className="text-xs text-[#1A1A1A]/40 mt-2 font-sans">{product.agave}</p>
                  )}
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-[#C8C4B0]">
                  <span className="font-sans text-sm font-bold text-[#1A1A1A]">
                    ${product.price.toLocaleString()}
                    <span className="text-xs text-[#1A1A1A]/40 font-normal"> MXN</span>
                  </span>
                  <button
                    onClick={() => handleAdd(product.id, product.name, product.price)}
                    className={`flex items-center gap-1.5 px-4 py-2 text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300 font-sans ${
                      isAdded
                        ? 'bg-[#6B7F5E] text-[#F3F0DF]'
                        : 'bg-[#1A1A1A] text-[#F3F0DF] hover:bg-[#FACC15] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check size={10} />
                        Añadido
                      </>
                    ) : (
                      'Añadir al carrito'
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
