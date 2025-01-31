// import { useState } from 'react'
import Inicio from './components/Inicio/Inicio'
import Nosotros from './components/Inicio/Nosotros/Nosotros'
import TiposCafe from './components/Inicio/TiposCafe/tiposCafe'
import Contactanos from './components/Inicio/Contactanos/Contactanos'
import { Route, Routes } from 'react-router-dom'
import NavBarra from './components/Inicio/Navbar/Navbar'
import './App.css'

function App() {
  return (
    <>
      <NavBarra />
    <Routes>
      <Route path='/inicio' element={<Inicio />}/>
      <Route path='/nosotros' element={<Nosotros />}/>
      <Route path='/tipos-cafe' element={<TiposCafe />}/>
      <Route path='/contactanos' element={<Contactanos />}/>
      <Route path='*' element={<Inicio />}/>
    </Routes>
    </>
  )
}

export default App
