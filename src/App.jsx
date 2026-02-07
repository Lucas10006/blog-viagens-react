import Navbar from './components/Navbar'
import DestinoPosts from './pages/DestinoPosts'

// Importação do router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importação das páginas
import Home from './pages/Home'
import Destinos from './pages/Destinos'
import Post from './pages/Post'

// Componente principal da aplicação
function App() {
  return (
    <BrowserRouter>
      {/* Barra de navegação visível em todas as páginas */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/destinos/:id" element={<DestinoPosts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
