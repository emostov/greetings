/* eslint-disable no-console */
const assert = require('assert');
const ganache = require('ganache-cli'); // local test-net
const web3 = require('web3');

const { interface, bytecode } = require('../compile');



// create web3 instance with ganache test net
const Web3 = new web3(ganache.provider());
const MILlION_WIE = '1000000'
let greetings;
let accounts

beforeEach((done) => {

  //bytecode is contract, and args is args for contract constructor
  const deployTransactionObj = { data: bytecode, arguments: ['Mostov Contract'] }

  // 'from:' account creating contract, no 'to:' when deploying
  // can also specify gasPrice, value, nonce
  // const sendTransactionObj = { from: accounts[0], gas: MILlION_WIE }

  //.eth referes to eth object of web3
  // getAccounts retrieves all acounts in the network
  Web3.eth.getAccounts().then((accnts) => {
    accounts = accnts;
    //these are nested so send has access to the first account
    new Web3.eth.Contract(JSON.parse(interface))
      .deploy(deployTransactionObj)
      .send({ from: accnts[0], gas: MILlION_WIE })
      .then((deployedContract) => {
        greetings = deployedContract;
        done();
      });
  });
});

describe('Greetings', () => {
  it('deploys greetings contract to a valid address', () => {
    console.log(greetings);
    assert.ok(greetings.options.address);
  });

  it('has a default message of "Mostov Contract"', async () => {
    const defaultMessage = await greetings.methods.message().call();
    // call is a read therefore requires no gas
    assert.equal(defaultMessage, 'Mostov Contract')
  })

  it('can overwrite message with "spread lavendar"', async () => {
    await greetings.methods.setMessage('spread lavendar')
      .send({ from: accounts[0] }) //TODO check where gas is coming from
    const overwriteMessage = await greetings.methods.message().call();
    assert.equal(overwriteMessage, 'spread lavendar');
  });
});

// accounts = await Web3.eth.getAccounts()
// greetings = await new Web3.eth.Contract(JSON.parse(interface))
//   .deploy(deployTransactionObj)
//   .send({ from: accounts[0], gas: MILlION_WIE })


