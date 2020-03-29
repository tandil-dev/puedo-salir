const PuedoSalir = artifacts.require('./PuedoSalir.sol');

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('PuedoSalir', accounts => {
  let puedoSalir;

  before(async () => {
    puedoSalir = await PuedoSalir.deployed();
  })
  describe('Deployment', async () => {
    it('Deploys successfully', async () => {
      const address = puedoSalir.address;
      assert.notEqual(address, '');
      assert.notEqual(address, 0x0);
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    })
  })
});


