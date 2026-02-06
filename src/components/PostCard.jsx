// Componente que representa um post de viagem em formato de card
import { Link } from 'react-router-dom'
import './PostCard.css'

function PostCard({ id, title, description, image }) {
  return (
    <Link to={`/post/${id}`} className="post-link">
      <div className="post-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default PostCard

