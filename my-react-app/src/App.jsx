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

  let [pokemonIndex, setPokemonIndex] = useState(0);

  let clickIncr = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1)
    }
  }

  let clickDecr = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1)
    }
  }

  let pokemon = pokemonList[pokemonIndex]

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <NavBar functionMore={clickIncr} functionLess={clickDecr} />
    </div>
  );

}

export default App