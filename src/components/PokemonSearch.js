import React, { useState } from 'react'

const PokemonSearch = ({ search }) => {

  const [searchValue, updateSearchValue] = useState('')

  return <div>
    <input type='text' onChange={e => updateSearchValue(e.target.value)} value={searchValue} />
    <button onClick={() => search(searchValue)}>Search!</button>
  </div>

}

export default PokemonSearch