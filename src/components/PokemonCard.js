import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = ({ pokemon }) => {

  const [isClicked, setClicked] = useState(false)

  const hp = pokemon.stats.find(s => s.name === 'hp').value

  return (
    <Card>
      <div>
        <div className='image'>
          <img alt={pokemon.name} src={!isClicked ? pokemon.sprites.front : pokemon.sprites.back} onClick={() => setClicked(!isClicked)} />
        </div>
        <div className='content'>
          <div className='header'>{pokemon.name}</div>
        </div>
        <div className='extra content'>
          <span>
            <i className='icon heartbeat red' />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
