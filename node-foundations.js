#!/usr/bin/env node
// 2. Direct Execution ^
"use strict";

// 1. Print to the console
// process.stdout.write("Hello World");

// 3.using the global object
const {node, v8} = global.process.versions; //Destructuring
console.log(`Node.js version: ${node}\nV8 version: ${v8}`);//Template Literal
