// File: server.js
// Author: Henrik Henriksson
// Desc: an  express built server entry point.
// Source: https://www.youtube.com/watch?v=blQ60skPzl0

const http = require('http');
const app = require('./app');
const port = 3000;

const server = http.createServer(app); // pass app to the server, the express application serves as request handler.

server.listen(port, () => {
  console.log('App is listening on port', port);
});
