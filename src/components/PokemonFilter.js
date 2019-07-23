import React, { useState } from 'react'

const PokemonFilter = ({types, update}) => {
  const [filterValue, updateFilter] = useState('')

  const handleChange = (e) => {
    update(e.target.value)
    updateFilter(e.target.value)
  }

  return <select onChange={handleChange}>
    <option defaultValue={filterValue === ''} value={''}>CHOOSE A TYPE</option>
    {
      types.map(type => {
        return <option key={type} value={type}>{type}</option>
      }) 
    }
  </select>
}

export default PokemonFilter