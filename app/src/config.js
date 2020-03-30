/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
export const env = process.env.NODE_ENV;

const chainId = (window.ethereum && ethereum.chainId) || 3;
export const network = chainId == 88 ? process.env.REACT_APP_LOCAL_NETWORK : process.env.REACT_APP_ROPSTEN_NETWORK;
export const smartContrAddress = chainId == 88 ? process.env.REACT_APP_SMART_CONTRACT_ADDRESS_LOCAL  : process.env.REACT_APP_SMART_CONTRACT_ADDRESS_ROPSTEN;
export const initialBlock = chainId == 88 ? 1 : 7604005;