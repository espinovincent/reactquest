import { useState, useEffect } from 'react'
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

  let [currentPokemon, setPokemonIndex] = useState(0);

  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
};

  useEffect(
    () => {
      alert("hello pokemon trainer :)");
    },
    []
  );
  

  return (

    <div>
      <PokemonCard pokemon={pokemonList[currentPokemon]} />
      <NavBar pokemons={pokemonList} onPokemonClick={handlePokemonClick} />
    </div>

  );

}

export default App