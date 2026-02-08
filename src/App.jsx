import Navbar from './components/Navbar'
import AdminLogin from './pages/AdminLogin'
import Admin from './pages/Admin'
import Register from './pages/Register'
import Hero from './components/Hero'
import Login from './pages/Login'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Destinos from './pages/Destinos'
import Destino from './pages/Destino'


// Componente principal da aplicação
function App() {
  return (
    <BrowserRouter>
      {/* Hero no topo */}
      <Hero />

      {/* Barra de navegação */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/destinos/:id" element={<Destino />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
