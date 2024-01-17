import React from 'react';

function NavBar({ pokemons, onPokemonClick }) {
    const handlePokemonSelection = (index) => {
        const selectedPokemon = pokemons[index];
        if (selectedPokemon.name.toLowerCase() === 'pikachu') {
            alert('pika pikachu !!!');
        }
        onPokemonClick(index);
    };

    return (
        <div>
            {pokemons.map((pokemon, index ) => (
                <button key={pokemon.name} onClick={() => { 
                    handlePokemonSelection(index)
                }}>
                    {pokemon.name}
                </button>
            ))}
        </div>
    );
}

export default NavBar