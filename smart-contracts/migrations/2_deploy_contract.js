const PuedoSalir = artifacts.require("PuedoSalir");

module.exports = async function(deployer) {
  await deployer.deploy(PuedoSalir,'Quedate en casa, no seas uno más', false);
  };