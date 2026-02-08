function Home() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-5 fw-bold mb-3">
            Descobre o teu próximo destino
          </h1>

          <p className="lead">
            Explora países, cidades e experiências incríveis pelo mundo.
            Encontra inspiração para a tua próxima viagem.
          </p>

          <a href="/destinos" className="btn btn-primary btn-lg mt-3">
            Explorar destinos
          </a>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
            alt="Travel"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  )
}

export default Home