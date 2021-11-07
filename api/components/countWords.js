// File: countWords.js
// Author: Henrik Henriksson
// Desc: This function accepts a pre-sanitized string, splitting them into an array which are then put into a map object in order to count the frequency of occurence of each word in the string. Returns Map object

const { clean } = require('./clean');

exports.countWords = (string) => {
  let map = new Map();
  const words = string.split(' ').filter((word) => word != ''); // split by blankspace.

  // loop through the words array, if the map contains a substring, increment the assigned value, otherwise add a new key/value pair to the map.
  words.forEach((word) => {
    if (map.has(word)) {
      let value = map.get(word);
      map.set(word, ++value);
    } else {
      map.set(word, 1);
    }
  });
  return map;
};
