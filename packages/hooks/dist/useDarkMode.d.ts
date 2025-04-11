import * as vue from 'vue';

declare type DarkMode = 'dark' | 'light' | 'auto';
declare const DarkModeStorageKey = "app.dark.mode";
/**
 * @param isDarkMode
 * undefined -> system prefers-color-scheme
 *
 * true | false
 */
declare function useDarkMode(): {
    darkMode: vue.WritableComputedRef<DarkMode>;
    setDarkMode: (mode: DarkMode) => void;
};

export { DarkMode, DarkModeStorageKey, useDarkMode };
