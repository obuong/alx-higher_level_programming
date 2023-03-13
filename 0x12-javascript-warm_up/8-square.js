#!/usr/bin/node

const num = process.argv[2];
if (isNaN(num)) {
  console.log('Missing size');
} else {
  for (let count = 0; count < num; count++) {
    console.log('X'.repeat(num));
  }
}
