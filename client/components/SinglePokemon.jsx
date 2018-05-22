import React from 'react';

const SinglePokemon = ({ id, name, types, sprite }) => {
  return (
    <div className="singlepokemon">
      {id} {name} {types} {sprite}
    </div>
  );
};

export default SinglePokemon;
