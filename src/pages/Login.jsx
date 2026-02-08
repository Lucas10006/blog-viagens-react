import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUsers } from '../services/api'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    getUsers().then(users => {
      const found = users.find(
        u => u.username === username && u.password === password
      )

      if (found) {
        localStorage.setItem('isUser', 'true')
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
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100">
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login