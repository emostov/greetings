const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const MNENOMIC
const INFURA_API_KEY
const MILlION_WIE = '1000000'

// twelve word mnemonic and infura rinkeby api key
const provider = new HDWalletProvider(MNENOMIC, INFURA_API_KEY)

// instatiate a web3 instance with INFURA provider
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('attempting to deploy from account', accounts[0]);

  const deployed = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments: ['Mostov Contract'] })
    .send({ from: accounts[0], gas: MILlION_WIE })

  console.log('Contract deployed to', deployed.options.address)
}

deploy();