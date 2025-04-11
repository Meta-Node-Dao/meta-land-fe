// src/delay.ts
function debounce(fn, delay = 300) {
  let timeoutID;
  return function(...args) {
    typeof window === "undefined" ? clearTimeout(timeoutID) : clearTimeout(timeoutID);
    timeoutID = (typeof window === "undefined" ? global : window).setTimeout(() => fn.apply(this, args), delay);
  };
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export {
  debounce,
  sleep
};
