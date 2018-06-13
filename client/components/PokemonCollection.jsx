import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Search from './Search';
import PokemonCollectionEntry from './PokemonCollectionEntry';
import PokemonInfo from './PokemonInfo';

const toUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

class PokemonCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'collection',
      pokemonCollection: null,
      currentPokemon: null,
      scrollLocation: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.returnToCollection = this.returnToCollection.bind(this);
  }

  componentDidMount() {
    const context = this;
    axios.get('http://localhost:8080/pokemon-collection/')
      .then((response) => {
        context.setState({
          pokemonCollection: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClick(pokemon) {
    let scrollLocation = $(".collection").scrollTop();
    this.setState({
      currentPokemon: pokemon,
      view: 'pokemon',
      scrollLocation: scrollLocation,
    });
  }

  handleChange(input) {
    $('.pokemon').each(function () {
      let name = $(this)[0].classList[1];
      if (name.indexOf(input) === -1) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  }

  renderView() {
    if (this.state.view === 'pokemon') {
      return <PokemonInfo id={this.state.currentPokemon.id}
        name={toUpperCase(this.state.currentPokemon.name)}
        sprite={this.state.currentPokemon.sprite}
        types={this.state.currentPokemon.types}
        returnToCollection={this.returnToCollection}
      />;
    }
    return (
      <div className="pokemon-collection-wrapper">
        {this.state.pokemonCollection.map(pokemon => {
          return <PokemonCollectionEntry
            pokemon={pokemon}
            // id={pokemon.id}
            // name={toUpperCase(pokemon.name)}
            // types={pokemon.types}
            // sprite={pokemon.sprite}
            handleClick={this.handleClick}
          />
        })}
      </div>
    );
  }

  returnToCollection() {
    let scrollLocation = this.state.scrollLocation;
    console.log(this.state.scrollLocation);
    if (this.state.view === 'pokemon') {
      this.setState({
        view: 'collection',
      });
      setTimeout(function(){$('.collection').scrollTop(scrollLocation)}, 0);
    }
  }

  render() {
    if (this.state.pokemonCollection) {
      return (
        <div className="outer-container">
          <Search handleChange={this.handleChange} />
          <div className="collection">
            {this.renderView()}
          </div>
        </div>
      );
    }
    return (
      <div className="loading">
        <img src="loadingpikachu.png" alt="" className="loadingimg" />
        <div>Loading...</div>
      </div>
    );
  }
}

export default PokemonCollection;

// http://static.pokemonpets.com/images/monsters-images-300-300/2025-Shiny-Pikachu.png