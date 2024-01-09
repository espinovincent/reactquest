// eslint-disable-next-line no-unused-vars
const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];


  function PokemonCard() {
    let pokemon = pokemonList[0];
    return (
        <figure>
            {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>?????</p>)}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}
  
  // eslint-disable-next-line no-undef
  export default PokemonCard
  ;