"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/validators.ts
var hostBlackList = ["localhost"];
function effectiveUrlValidator(value) {
  if (!/^https?:\/\//.test(value)) {
    return false;
  }
  try {
    const url = new URL(value);
    if (!url.hostname.includes(".")) {
      return false;
    }
    if (/(\d+\.){3}(\d+)/.test(url.hostname)) {
      return false;
    }
    if (hostBlackList.includes(url.hostname)) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
}



exports.effectiveUrlValidator = effectiveUrlValidator;
