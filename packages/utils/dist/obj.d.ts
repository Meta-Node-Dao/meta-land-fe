declare function omitObject<T extends Record<string, any>, K extends Extract<keyof T, string>>(obj: T, ...keys: K[]): Omit<T, K>;

export { omitObject };
