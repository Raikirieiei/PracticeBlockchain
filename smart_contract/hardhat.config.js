// https://eth-ropsten.alchemyapi.io/v2/x2ZVV86MCsTKLUhl0J7YhFb3OHmpAdTC;

require("dotenv").config();
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/x2ZVV86MCsTKLUhl0J7YhFb3OHmpAdTC',
      accounts: [process.env.PRIVATE_KEY]
    }
  }
}