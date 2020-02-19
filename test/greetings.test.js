const assert = require('assert');
const ganache = require('ganache-cli'); // local ethe network
const Web3 = require('web3'); // constructor function

// create instance of Web3 and connect to ganache network
const web3 = new Web3(ganache.provider());


