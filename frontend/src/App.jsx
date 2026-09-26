import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import Main from './pages/main/Main.jsx'
import Collection from './pages/collection/Collection.jsx'
import Profile from './pages/profile/Profile.jsx'
import Config from './pages/config/Config.jsx'
import NotFound from './pages/not-found/NotFound.jsx'
import Book from './pages/book/Book.jsx'
import ViewInfo from './pages/profile/view-info/ViewInfo.jsx'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar" element={<Register />} />
      <Route path="/" element={<Navigate to={'/acervo'} />} />
      <Route element={<Main />}>
        <Route path="/acervo" element={<Collection />} />
        <Route path="/acervo/livro/*" element={<Book />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/perfil/visualizar-informacoes" element={<ViewInfo />} />
        <Route path="/config" element={<Config />} />

        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  )
}

export default App
