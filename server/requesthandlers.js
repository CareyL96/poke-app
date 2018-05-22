const mongoose = require('mongoose');
const db = require('../database/index.js');
mongoose.Promise = require('bluebird');

const handleGet = (req, res) => {
  db.Pokemon.find().sort({ id: 1 })
    .then((pokemonCollectionData) => {
      res.send(pokemonCollectionData);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = handleGet;
