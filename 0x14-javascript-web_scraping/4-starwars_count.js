#!/usr/bin/node
const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Make a GET request to the API URL
request(apiUrl, function (error, response, body) {
  // If there's an error, print it and exit the script
  if (error) {
    console.error(error);
    process.exit(1);
  }

  // Parse the JSON response body
  const films = JSON.parse(body);

  // Initialize a counter for the number of films with Wedge Antilles
  let count = 0;

  // Loop through each film
  for (let i = 0; i < films.results.length; i++) {
    const film = films.results[i];

    // Check if Wedge Antilles is in the list of characters for this film
    if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
      count++;
    }
  }

  // Print the final count
  console.log(count);
});

