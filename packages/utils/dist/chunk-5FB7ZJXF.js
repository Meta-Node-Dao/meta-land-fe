"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/storage.ts
var scopeMap = {
  session: "sessionStorage",
  local: "localStorage"
};
function storage(type) {
  const scope = window[scopeMap[type]];
  return {
    set(key, obj) {
      scope.setItem(key, JSON.stringify(obj));
    },
    get(key) {
      const data = scope.getItem(key);
      if (!data) {
        return void 0;
      }
      return JSON.parse(data);
    },
    remove(key) {
      scope.removeItem(key);
    },
    clear() {
      scope.clear();
    }
  };
}



exports.storage = storage;
