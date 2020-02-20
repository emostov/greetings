/* eslint-disable no-console */
const assert = require('assert');
const ganache = require('ganache-cli'); // local test-net
const web3 = require('web3');

const { interface, bytecode } = require('../compile');



// create web3 instance with ganache test net
const Web3 = new web3(ganache.provider());
const MILlION_WIE = '1000000'
beforeEach(() => {
  //.eth referes to eth object of web3
  // getAccounts retrieves all acounts in the network
  let accounts, greetings;
  Web3.eth.getAccounts().then((accounts) => {
    new Web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: ['Hello World'] })
      .send({ from: accounts[0], gas: MILlION_WIE })
      .then((contract) => console.log(contract))
  });

  describe('Greetings', () => {
    it('dummy test', () => {

    });
  });

  //   Web3.eth.getAccounts()
  //     .then((accounts) => {
  //       return ({
  //         contract: new Web3.eth.Contract(JSON.parse(interface)),
  //         accounts
  //       })
  //     })
  //     .then(({ accounts, contract }) => {
  //       return ({
  //         contract: contract.deploy({ data: bytecode, arguments: ['Hello World'] }),
  //         accounts
  //       })
  //     })
  //     .then(({ accounts, contract }) => {
  //       return ({
  //         contract: contract.send({ from: accounts[0], gas: MILlION_WIE })
  //       })
  //     })
  //     .then(({ contract }) => console.log(contract))
  // });
