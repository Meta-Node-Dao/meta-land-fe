"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/theme.ts
function isMediaDarkMode() {
  return _optionalChain([window, 'access', _ => _.matchMedia, 'optionalCall', _2 => _2("prefers-color-scheme: dark)"), 'access', _3 => _3.matches]) || false;
}
function watchMediaDarkMode(callback) {
  const mediaQueryList = _optionalChain([window, 'access', _4 => _4.matchMedia, 'optionalCall', _5 => _5("prefers-color-scheme: dark)")]);
  const changeEventHandler = (e) => {
    callback(e.matches);
  };
  _optionalChain([mediaQueryList, 'optionalAccess', _6 => _6.addEventListener, 'call', _7 => _7("change", changeEventHandler)]);
  return () => _optionalChain([mediaQueryList, 'optionalAccess', _8 => _8.removeEventListener, 'call', _9 => _9("change", changeEventHandler)]);
}
var HTML_DARK_CLASS = "dark";
function setDarkMode(isDarkMode) {
  const classes = document.documentElement.classList;
  if (isDarkMode) {
    if (!classes.contains(HTML_DARK_CLASS)) {
      classes.add(HTML_DARK_CLASS);
    }
  } else {
    if (classes.contains(HTML_DARK_CLASS)) {
      classes.remove(HTML_DARK_CLASS);
    }
  }
}






exports.isMediaDarkMode = isMediaDarkMode; exports.watchMediaDarkMode = watchMediaDarkMode; exports.HTML_DARK_CLASS = HTML_DARK_CLASS; exports.setDarkMode = setDarkMode;
