const PuedoSalir = artifacts.require('./PuedoSalir.sol');
const { expectEvent, expectRevert  } = require('@openzeppelin/test-helpers');

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('PuedoSalir', accounts => {
  let puedoSalir;

  before(async () => {
    puedoSalir = await PuedoSalir.deployed();
  })
  describe('Read values', async () => {
    it('Status', async () => {
      const status = await puedoSalir.status();
      assert.equal(status, false);
    })
    it('Message', async () => {
      const message = await puedoSalir.message();
      assert.equal(message, 'Quedate en casa, no seas uno más');
    })
  })
  describe('Write values', async () => {
    it('Status', async () => {
      const status = true;
      await puedoSalir.setStatus(status);
      const storedStatus = await puedoSalir.status();
      assert.equal(storedStatus, status);
    })
    it('Message', async () => {
      const message = '#stayAtHome'
      await puedoSalir.setMessage(message);
      const storedMessage = await puedoSalir.message();
      assert.equal(storedMessage, message);
    })
  })
  describe('Events', async () => {
    it('Status', async () => {
      const newStatus = true;
      const receipt = await puedoSalir.setStatus(newStatus);
      expectEvent(receipt, 'NewStatus', { status: newStatus });
    })
    it('Message', async () => {
      const newMessage = '#meQuedoEnCasa';
      const receipt = await puedoSalir.setMessage(newMessage);
      expectEvent(receipt, 'NewMessage', { message: newMessage });
    })
  })
  describe('Reject', async () => {
    it('Status', async () => {
      const newStatus = true;
      // await puedoSalir.setStatus(newStatus, { from: accounts[2]});
      await expectRevert(
        puedoSalir.setStatus(newStatus, { from: accounts[2]}), 
        'Ownable: caller is not the owner');
    })
  })
});