/**
 * Convert string to CamelCase format
 * @param originStr Origin string to convert
 * @param firstUpper Upper case the first char or not
 */
declare function convertCamelCase(originStr: string, firstUpper?: boolean): string;
/**
 * Generate random string
 * @returns Random string
 */
declare function randomStr(): string;

export { convertCamelCase, randomStr };
