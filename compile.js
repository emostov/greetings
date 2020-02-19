import path from 'path';
import fs from 'fs';
import solc from 'solc';

const greetingsPath = path.resolve(__dirname, 'contracts', 'greetings.sol');

const source = fs.readFileSync(greetingsPath, 'utf8');

// 2nd arg of 1 represents 1 file to compile
console.log(solc.compile(source, 1));