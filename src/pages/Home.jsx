// Página inicial do blog
import PostCard from '../components/PostCard'

function Home() {
  // Dados temporários (mais tarde vêm da API)
  const posts = [
    {
      id: 1,
      title: 'Viagem a Paris',
      description: 'Uma experiência inesquecível na cidade da luz.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34'
    },
    {
      id: 2,
      title: 'Explorar Roma',
      description: 'História, comida e cultura por todo o lado.',
      image: 'https://images.unsplash.com/photo-1526481280691-3e91760cbb34'
    }
  ]

  return (
    <div>
      <h1>Blog de Viagens</h1>

      <div style={{ display: 'flex', gap: '1rem' }}>
        {posts.map(post => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
