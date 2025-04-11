"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/obj.ts
function omitObject(obj, ...keys) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  });
  return result;
}



exports.omitObject = omitObject;
