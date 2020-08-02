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

  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },

    body: JSON.stringify(values),
  })
    .then(async (serverResponse) => {
      if (await serverResponse.ok) {
        const resultado = values;

        return resultado;
      }

      throw new Error('Não foi possível pegar os dados.');
    });
}

export default {
    getAllWithVideos,
    getAll,
    insert
}