import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import OlaMundo from './pages/OlaMundo/OlaMundo.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<OlaMundo />} />
    </Routes>
  )
}

export default App
