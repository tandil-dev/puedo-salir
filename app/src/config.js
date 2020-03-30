/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
export const env = process.env.NODE_ENV;

const chainId = (window.ethereum && ethereum.chainId) || 3;
const network = chainId == 88 ? process.env.REACT_APP_LOCAL_NETWORK : process.env.REACT_APP_ROPSTEN_NETWORK;
const smartContrAddress = chainId == 88 ? process.env.REACT_APP_SMART_CONTRACT_ADDRESS_LOCAL  : process.env.REACT_APP_SMART_CONTRACT_ADDRESS_ROPSTEN;
const initialBlock = chainId == 88 ? 1 : 7604005;

console.log('network', network);
console.log('smartContrAddress', smartContrAddress);
console.log('initialBlock', initialBlock);
export {
    network,
    smartContrAddress,
    initialBlock
}