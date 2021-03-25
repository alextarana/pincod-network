const Web3 = require('web3')

// Web3 initialization (should point to the JSON-RPC endpoint)
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))

var V3KeyStore = web3.eth.accounts.encrypt("0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63", "sentric");
console.log(JSON.stringify(V3KeyStore));
process.exit();
