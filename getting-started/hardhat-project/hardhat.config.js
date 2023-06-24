/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
};

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
};

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
    solidity: "0.8.0",
    networks: {
        mumbai: {
            url: API_URL,
            accounts: [PRIVATE_KEY],
        },
    },
};
