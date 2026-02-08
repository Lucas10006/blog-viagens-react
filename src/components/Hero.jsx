function Hero() {
  return (
    <div
      className="d-flex align-items-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px'
      }}
    >
      <div className="container">
        <h1 className="display-5 fw-bold">Blog de Viagens</h1>
        <p className="lead">
          Descobre destinos incríveis pelo mundo
        </p>
      </div>
    </div>
  )
}

export default Hero
