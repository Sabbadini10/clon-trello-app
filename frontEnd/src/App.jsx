
import { useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Formulario/>
    </div>
  )
}

export default App
