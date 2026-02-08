import { Link } from 'react-router-dom'

function DestinoCard({ id, nome, pais, imagem }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={imagem}
        className="card-img-top"
        alt={nome}
        style={{ height: '180px', objectFit: 'cover' }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nome}</h5>
        <p className="card-text text-muted">{pais}</p>

        <Link
          to={`/destinos/${id}`}
          className="btn btn-outline-primary mt-auto"
        >
          Explorar
        </Link>
      </div>
    </div>
  )
}

export default DestinoCard
