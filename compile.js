/* eslint-disable no-console */

// Why is es6 syntax not work?
// import * as path from 'path';
// import * as fs from 'fs';
// import * as solc from 'solc';

const path = require('path');
const solc = require('solc');
const fs = require('fs');


const greetingsPath = path.resolve(__dirname, 'contracts', 'greetings.sol');

const source = fs.readFileSync(greetingsPath, 'utf8');

// 2nd arg of 1 represents 1 file to compile
console.log(solc.compile(source, 1));
