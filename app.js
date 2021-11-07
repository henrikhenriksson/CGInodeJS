// File: app.js
// Futhor: Henrik Henriksson
// Desc: Main entry point for the Restful API. This file contains error handling and prerequisites as well as routing to the main logic of the API.

const express = require('express'); // express makes handling requests easier.
const app = express(); // execute express on startup.

app.use(express.urlencoded({ extended: true }));
app.use(express.text());

const countRoute = require('./api/routes/count');

app.get('/', (req, res, next) => {
  res.send('Get Working');
});

app.post('/', (req, res, next) => {
  res.send('Post Working');
});

// set up middleware, incomming requests pass through use() method.
app.use('/count', countRoute); // second argument handles routes.

// Error Handling:
app.use((req, res, next) => {
  const error = new Error('not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
