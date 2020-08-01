import config from '../config'

const URL_CATEGORIES = `${config.URL}/categorias`

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (serverResponse) => {
        if(serverResponse.ok){
          const response = await serverResponse.json()
          
          return response
        }

        throw new Error('Não foi possível pegar os dados')
    })
}

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
      .then(async (serverResponse) => {
          if(serverResponse.ok){
            const response = await serverResponse.json()
            
            return response
          }

          throw new Error('Não foi possível pegar os dados')
      })
}

function insert(values) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  }

  return fetch(URL_CATEGORIES, requestOptions)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json()
            
        return response
      }

      throw new Error('Não foi possível pegar os dados');
    })
}

export default {
    getAllWithVideos,
    getAll,
    insert
}