// SET running environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');

const app = express();
const middlewares = require('./config/middlewares.js'); // config of middlewares of express
const routes = require('./config/routes.js');

middlewares(app); // add middlewares to express app
routes(app); // add routing

// Prevent the default behavior of crash when node encounter an error
process.on('uncaughtException', function(err) {
    console.log(err);
});

app.listen(3000);

module.exports = app;

console.log('server running at localhost:3000');
