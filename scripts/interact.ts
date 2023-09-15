
import { ethers } from "hardhat";

async function main() {
    const colorGridCA = "0x6a669552760Fec8f77f936d8d530236FF02C8f1A"
    const colorGrid = await ethers.getContractAt("IColorGrid", colorGridCA)


    await colorGrid.setColors();

    const num = await colorGrid.getColor(2,4)

    console.log(Number(num))



}

// 0x6a669552760Fec8f77f936d8d530236FF02C8f1A

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})