#!/usr/bin/node
const request = require('request'); // Import the request module

const url = process.argv[2]; // Get the URL from the first command line argument
const filePath = process.argv[3]; // Get the file path from the second command line argument

request.get(url, (error, response, body) => { // Make a GET request to the URL
  if (error) { // If an error occurred, log it to the console
    console.error(error);
  } else { // Otherwise, write the body of the response to the specified file
    const fs = require('fs'); // Import the fs module
    fs.writeFile(filePath, body, 'utf8', (error) => { // Write the file with utf8 encoding
      if (error) { // If an error occurred, log it to the console
        console.error(error);
      }
    });
  }
});
