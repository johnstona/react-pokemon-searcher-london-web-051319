import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import PokemonSearch from './PokemonSearch'
// import { Search } from 'semantic-ui-react'
// import _ from 'lodash'
import API from '../adapters/API';

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ''
  }

  componentDidMount() {
    API.fetchAllPokemon()
    .then(pokemons => this.setState ({ pokemons }))
  }

  addPokemon = (name, hp, frontUrl, backUrl) => {
    API.addPokemonBackend(name, hp, frontUrl, backUrl)
    .then(this.addPokemonFrontend)
  }

  updateSearchTerm = (searchTerm) => {
    this.setState ({ searchTerm })
  }

  addPokemonFrontend = (pokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
  }

  render() {

    const pokemonsToRender = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonSearch search={this.updateSearchTerm}/>
        <PokemonCollection pokemons={pokemonsToRender} />
        <br />
        <PokemonForm newPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
