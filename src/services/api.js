// Comunicação com a API Sheety

const BASE_URL = 'https://api.sheety.co/4c017062924501d35e9c26e8b8f65a8d/blobViagens'

// GET todos os destinos
export async function getDestinos() {
  const res = await fetch(`${BASE_URL}/destinos`)
  const data = await res.json()
  return data.destinos
}

// CRIAR destino
export async function createDestino(destino) {
  const res = await fetch(`${BASE_URL}/destinos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ destino })
  })
  const data = await res.json()
  return data
}

// APAGAR destino
export async function deleteDestino(id) {
  await fetch(`${BASE_URL}/destinos/${id}`, {
    method: 'DELETE'
  })
}

// GET users
export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`)
  const data = await res.json()
  return data.users
}

// CREATE user
export async function createUser(user) {
  await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  })
}
