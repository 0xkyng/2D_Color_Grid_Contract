import { ethers } from "hardhat";

async function main() {

  const colorGrid = await ethers.deployContract("ColorGrid", [], { 
  });

  await colorGrid.waitForDeployment();

  console.log(`Colorboard was deployed at ${colorGrid.target}`)


}

// 0x6a669552760Fec8f77f936d8d530236FF02C8f1A

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
