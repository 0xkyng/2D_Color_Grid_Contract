
import { ethers } from "hardhat";

async function main() {
    const colorGridCA = "0x7de1e6ae6d54F747CaCF92957954c306DCeABfd1"
    const colorGrid = await ethers.getContractAt("IColorGrid", colorGridCA)


    await colorGrid.setColors();


    const num = await colorGrid.getColor(4,5)

    console.log(Number(num))



}

// 0xB02986E8CBD5E4f5F6F44284F705cB2B571947fa

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})