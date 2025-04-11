"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/address.ts
function isValidAddress(address) {
  return /^0x[0-9a-fA-F]{40}$/.test(address);
}
function shortenAddress(address, prefixLength = 4, suffixLength = 4) {
  return `${address.substring(0, prefixLength + 2)}...${address.substring(address.length - suffixLength)}`;
}




exports.isValidAddress = isValidAddress; exports.shortenAddress = shortenAddress;
