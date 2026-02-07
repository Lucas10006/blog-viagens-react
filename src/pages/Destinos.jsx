// Página que lista os destinos
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDestinos } from '../services/api'

function Destinos() {
  const [destinos, setDestinos] = useState([])

  useEffect(() => {
    getDestinos().then(data => setDestinos(data))
  }, [])

  return (
    <div>
      <h1>Destinos</h1>

      <ul>
        {destinos.map(destino => (
          <li key={destino.id}>
            <Link to={`/destinos/${destino.id}`}>
              {destino.nome} - {destino.pais}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Destinos