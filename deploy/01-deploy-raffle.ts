import { ethers } from "hardhat"
import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains, networkConfig } from "../helper-hardhat-config"
import { VRFCoordinatorV2Mock } from "../typechain-types"
import { verify } from "../utils/verify"

const VRF_SUB_FUND_AMOUNT = ethers.utils.parseEther("2")

const deployFunc: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { deployments, getNamedAccounts } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  let vrfCoordinatorV2Address, subscriptionId

  if (developmentChains.includes(hre.network.name)) {
    const vrfCoordinatorV2Mock = (await ethers.getContract(
      "VRFCoordinatorV2Mock"
    )) as VRFCoordinatorV2Mock
    vrfCoordinatorV2Address = vrfCoordinatorV2Mock.address

    const txResp = await vrfCoordinatorV2Mock.createSubscription()
    const txReceipt = await txResp.wait()
    subscriptionId = txReceipt!.events![0].args!.subId
    await vrfCoordinatorV2Mock.fundSubscription(
      subscriptionId,
      VRF_SUB_FUND_AMOUNT
    )
  } else {
    vrfCoordinatorV2Address = networkConfig[hre.network.name].vrfCoordinatorV2
    subscriptionId = Number(
      networkConfig[hre.network.name].subscriptionId as string
    )
    log(subscriptionId)
  }

  const entranceFee = networkConfig[hre.network.name].entranceFee
  const gasLane = networkConfig[hre.network.name].gasLane
  const callbackGasLimit = networkConfig[hre.network.name].callbackGasLimit
  const interval = networkConfig[hre.network.name].interval

  const args = [
    vrfCoordinatorV2Address,
    entranceFee,
    gasLane,
    subscriptionId,
    callbackGasLimit,
    interval,
  ]
  const raffle = await deploy("Raffle", {
    from: deployer,
    args,
    log: true,
    waitConfirmations: developmentChains.includes(hre.network.name) ? 1 : 6,
  })

  if (
    !developmentChains.includes(hre.network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(raffle.address, args)
  } else {
    const vrfCoordinatorV2Mock = (await ethers.getContract(
      "VRFCoordinatorV2Mock"
    )) as VRFCoordinatorV2Mock
    await vrfCoordinatorV2Mock.addConsumer(subscriptionId, raffle.address)
  }
  log("--------------------------------------------------------------------")
}

export default deployFunc
deployFunc.tags = ["all", "raffle"]
