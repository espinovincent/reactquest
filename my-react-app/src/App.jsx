import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'

const pokemonList = [

  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },

  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },

  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "mew",
  },

];

function App() {

  let [currentPokemon, setPokemonIndex] = useState(pokemonList[0]);

  let pokemonClickHandler = (pokemon) => {
    setPokemonIndex(pokemon)
  }


  return (

    <div>
      <PokemonCard pokemon={currentPokemon} />
      <NavBar pokemons={pokemonList} onPokemonClick={pokemonClickHandler} />
    </div>

  );

}

export default App