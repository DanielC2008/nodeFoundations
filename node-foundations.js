#!/bin/sh
":" //# comment; exec /usr/bin/env node --harmony "$0" "$@"
"use strict";

// 1. Print to the console
// process.stdout.write("Hello World");

// 2. Direct Execution //at top

// 3.using the global object
// const {	node, v8} = global.process.versions; //Destructuring
// console.log(`Node.js version: ${node}\nV8 version: ${v8}`);//Template Literal


// 4.use different versions of node for this project and keep ES6
		// for older versions of node you must specify Harmony type_of i.e. --harmony_destructuring

// 5. Command-line arguments
// let [,,...rest] = process.argv //get arguments from argv
// rest[0] === undefined ? console.log(0) // 0 if nothing is passed
// 	: console.log(rest.map((str) => Number(str)).reduce((a,b) => (a) + (b))); // make numbers and add them

// 6. Third Party Modules
// console.log('It is \u001b[31mnot\u001b[39m easy to use \u001b[32mhardcoded \u001b[1mANSI\u001b[39m\u001b[22m codes!') // instead of doing something like this yourself do this...

// use Chalk to print the American flag to the console
const chalk = require('chalk')
let blue1 = chalk.white.bgBlue(' * * * * * * * ')
let blue2 = chalk.white.bgBlue('   * * * * *   ');
let red1 = chalk.bgRed('                            ')
let red2 = chalk.bgRed('                                           ');
let white1 = chalk.bgWhite('                            ');
let white2 = chalk.bgWhite('                                           ');
console.log(`${blue1}${red1}`);
console.log(`${blue2}${white1}`);
console.log(`${blue1}${red1}`);
console.log(`${blue2}${white1}`);
console.log(`${blue1}${red1}`);
console.log(`${blue2}${white1}`);
console.log(`${blue1}${red1}`);
console.log(`${white2}`);
console.log(`${red2}`);
console.log(`${white2}`);
console.log(`${red2}`);
console.log(`${white2}`);
console.log(`${red2}`);
