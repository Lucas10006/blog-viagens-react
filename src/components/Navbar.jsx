import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const [isAdmin, setIsAdmin] = useState(null)
  const [isUser, setIsUser] = useState(null)

  useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin'))
    setIsUser(localStorage.getItem('isUser'))
  }, [location])

  function handleLogout() {
    localStorage.removeItem('isAdmin')
    localStorage.removeItem('isUser')
    setIsAdmin(null)
    setIsUser(null)
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/" title="Início">
          <i className="bi bi-house-fill fs-4"></i>
        </Link>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Início
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/destinos">
              Destinos
            </Link>
          </li>

          {/* NÃO LOGADO */}
          {!isAdmin && !isUser && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Registo
                </Link>
              </li>
            </>
          )}

          {/* USER LOGADO */}
          {isUser && !isAdmin && (
            <li className="nav-item">
              <button
                className="btn btn-outline-light ms-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}

          {/* ADMIN LOGADO */}
          {isAdmin && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Backoffice
                </Link>
              </li>

              <li className="nav-item">
                <button
                  className="btn btn-outline-light ms-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar