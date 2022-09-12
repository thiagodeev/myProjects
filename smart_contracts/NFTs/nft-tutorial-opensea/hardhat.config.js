/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("./scripts/deploy.js");

const { ALCHEMY_URL, ACCOUNT_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
   hardhat: {},
   goerli: {
     url: ALCHEMY_URL,
     accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
   }
 },
};