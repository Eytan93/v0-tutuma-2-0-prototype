'use client'

import { useState } from 'react'
import Navbar from '@/components/tutuma/Navbar'
import ViewSistema from '@/components/tutuma/ViewSistema'
import ViewProductos from '@/components/tutuma/ViewProductos'
import ViewExperiencias from '@/components/tutuma/ViewExperiencias'
import ViewTienda from '@/components/tutuma/ViewTienda'
import ViewRegalos from '@/components/tutuma/ViewRegalos'

type View = 'sistema' | 'productos' | 'experiencias' | 'tienda' | 'regalos'

export default function TutumaApp() {
  const [currentView, setCurrentView] = useState<View>('sistema')

  const handleNavigate = (view: View) => {
    setCurrentView(view)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      {currentView === 'sistema' && (
        <ViewSistema
          onNavigate={(v) => handleNavigate(v as View)}
        />
      )}
      {currentView === 'productos' && <ViewProductos />}
      {currentView === 'experiencias' && <ViewExperiencias />}
      {currentView === 'tienda' && <ViewTienda />}
      {currentView === 'regalos' && <ViewRegalos />}
    </>
  )
}
