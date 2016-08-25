#!/bin/sh
":" //# comment; exec /usr/bin/env node --harmony "$0" "$@"
"use strict";

// 1. Print to the console
// process.stdout.write("Hello World");

// 2. Direct Execution //at top

// 3.using the global object
const {	node, v8} = global.process.versions; //Destructuring
console.log(`Node.js version: ${node}\nV8 version: ${v8}`);//Template Literal


// 4.use different versions of node for this project and keep ES6
		// for older versions of node you must specify Harmony type_of i.e. --harmony_destructuring



