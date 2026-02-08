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
  <div className="container mt-4">
    <h1 className="mb-4">Blog de Viagens</h1>

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
)
}

export default Home