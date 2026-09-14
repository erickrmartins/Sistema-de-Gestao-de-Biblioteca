import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import Main from './pages/main/Main.jsx'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Register />} />
      <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default App
