#!/usr/bin/node
//  a script that prints all characters of a Star Wars movie
const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const characters = JSON.parse(body).characters;
    printCharacters(characters, 0);
  }
});

function printCharacters (characters, index) {
  if (index === characters.length) {
    return;
  }
  request(characters[index], function (error, response, body) {
    if (error) {
      console.error(error);
    } else {
      console.log(JSON.parse(body).name);
      printCharacters(characters, index + 1);
    }
  });
}
