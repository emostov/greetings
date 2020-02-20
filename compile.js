/* eslint-disable no-console */

const path = require('path');
const solc = require('solc');
const fs = require('fs');

const greetingsPath = path.resolve(__dirname, 'contracts', 'greetings.sol');
const source = fs.readFileSync(greetingsPath, 'utf8');

// 2nd arg of 1 represents 1 file to compile
module.exports = solc.compile(source, 1).contracts[':Greetings'];
