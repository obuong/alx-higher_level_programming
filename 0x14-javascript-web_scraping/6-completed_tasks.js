#!/usr/bin/node
const request = require('request');

const url = process.argv[2]; // Get the URL from the command line argument

// Send a GET request to the URL and parse the response as JSON
request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const tasks = JSON.parse(body); // Convert the response to JSON format
    const completedTasks = {}; // Object to store the number of completed tasks per user
    for (const task of tasks) { // Iterate over each task
      if (task.completed) { // Check if the task is completed
        const userId = task.userId.toString(); // Get the user ID as a string
        if (userId in completedTasks) { // Check if the user ID exists in the completedTasks object
          completedTasks[userId]++; // If it does, increment the number of completed tasks for that user
        } else {
          completedTasks[userId] = 1; // If it doesn't, set the number of completed tasks for that user to 1
        }
      }
    }
    console.log(completedTasks); // Print the object containing the number of completed tasks per user
  }
});
