#!/usr/bin/node

function add (a, b) {
  console.log(a + b);
}
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
add(num1, num2);
