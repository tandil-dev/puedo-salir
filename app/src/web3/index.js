/* eslint-disable no-undef */
import Web3 from "web3";
import { network } from '../config';

console.log('Creating web3', window.ethereum ? ethereum : network);
export const web3 = new Web3(window.ethereum ? ethereum : network);