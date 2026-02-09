import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUsers } from '../services/api'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const ADMIN_USERNAME = 'admin'
  const ADMIN_PASSWORD = 'admin'

  function handleLogin(e) {
    e.preventDefault()

    // LOGIN do admin
    if (
      username === ADMIN_USERNAME &&
      password === ADMIN_PASSWORD
    ) {
      localStorage.removeItem('isUser')
      localStorage.removeItem('user')
      localStorage.setItem('isAdmin', 'true')
      navigate('/admin')
      return
    }

    // LOGIN do user normal
    getUsers().then(users => {
      const found = users.find(
        u => u.username === username && u.password === password
      )

      if (found) {
        localStorage.removeItem('isAdmin')
        localStorage.setItem('isUser', 'true')
        localStorage.setItem('user', JSON.stringify(found))
        navigate('/')
      } else {
        alert('Credenciais inválidas')
      }
    })
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Login</h1>

      <form onSubmit={handleLogin} className="col-md-4">
        <input
          className="form-control mb-3"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-primary w-100">
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login