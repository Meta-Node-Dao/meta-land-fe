declare function isValidAddress(address: string): boolean;
declare function shortenAddress(address: string, prefixLength?: number, suffixLength?: number): string;

export { isValidAddress, shortenAddress };
