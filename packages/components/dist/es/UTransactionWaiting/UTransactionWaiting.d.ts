import { PropType } from 'vue';
import { ExtractPropTypes } from '../utils';
import './UTransactionWaiting.css';
export declare const UTransactionWaitingProps: {
    readonly text: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly hash: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly status: {
        readonly type: PropType<"success" | "pending" | "failed">;
        readonly required: true;
        readonly default: "pending";
    };
    readonly blockchainExplorerUrl: {
        readonly type: StringConstructor;
    };
    readonly normalType: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly blockchain: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type UTransactionWaitingPropsType = ExtractPropTypes<typeof UTransactionWaitingProps>;
declare const UTransactionWaiting: import("vue").DefineComponent<{
    readonly text: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly hash: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly status: {
        readonly type: PropType<"success" | "pending" | "failed">;
        readonly required: true;
        readonly default: "pending";
    };
    readonly blockchainExplorerUrl: {
        readonly type: StringConstructor;
    };
    readonly normalType: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly blockchain: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly text: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly hash: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly status: {
        readonly type: PropType<"success" | "pending" | "failed">;
        readonly required: true;
        readonly default: "pending";
    };
    readonly blockchainExplorerUrl: {
        readonly type: StringConstructor;
    };
    readonly normalType: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly blockchain: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    readonly status: "success" | "pending" | "failed";
    readonly normalType: boolean;
    readonly blockchain: boolean;
}>;
export default UTransactionWaiting;
