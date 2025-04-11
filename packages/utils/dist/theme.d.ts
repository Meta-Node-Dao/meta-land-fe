/**
 * @returns Get system's setting is dark mode
 */
declare function isMediaDarkMode(): boolean;
/**
 * Watch for dark mode changed
 * @param callback Function to call when dark mode changed
 */
declare function watchMediaDarkMode(callback: (isDarkMode: boolean) => void): () => void;
/**
 * tailwindcss dark mode class
 */
declare const HTML_DARK_CLASS = "dark";
/**
 * Set dark mode or not
 * @param isDarkMode target mode is dark?
 */
declare function setDarkMode(isDarkMode: boolean): void;

export { HTML_DARK_CLASS, isMediaDarkMode, setDarkMode, watchMediaDarkMode };
