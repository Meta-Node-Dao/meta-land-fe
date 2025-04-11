// src/char.ts
function convertCamelCase(originStr, firstUpper = false) {
  return originStr.replace(/\s(.)/g, (x) => x.toUpperCase()).replace(/\s/g, "").replace(/^(.)/, (y) => firstUpper ? y.toUpperCase() : y.toLowerCase()).replace(/[_-][a-zA-Z]/g, (s) => s[1].toUpperCase());
}
function randomStr() {
  return Math.random().toString(36).substring(2);
}

export {
  convertCamelCase,
  randomStr
};
