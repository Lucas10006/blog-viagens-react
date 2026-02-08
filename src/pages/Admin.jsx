// Página principal do backoffice
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPosts, deletePost, createPost } from '../services/api'

function Admin() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [imagem, setImagem] = useState('')
  const [destinoId, setDestinoId] = useState('')

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin')
    if (!isAdmin) {
      navigate('/admin/login')
    } else {
      loadPosts()
    }
  }, [navigate])

  function loadPosts() {
    getPosts().then(data => setPosts(data))
  }

  function handleDelete(id) {
    if (confirm('Tens a certeza que queres apagar este post?')) {
      deletePost(id).then(() => loadPosts())
    }
  }

  function handleCreatePost(e) {
    e.preventDefault()

    const newPost = {
      titulo,
      descricao,
      imagem,
      destinoId: Number(destinoId)
    }

    createPost(newPost).then(() => {
      setTitulo('')
      setDescricao('')
      setImagem('')
      setDestinoId('')
      loadPosts()
    })
  }

  return (
    <div className="container mt-4">
      <h1>Backoffice</h1>

      {/* FORMULÁRIO CRIAR POST */}
      <form onSubmit={handleCreatePost} className="mb-4">
        <h3>Criar novo post</h3>

        <div className="row">
          <div className="col-md-3 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Título"
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
              required
            />
          </div>

          <div className="col-md-3 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Descrição"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              required
            />
          </div>

          <div className="col-md-3 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="URL da imagem"
              value={imagem}
              onChange={e => setImagem(e.target.value)}
              required
            />
          </div>

          <div className="col-md-2 mb-2">
            <input
              type="number"
              className="form-control"
              placeholder="Destino ID"
              value={destinoId}
              onChange={e => setDestinoId(e.target.value)}
              required
            />
          </div>

          <div className="col-md-1 mb-2">
            <button className="btn btn-success w-100">
              Criar
            </button>
          </div>
        </div>
      </form>

      {/* TABELA DE POSTS */}
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.titulo}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(post.id)}
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