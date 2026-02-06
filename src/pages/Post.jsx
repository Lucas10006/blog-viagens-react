// Página de um post individual
import { useParams } from 'react-router-dom'

function Post() {
  // Obtém o ID do post a partir da URL
  const { id } = useParams()

  return (
    <div>
      <h1>Post de Viagem</h1>
      <p>Post número: {id}</p>
      <p>Conteúdo completo do post será apresentado aqui.</p>
    </div>
  )
}

export default Post
