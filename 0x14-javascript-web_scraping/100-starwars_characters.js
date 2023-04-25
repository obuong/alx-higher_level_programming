#!/usr/bin/node 
// a script that prints all characters of a Star Wars movie
const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

// Make a request to the Star Wars API for the movie details
request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const movie = JSON.parse(body);
    const characters = movie.characters;

    // Loop through each character and print their name
    for (const characterUrl of characters) {
      request(characterUrl, function (error, response, body) {
        if (error) {
          console.error(error);
        } else {
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    }
  }
});

