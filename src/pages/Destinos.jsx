import { useEffect, useState } from 'react'
import { getDestinos } from '../services/api'
import DestinoCard from '../components/DestinoCard'

function Destinos() {
  const [destinos, setDestinos] = useState([])

  useEffect(() => {
    getDestinos().then(data => setDestinos(data))
  }, [])

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Escolhe o teu destino</h1>

      <div className="row">
        {destinos.map(destino => (
          <div key={destino.id} className="col-md-4 mb-4">
            <DestinoCard
              id={destino.id}
              nome={destino.nome}
              pais={destino.pais}
              imagem={destino.imagem}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Destinos
