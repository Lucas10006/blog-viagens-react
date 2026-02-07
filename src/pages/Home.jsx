// Página inicial do blog
import { useEffect, useState } from 'react'
import { getPosts } from '../services/api'
import PostCard from '../components/PostCard'

function Home() {
  const [posts, setPosts] = useState([])

  // Vai buscar os posts à API quando a página carrega
  useEffect(() => {
    getPosts().then(data => {
      console.log('POSTS DA API 👉', data)
      setPosts(data)
    })
  }, [])

  return (
    <div>
      <h1>Blog de Viagens</h1>

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

export default Home