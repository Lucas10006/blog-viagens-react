// Comunicação com a API Sheety

const BASE_URL = 'https://api.sheety.co/4c017062924501d35e9c26e8b8f65a8d/blobViagens'

// Buscar todos os posts
export async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts`)
  const data = await response.json()
  return data.posts
}

// Buscar todos os destinos
export async function getDestinos() {
  const response = await fetch(`${BASE_URL}/destinos`)
  const data = await response.json()
  return data.destinos
}
