
import { ethers } from "hardhat";

async function main() {
    const colorGridCA = "0x1c5f9308aa0ceeEf9646f7baD0421239727567a4"
    const colorGrid = await ethers.getContractAt("IColorGrid", colorGridCA)


    const num = await colorGrid.getColor(4,5)

    console.log(Number(num))



}

// 0xB02986E8CBD5E4f5F6F44284F705cB2B571947fa

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})