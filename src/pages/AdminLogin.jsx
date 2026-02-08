// Página de login do backoffice
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    // Credenciais simples (aceitável para o trabalho)
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAdmin', 'true')
      navigate('/admin')
    } else {
      alert('Credenciais inválidas')
    }
  }

  return (
    <div>
      <h1>Backoffice Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default AdminLogin   