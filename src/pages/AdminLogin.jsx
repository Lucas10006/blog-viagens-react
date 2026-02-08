// Página de login do backoffice
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAdmin', 'true')
      navigate('/admin')
    } else {
      alert('Credenciais inválidas')
    }
  }

  return (
  <div className="container mt-5">
    <h1 className="mb-4">Login</h1>

    <form onSubmit={handleLogin} className="col-md-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Entrar
      </button>
    </form>

    <p className="text-muted mt-3">
    </p>
  </div>
)

}

export default AdminLogin   