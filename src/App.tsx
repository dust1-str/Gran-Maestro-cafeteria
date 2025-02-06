// import { useState } from 'react'
// import Inicio from './components/Inicio/Inicio'
import { lazy, Suspense } from 'react';
// import Nosotros from './components/Inicio/Nosotros/Nosotros'
// import TiposCafe from './components/Inicio/TiposCafe/tiposCafe'
// import Contactanos from './components/Inicio/Contactanos/Contactanos'
import { Route, Routes, } from 'react-router-dom'
// import NavBarra from './components/Inicio/Navbar/Navbar'

const Inicio = lazy(() => import('./components/Inicio/Inicio'))
const Nosotros = lazy(() => import('./components/Inicio/Nosotros/Nosotros'))
const Contactanos = lazy(() => import('./components/Inicio/Contactanos/Contactanos'))
const TiposCafe = lazy(() => import('./components/Inicio/TiposCafe/tiposCafe'))
const NavBarra = lazy(() => import('./components/Inicio/Navbar/Navbar'))


function App() {
  return (
    <Suspense>
      <NavBarra />
      <Routes>
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/tipos-cafe' element={<TiposCafe />} />
        <Route path='/contactanos' element={<Contactanos />} />
        <Route path='*' element={<Inicio />} />
      </Routes>
    </Suspense>
  )
}

export default App
