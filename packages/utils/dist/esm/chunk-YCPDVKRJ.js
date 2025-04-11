// src/theme.ts
function isMediaDarkMode() {
  return window.matchMedia?.("prefers-color-scheme: dark)").matches || false;
}
function watchMediaDarkMode(callback) {
  const mediaQueryList = window.matchMedia?.("prefers-color-scheme: dark)");
  const changeEventHandler = (e) => {
    callback(e.matches);
  };
  mediaQueryList?.addEventListener("change", changeEventHandler);
  return () => mediaQueryList?.removeEventListener("change", changeEventHandler);
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

export {
  isMediaDarkMode,
  watchMediaDarkMode,
  HTML_DARK_CLASS,
  setDarkMode
};
