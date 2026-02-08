import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const isAdmin = localStorage.getItem('isAdmin')

  function handleLogout() {
    localStorage.removeItem('isAdmin')
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

          {!isAdmin && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/login">
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