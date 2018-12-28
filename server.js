// Import Express and instantiate server
const express = require('express');
const server = express();

// Set port # too env variable or 3000
const port = process.env.PORT || 3000;

// Set view engine to pug
server.set('view engine', 'pug');

// TODO create separate router file
server.get('/', (request, response) => {
    response.render('index');
});

// Tell server to start listening
server.listen(port, () => {
    console.log('http://localhost:${port}');
});