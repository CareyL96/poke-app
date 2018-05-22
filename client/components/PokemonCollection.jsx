import React from 'react';
import axios from 'axios';
import SinglePokemon from './SinglePokemon';

class PokemonCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }

  componentDidMount() {
    const context = this;
    axios.get('http://localhost:8080/pokemon-collection/')
      .then((response) => {
        context.setState({
          pokemon: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderPokemon() {
    return this.state.pokemon.map(pokemon => (<SinglePokemon
      id={pokemon.id}
      name={pokemon.name}
      types={pokemon.types}
      sprite={pokemon.sprite}
    />));
  }

  render() {
    if (this.state.pokemon) {
      return (
        <div className="collection">
          {this.renderPokemon()}
        </div>
      );
    }
    return <div className="collection" />;
  }
}

export default PokemonCollection;
