const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pokedex');

const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  types: Array,
  sprite: String,
});

module.exports.Pokemon = mongoose.model('Pokemon', pokemonSchema);
