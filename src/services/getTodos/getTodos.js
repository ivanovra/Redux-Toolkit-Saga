const server = 'http://localhost:3000'

export async function fetchTodos(endpoint) {
  return fetch(server + endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
}