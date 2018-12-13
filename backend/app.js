const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/user');

const app = express();
app.use(cors());

  mongoose.connect('mongodb://localhost/consumer-portal')
  .then(() => {
    console.log('connected to the db')
  })
  .catch((err) => console.log(err))

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

const path = require('path');

app.use(express.static(path.join(__dirname, '../dist/consumer-portal')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/consumer-portal', 'index.html'));
})

module.exports = app;
