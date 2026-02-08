import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDestinos, createDestino, deleteDestino } from '../services/api'

function Admin() {
  const navigate = useNavigate()
  const [destinos, setDestinos] = useState([])

  const [nome, setNome] = useState('')
  const [pais, setPais] = useState('')
  const [imagem, setImagem] = useState('')

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin')
    if (!isAdmin) {
      navigate('/admin/login')
    } else {
      loadDestinos()
    }
  }, [navigate])

  function loadDestinos() {
    getDestinos().then(data => setDestinos(data))
  }

  function handleCreate(e) {
    e.preventDefault()

    createDestino({
      nome,
      pais,
      imagem
    }).then(() => {
      setNome('')
      setPais('')
      setImagem('')
      loadDestinos()
    })
  }

  function handleDelete(id) {
    if (confirm('Tens a certeza que queres apagar este destino?')) {
      deleteDestino(id).then(() => loadDestinos())
    }
  }

  return (
    <div className="container mt-4">
      <h1>Backoffice – Destinos</h1>

      {/* FORMULÁRIO */}
      <form onSubmit={handleCreate} className="mb-4">
        <input
          className="form-control mb-2"
          placeholder="Nome do destino"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />

        <input
          className="form-control mb-2"
          placeholder="País"
          value={pais}
          onChange={e => setPais(e.target.value)}
          required
        />

        <input
          className="form-control mb-2"
          placeholder="URL da imagem"
          value={imagem}
          onChange={e => setImagem(e.target.value)}
          required
        />

        <button className="btn btn-primary">
          Criar destino
        </button>
      </form>

      {/* LISTA */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>País</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {destinos.map(destino => (
            <tr key={destino.id}>
              <td>{destino.id}</td>
              <td>{destino.nome}</td>
              <td>{destino.pais}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(destino.id)}
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Admin