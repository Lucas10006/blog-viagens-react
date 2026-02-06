// Componente de navegação principal do site
// Permite navegar entre as páginas sem recarregar
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/destinos">Destinos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
