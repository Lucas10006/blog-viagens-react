import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDestinos } from '../services/api'
import { getLikes, createLike } from '../services/api'

function Destino() {
  const { id } = useParams()
  const [destino, setDestino] = useState(null)

  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)

  const username = JSON.parse(localStorage.getItem('user'))?.username

  useEffect(() => {
    getDestinos().then(data => {
      const found = data.find(d => String(d.id) === String(id))
      setDestino(found)
    })

    getLikes().then(data => {
      const destinoLikes = data.filter(
        l => String(l.destinoId) === String(id)
      )

      setLikes(destinoLikes.length)

      if (username) {
        const alreadyLiked = destinoLikes.some(
          l => l.username === username
        )
        setHasLiked(alreadyLiked)
      }
    })
  }, [id, username])

  if (!destino) {
    return <p className="container mt-4">A carregar destino...</p>
  }

  function handleLike() {
    if (!username || hasLiked) return

    createLike({
      username,
      destinoId: id
    }).then(() => {
      setLikes(likes + 1)
      setHasLiked(true)
    })
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

      <div className="mt-3">
        <button
          className="btn btn-outline-danger"
          disabled={!username || hasLiked}
          onClick={handleLike}
        >
          ❤️ {likes} Likes
        </button>

        {!username && (
          <p className="text-light mt-2">
            Faz login para dar like neste destino
          </p>
        )}
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
