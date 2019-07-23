const apiEndpoint = 'http://localhost:3000'
const POKEMONS_URL = `${apiEndpoint}/pokemon`

const fetchAllPokemon = () =>{
  return fetch(POKEMONS_URL)
  .then(resp => resp.json())
}

const addPokemonBackend = (name, hp, frontUrl, backUrl) => {
  return fetch(POKEMONS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(({
      name,
      stats: [
        {
          value: hp,
          name: 'hp'
        }
      ],
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }))
  }).then(resp => resp.json())
}


export default {
  fetchAllPokemon,
  addPokemonBackend
}