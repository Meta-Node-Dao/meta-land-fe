// src/useDarkMode.ts
import { isMediaDarkMode, setDarkMode, watchMediaDarkMode } from "@comunion/utils";
import { computed, onMounted, onUnmounted } from "vue";
var DarkModeStorageKey = "app.dark.mode";
function useDarkMode() {
  const darkMode = computed({
    get: () => localStorage[DarkModeStorageKey] ?? "auto",
    set: (v) => localStorage[DarkModeStorageKey] = v
  });
  let unwatch;
  const _useSystemMode = () => {
    setDarkMode(isMediaDarkMode());
    unwatch = watchMediaDarkMode((_isDarkMode) => {
      setDarkMode(_isDarkMode);
    });
  };
  const _setDarkMode = (mode) => {
    darkMode.value = mode;
    if (mode === "dark") {
      setDarkMode(true);
    } else if (mode === "light") {
      setDarkMode(false);
    } else {
      _useSystemMode();
    }
  };
  onMounted(() => {
    _setDarkMode(darkMode.value);
  });
  onUnmounted(() => {
    unwatch?.();
  });
  return {
    darkMode,
    setDarkMode: _setDarkMode
  };
}

export {
  DarkModeStorageKey,
  useDarkMode
};
