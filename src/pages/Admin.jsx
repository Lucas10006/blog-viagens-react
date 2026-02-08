// Página principal do backoffice
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {
  const navigate = useNavigate()

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin')
    if (!isAdmin) {
      navigate('/admin/login')
    }
  }, [navigate])

  return (
    <div>
      <h1>Backoffice</h1>
      <p>Área de gestão de posts</p>
    </div>
  )
}

export default Admin
