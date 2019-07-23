import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import PokemonSearch from './PokemonSearch'
import PokemonFilter from './PokemonFilter'
import { Search } from 'semantic-ui-react'
// import _ from 'lodash'
import API from '../adapters/API';

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: '',
    filterValue: ''
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

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  addPokemonFrontend = (pokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
  }

  updateFilterValue = (filterValue) => {
    this.setState({ filterValue })
  }

  render() {

    const filterTypes = [...new Set(this.state.pokemons.map(pokemon => pokemon.types[0]))]
    const pokemonsToRender = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    const filteredPokemons = this.state.filterValue ? pokemonsToRender.filter(pokemon => pokemon.types.includes(this.state.filterValue)) : pokemonsToRender

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonFilter types={filterTypes} update={this.updateFilterValue}/>
        <Search onSearchChange={this.handleSearch} showNoResults={false}/>
        <PokemonCollection pokemons={filteredPokemons} />
        <br />
        <PokemonForm newPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
