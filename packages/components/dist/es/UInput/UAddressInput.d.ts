import { PropType } from 'vue';
import type { ExtractPropTypes } from '../utils';
import './UAddressInput.css';
export declare const UAddressInputProps: {
    readonly value: {
        readonly type: StringConstructor;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "Public address";
    };
    readonly onChange: {
        readonly type: PropType<(v: string) => void>;
    };
    readonly noIcon: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type UAddressInputPropsType = ExtractPropTypes<typeof UAddressInputProps>;
declare const UAddressInput: import("vue").DefineComponent<{
    readonly value: {
        readonly type: StringConstructor;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "Public address";
    };
    readonly onChange: {
        readonly type: PropType<(v: string) => void>;
    };
    readonly noIcon: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], "update:value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly value: {
        readonly type: StringConstructor;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "Public address";
    };
    readonly onChange: {
        readonly type: PropType<(v: string) => void>;
    };
    readonly noIcon: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & {
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    readonly placeholder: string;
    readonly noIcon: boolean;
}>;
export default UAddressInput;
