export interface EditorOptions {
    placeholder?: string;
    onChange?: (value: string) => void;
}
export default class Editor {
    private _el;
    private _options;
    constructor(el: HTMLElement, options?: EditorOptions);
    private _onInput;
    private _onSelectionChange;
    setValue(value: string): void;
    getValue(): string;
    dispose(): void;
}
