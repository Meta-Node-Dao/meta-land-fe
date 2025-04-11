// src/address.ts
function isValidAddress(address) {
  return /^0x[0-9a-fA-F]{40}$/.test(address);
}
function shortenAddress(address, prefixLength = 4, suffixLength = 4) {
  return `${address.substring(0, prefixLength + 2)}...${address.substring(address.length - suffixLength)}`;
}

export {
  isValidAddress,
  shortenAddress
};
