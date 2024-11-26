const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

let tokenUris;
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("------------------------");
  const args = [tokenUris];
  const citizenship = await deploy("Citizenship", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
};
