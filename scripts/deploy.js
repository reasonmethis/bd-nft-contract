// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  //const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  //const lockedAmount = hre.ethers.utils.parseEther("1");

  const contractName = "NFKeeTees";

  console.log(`Will deploy ${contractName} to ${hre.network.name} network`);
  if (hre.network.name === "localhost")
    console.log(
      `\nIMPORTANT: If transactions fail double check that your Metamask is set to chain ID ${hre.config.networks.hardhat.chainId}\n`
    );

  const Contract = await hre.ethers.getContractFactory(contractName);
  const contract = await Contract.deploy()
  // [
  //   "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  //   "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  //   "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  //   "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
  //   "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
  //   "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
  // ]);
  //npx hardhat --network localhost run scripts/deploy.js
  await contract.deployed();

  console.log(`${contractName} deployed to ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
