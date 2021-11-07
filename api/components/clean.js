// File: clean.js
// Author: Henrik Henriksson
// Desc: This method accepts a string (json), matches it against a regex formula replacing any matching char with a blankspace. The string is sanitized by removing any capital letters and returned.
// Source: https://dev.to/junko911/building-a-word-counter-appliction-in-node-js-using-axios-3p5c

exports.clean = (String) => {
  const alphabet = String.replace(/[^A-Za-z']+/g, ' ').trim();
  const lowercase = alphabet.toLowerCase();
  return lowercase;
};
