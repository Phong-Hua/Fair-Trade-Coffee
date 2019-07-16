
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "69508e3bbf3442ba90c75926b435d464";
//
// const fs = require('fs');
const mnemonic = 'special basket bitter sauce circle era federal employ possible verify barrel noise';

module.exports = {
  compilers: {
    solc: {
      version: "^0.5.2", // A version or constraint - Ex. "^0.5.0"
                         // Can also be set to "native" to use a native solc
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  }
};