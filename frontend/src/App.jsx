import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import Main from './pages/main/Main.jsx'
import Collection from './pages/collection/Collection.jsx'
import Profile from './pages/profile/Profile.jsx'
import Config from './pages/config/Config.jsx'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Register />} />
      <Route path="/" element={<Navigate to={'/acervo'} />} />
      <Route element={<Main />}>
        <Route path="/acervo" element={<Collection />} />
        <Route path="/perfil" element={<Profile />}/>
        <Route path="/config" element={<Config />}/>
      </Route>

    </Routes>
  )
}

export default App
