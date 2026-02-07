// Página de um post individual
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostById } from '../services/api'

function Post() {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  // Vai buscar o post à API com base no ID da URL
  useEffect(() => {
    getPostById(id).then(data => setPost(data))
  }, [id])

  // Enquanto carrega
  if (!post) {
    return <p>A carregar post...</p>
  }

  return (
    <div>
      <h1>{post.titulo}</h1>
      <img src={post.imagem} alt={post.titulo} style={{ maxWidth: '400px' }} />
      <p>{post.descricao}</p>
    </div>
  )
}

export default Post