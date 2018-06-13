import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const toUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonInfo = ({ name, sprite, types, returnToCollection }) => {
  return (
    <div className="inner-pokemon-container">
      <div className="pokemon-header">
        {name}
        <button className="back" onClick={() => returnToCollection()}>Back</button>
      </div>
      <img src={sprite} alt="" className="large-sprite" />
      <span> Types: {types.join(', ')} </span>

    </div>
  );
};

export default PokemonInfo;
