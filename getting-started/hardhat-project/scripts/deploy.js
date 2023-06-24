const { ethers } = require("hardhat");

async function main() {
  // Retrieve the account used for deployment
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Compile the Greeter contract
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy();

  console.log("Greeter contract address:", greeter.address);
}

// Execute the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });