require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/HwDxJjZs10sSafsRoYKKqQ0Db1Yaexhv',
      accounts: '0xPrivateKeyToYourAccount'
    }
  }
};