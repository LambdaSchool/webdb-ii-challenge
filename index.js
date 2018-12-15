//general requires
const express = require('express');
const helmet = require('helmet');

//knex requires
const knex = require("knex");
const dbConfig = require("./knexfile");
const db = knex(dbConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here

server.post("/crayons", (req, res) => {

});

server.get("/crayons", (req, res) => {

});

server.get("/crayons/:id", (req, res) => {

});

server.put("/crayons/:id", (req, res) => {

});

server.delete("/crayons/:id", (req, res) => {

});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
