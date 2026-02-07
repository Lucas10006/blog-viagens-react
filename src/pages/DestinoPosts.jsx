// Página que mostra os posts de um destino específico
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllPosts } from '../services/api'
import PostCard from '../components/PostCard'

function DestinoPosts() {
  const { id } = useParams()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllPosts().then(data => {
      // Filtrar posts pelo destinoId
      const filteredPosts = data.filter(
        post => String(post.destinoId) === String(id)
      )
      setPosts(filteredPosts)
    })
  }, [id])

  return (
    <div>
      <h1>Posts do Destino</h1>

      {posts.length === 0 && <p>Sem posts para este destino.</p>}

      <div style={{ display: 'flex', gap: '1rem' }}>
        {posts.map(post => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.titulo}
            description={post.descricao}
            image={post.imagem}
          />
        ))}
      </div>
    </div>
  )
}

export default DestinoPosts