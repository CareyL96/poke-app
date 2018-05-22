/* eslint-disable */

const fs = require('fs');
const axios = require('axios');
const mongoose = require('mongoose');
const db = require('./database/index.js');

const getPokemon = () => {
  let pokeData = [];
  let pushCount = 0;
  for (let i = 81; i <= 151; i++) {
    axios.get(`http://pokeapi.co/api/v2/pokemon/${i}`)
      .then((response) => {
        let pokemonInfo = {};
        const name = response.data.forms[0].name;
        const types = response.data.types.map(type => type.type.name);
        const spriteURL = response.data.sprites.back_default;

        pokemonInfo.id = i;
        pokemonInfo.name = name;
        pokemonInfo.types = types;
        pokemonInfo.sprite = spriteURL;

        pokeData.push(pokemonInfo);
        pushCount++;
        console.log(pokemonInfo.name + ' pushed!');

        if (pushCount === 71) {
          db.Pokemon.insertMany(pokeData)
          .then(() => mongoose.disconnect());
          console.log(pokeData);
        }
      })
      .catch((err) => {
        console.log('ERROR DAMMIT');
      });
  }
};

getPokemon();