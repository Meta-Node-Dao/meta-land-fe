import copy from 'copy-to-clipboard';
import type { PropType } from 'vue';
import { ExtractPropTypes } from '../utils';
import './address.css';
export declare const UAddressProps: {
    readonly prefixLength: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly suffixLength: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly autoSlice: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly address: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly type: {
        readonly type: PropType<"address" | "tx">;
        readonly default: "tx";
    };
    readonly blockchainExplorerUrl: {
        readonly type: StringConstructor;
    };
};
export declare type UAddressPropsType = ExtractPropTypes<typeof UAddressProps>;
declare const UAddress: import("vue").DefineComponent<{
    readonly prefixLength: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly suffixLength: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly autoSlice: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly address: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly type: {
        readonly type: PropType<"address" | "tx">;
        readonly default: "tx";
    };
    readonly blockchainExplorerUrl: {
        readonly type: StringConstructor;
    };
}, () => JSX.Element | "", unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly prefixLength: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly suffixLength: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly autoSlice: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly address: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly type: {
        readonly type: PropType<"address" | "tx">;
        readonly default: "tx";
    };
    readonly blockchainExplorerUrl: {
        readonly type: StringConstructor;
    };
}>>, {
    readonly type: "address" | "tx";
    readonly prefixLength: number;
    readonly suffixLength: number;
    readonly autoSlice: boolean;
}>;
export default UAddress;
export declare const copyToClipboard: typeof copy;
