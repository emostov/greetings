/* eslint-disable no-console */
const assert = require('assert');
const ganache = require('ganache-cli'); // local ethe network
const Web3 = require('web3'); // constructor function

// create instance of Web3 and connect to ganache network
const web3 = new Web3(ganache.provider());


beforeEach(() => {
  // ganache auto creates accounts in testing
  // .eth is the object specifically for ethereum block chain interactions
  // getAccounts retrieves all accounts and is async - returning a promise
  web3.eth.getAccounts()
    .then((fetchedAccounts) => {
      console.log(fetchedAccounts);
    });
});

describe('Greetings Contract', () => {
  it('test stub', () => {

  });
});
