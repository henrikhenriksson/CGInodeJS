// file: sort.js
// Author: Henrik Henriksson
// Desc: Map sort function, Takes a Map object with unordered values and Return a sorted and sliced map
// Source:https://stackoverflow.com/questions/37982476/how-to-sort-a-map-by-value-in-javascript

exports.mapSort = (map) => {
  return new Map([...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10));
};
