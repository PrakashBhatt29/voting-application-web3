/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "arbitrum_sepolia",
   networks: {
      hardhat: {},
      arbitrum_sepolia: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gas: 210000000,
         gasPrice: 8000000000,
      }
   },
}