function Register() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Criar Conta</h1>

      <form className="col-md-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <button className="btn btn-primary">
          Registar
        </button>
      </form>

      <p className="text-muted mt-3">
      </p>
    </div>
  )
}

export default Register