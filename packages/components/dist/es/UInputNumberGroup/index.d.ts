import './style.css';
import { AllowedComponentProps, PropType } from 'vue';
declare type GroupType = 'withSelect' | 'withUnit';
declare const UInputNumberGroup: import("vue").DefineComponent<{
    inputProps: {
        type: PropType<import("naive-ui").InputProps & {
            step?: number | undefined;
            precision?: number | undefined;
            max?: string | number | undefined;
            min?: string | number | undefined;
            parse?: ((value: any) => any) | undefined;
        } & AllowedComponentProps>;
    };
    value: {
        type: (NumberConstructor | StringConstructor | ArrayConstructor)[];
        default: null;
    };
    class: {
        type: StringConstructor;
    };
    type: {
        type: PropType<GroupType>;
    };
    renderUnit: {
        type: PropType<() => JSX.Element>;
    };
    renderSelect: {
        type: PropType<() => JSX.Element>;
    };
    onInput: {
        type: PropType<(value: string) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], "update:value", import("vue").VNodeProps & AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    inputProps: {
        type: PropType<import("naive-ui").InputProps & {
            step?: number | undefined;
            precision?: number | undefined;
            max?: string | number | undefined;
            min?: string | number | undefined;
            parse?: ((value: any) => any) | undefined;
        } & AllowedComponentProps>;
    };
    value: {
        type: (NumberConstructor | StringConstructor | ArrayConstructor)[];
        default: null;
    };
    class: {
        type: StringConstructor;
    };
    type: {
        type: PropType<GroupType>;
    };
    renderUnit: {
        type: PropType<() => JSX.Element>;
    };
    renderSelect: {
        type: PropType<() => JSX.Element>;
    };
    onInput: {
        type: PropType<(value: string) => void>;
    };
}>> & {
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    value: string | number | unknown[];
}>;
export { UInputNumberGroup };
