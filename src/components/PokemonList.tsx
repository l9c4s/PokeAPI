
import React from 'react';

interface PokemonListProps {
  pokemonList: any[];
  loading: boolean;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonList, loading }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.name} className="border p-4">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/').slice(-2, -1)}.png`} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
      {loading && <p className="text-center">Loading...</p>}
    </div>
  );
};

export default PokemonList;
