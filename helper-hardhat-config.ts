import { ethers } from "hardhat"

export interface networkConfigItem {
  vrfCoordinatorV2?: string
  entranceFee?: string
  gasLane?: string
  subscriptionId?: string
  callbackGasLimit?: string
  interval?: string
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
  goerli: {
    vrfCoordinatorV2: "0x2ca8e0c643bde4c2e08ab1fa0da3401adad7734d",
    entranceFee: ethers.utils.parseEther("0.1").toString(),
    gasLane:
      "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    subscriptionId: "182",
    callbackGasLimit: "500000",
    interval: "60",
  },
  localhost: {
    entranceFee: ethers.utils.parseEther("0.1").toString(),
    gasLane:
      "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    callbackGasLimit: "500000",
    interval: "60",
    subscriptionId: "182",
  },
  hardhat: {
    entranceFee: ethers.utils.parseEther("0.1").toString(),
    gasLane:
      "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    callbackGasLimit: "500000",
    interval: "60",
    subscriptionId: "182",
  },
}

export const developmentChains = ["localhost", "hardhat"]
