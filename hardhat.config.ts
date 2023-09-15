import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
require("dotenv").config();


const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: process.env.GOERLIRPC,
      // @ts-ignore
      accounts: [process.env.PRIVATEKEY],
    },
  },
};

export default config;
