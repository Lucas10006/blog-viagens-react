import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDestinos, getAllPosts } from '../services/api'
import PostCard from '../components/PostCard'

function DestinoPosts() {
  const { id } = useParams()
  const [destino, setDestino] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Buscar dados do destino
    getDestinos().then(data => {
      const found = data.find(d => String(d.id) === String(id))
      setDestino(found)
    })

    // Buscar posts e filtrar por destino
    getAllPosts().then(data => {
      const filtered = data.filter(
        post => String(post.destinoId) === String(id)
      )
      setPosts(filtered)
    })
  }, [id])

  if (!destino) {
    return <p className="container mt-4">A carregar destino...</p>
  }

  return (
    <>
      {/* HERO DO DESTINO */}
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

      {/* CONTEÚDO */}
      <div className="container mt-4">
        <h2 className="mb-4">Experiências neste destino</h2>

        {posts.length === 0 && (
          <p className="text-muted">
            Ainda não existem experiências para este destino.
          </p>
        )}

        <div className="row">
          {posts.map(post => (
            <div key={post.id} className="col-md-4 mb-4">
              <PostCard
                id={post.id}
                title={post.titulo}
                description={post.descricao}
                image={post.imagem}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DestinoPosts