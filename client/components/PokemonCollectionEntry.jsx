import React from 'react';

const toUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonCollectionEntry = ({pokemon, handleClick}) => {
  return (
    <div className={`pokemon ${pokemon.name}`}>
      <img src={pokemon.sprite} alt="" className="sprite" />
      <div className="name" onClick={() => handleClick(pokemon)}>
        {toUpperCase(pokemon.name)}
      </div>
    </div>
  );
};

export default PokemonCollectionEntry;
