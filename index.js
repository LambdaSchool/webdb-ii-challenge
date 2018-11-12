const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
  res.json('Home');
});

server.get('/api/animals', (req, res) => {
  db('zoos')
  .then(names => {
    console.log(names)
    res.status(200).json(names)
  })
  .catch(err => {
    res.status(500).json(err)
  });
});

server.get('/api/animals/:id', (req, res) => {
  db('zoos')
    .where({ id: req.params.id })
    .first()
    .then(zoos => {
      res.status(200).json(zoos);
    })
    .catch(err => res.status(500).json(err));
});

server.post('/api/animals', (req, res) => {
  const name = req.body;
   db
   .insert(name) 
   .into('zoos')
  .then(name => {
    res.status(200).json(name[0])
  })
  .catch(err => {
    res.status(500).json(err)
  });
})




const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
