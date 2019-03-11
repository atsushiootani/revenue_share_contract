const SafeMath = artifacts.require("SafeMath");
const Agreements = artifacts.require("Agreements");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.deploy(Agreements);
};

