#!/usr/bin/node
// a script that prints the title of a Star Wars movie where the episode number matches a given integer

const request = require('request'); // import the 'request' module
const url = `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}/`; // make a GET request to the Star Wars API with the movie ID in the URL

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.parse(body).title);
  }
});
