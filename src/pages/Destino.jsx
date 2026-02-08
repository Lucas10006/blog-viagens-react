import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDestinos } from '../services/api'

function Destino() {
  const { id } = useParams()
  const [destino, setDestino] = useState(null)

  useEffect(() => {
    getDestinos().then(data => {
      const found = data.find(d => String(d.id) === String(id))
      setDestino(found)
    })
  }, [id])

  if (!destino) {
    return <p className="container mt-4">A carregar destino...</p>
  }

  return (
    <>
      <div
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${destino.imagem}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '260px'
        }}
      >
        <div className="container">
          <h1 className="display-5 fw-bold">{destino.nome}</h1>
          <p className="lead">{destino.pais}</p>
        </div>
      </div>

      <div className="container mt-4">
        <p className="lead">
          Explora este destino e começa a planear a tua próxima viagem.
        </p>
      </div>
    </>
  )
}

export default Destino
