import React from 'react';
import axios from 'axios';
import Search from './Search';
import PokemonCollection from './PokemonCollection';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'main',
    };
  }

  // componentDidMount() {
  //   const context = this;
  //   axios.get('http://localhost:8080/pokemon-collection/')
  //     .then((response) => {
  //       context.setState({
  //         pokemon: response.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  renderView() {
    const { view } = this.state;
    if (view === 'singlepokemon') {
      return <SinglePokemon />;
    }
    return <PokemonCollection />;
  }

  render() {
    return (
      <div className="main-container">
        <div className="header">An interactive PokeDex</div>
        <Search />
        {this.renderView()}
      </div>
    );
  }
}

export default App;
