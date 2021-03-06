// Import Express and instantiate server
const express = require('express');
const path = require('path');
const pug = require('pug');
const server = express();

// Set port # too env variable or 3000
const port = process.env.PORT || 3000;
const _dirname = process.cwd();

// Set Views and Static folders.
server.set('views', path.join(_dirname, 'views'));
server.use(express.static(path.join(_dirname, '/public')));

// Set view engine to pug
server.set('view engine', 'pug');

// TODO create separate router file
// Index route
server.get('/', (request, response) => {
    response.render('index');
});

// Alternate index route
server.get('/index', (request, response) => {
    response.render('index');
})

// Portfolio route
server.get('/portfolio', (request, response) => {
    response.render('portfolio');
});

// Portfolio item route
server.get('/portfolio-single', (request, response) => {
    response.render('portfolio-single');
})

// // Tour image route
// server.get('/tour/room-1', (request, response) => {
//     response.sendFile('/images/tour/room-1.jpg');
// });

// // Tour htm route
// server.get('/tour/htm', (request, response) => {
//     response.sendFile('/tourCFG/');
// })

// Tell server to start listening
server.listen(port, () => {
    console.log('http://localhost:${port}');
});