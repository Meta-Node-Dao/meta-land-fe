declare type SupportSaveType = string | number | boolean | object;
declare function storage(type: 'session' | 'local'): {
    set<T extends SupportSaveType>(key: string, obj: T): void;
    get<T_1 extends SupportSaveType>(key: string): T_1 | undefined;
    remove(key: string): void;
    clear(): void;
};

export { SupportSaveType, storage };
