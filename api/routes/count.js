// File: count.js
// Author: Henrik Henriksson
// Routed end point of POST requests to the /count URL. Post requests with blocks of text are recieved, manipulated, transformed into a json string and returned.

const express = require('express');
const router = express.Router(); // handles routes and endpoints.

const { clean } = require('../components/clean');
const { countWords } = require('../components/countWords');
const { mapSort } = require('../components/sort');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling Get to /count',
  });
}); // get requests directed here.

router.post('/', async (req, res) => {
  const cleanedContent = clean(req.body);
  const countedMap = countWords(cleanedContent);
  const sortedMap = mapSort(countedMap);

  // for(let i = 0; i < 10; i++) {
  //     const slicedMap = new Map();

  // }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries//
  // Convert map to JavaScript object.
  const jsonResult = Object.fromEntries(sortedMap);

  res.status(200).contentType('json').send(jsonResult);
});

module.exports = router;
