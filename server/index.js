const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handleGet = require('./requesthandlers.js');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/pokemon-collection', handleGet);

const port = 8080;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
