require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337 // We set 1337 to make interacting with MetaMask simpler
    },
    goerli: {
      url:`https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: ["0x" + process.env.DEV_ACCT_PRIVATE_KEY],
      chainId: 5,
    },
    //https://rpcapi.fantom.network 250
    //https://blog.ignaciobrasca.com/programming/fantom/2022/01/10/how-to-deploy-on-fantom.html
    fantomtest: { //Haven't tested it yet
      url: "https://rpc.testnet.fantom.network",
      //accounts,
      accounts: ["0x" + process.env.DEV_ACCT_PRIVATE_KEY],
      chainId: 4002,
      live: false,
      saveDeployments: true,
      gasMultiplier: 2,
    },
    alfajores: {//https://docs.celo.org/developer/deploy/hardhat
      url: "https://alfajores-forno.celo-testnet.org",
      // accounts: {
      //   mnemonic: process.env.MNEMONIC,
      //   path: "m/44'/52752'/0'/0"
      // },
      accounts: ["0x" + process.env.DEV_ACCT_PRIVATE_KEY],
      chainId: 44787//was commented out
    },
    celo: {
      url: "https://forno.celo.org",
      // accounts: {
      //   mnemonic: process.env.MNEMONIC,
      //   path: "m/44'/52752'/0'/0"
      // },
      accounts: ["0x" + process.env.FANCIERFINANCIER_PRIVATE_KEY],
      chainId: 42220
    }, 
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }};
