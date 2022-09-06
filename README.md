# Sample Hardhat Project

This project demonstrates a smart contract that allows people to enter a raffle
using their metamask wallet on the goerli testnet and randomly picks the winner in 
a truely decentralised manner by using Chainlink VRF and keeper.

This contract is built and tested with Hardhat that can run either locally or on the 
goerli testnet.

After cloning the repo:

1. Install dependencies:
```shell
yarn
npm install
```

2. Create a `.env` file in the root of the project and reference the file `.env.example` for what needs to be provided.

3. Deploy the contract on goerli network:
``` shell
npx hardhat deploy --network goerli
```

4. Create subscription for Chainlink VRF (for testing on goerli)
https://docs.chain.link/docs/vrf/v2/introduction/

5. Create a Chainlink Keeper using the Chainlink app (for testing on goerli and this contract uses a time-based trigger)
https://docs.chain.link/docs/chainlink-keepers/introduction/

Run test locally:
```shell
npx hardhat test
```

Run test on goerli test net:
```shell
npx hardhat test --network goerli
```