#!/usr/bin/node

const num = Math.trunc(process.argv[2]);
if (isNaN(num)) {
  console.log('Not a number');
} else if (process.argv[2] === undefined) {
  console.log('Not a number');
} else {
  console.log(`My number: ${num}`);
}
