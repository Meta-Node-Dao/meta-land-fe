declare function debounce<F extends (...params: any[]) => void>(fn: F, delay?: number): F;
declare function sleep(ms: number): Promise<unknown>;

export { debounce, sleep };
