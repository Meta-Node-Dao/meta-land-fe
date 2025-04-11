import { PropType } from 'vue';
import { ExtractPropTypes } from '../utils';
import './UContractInteraction.css';
export declare type UContractInteractionStatus = 'pending' | 'success' | 'canceled' | 'failed';
export declare const UContractInteractionProps: {
    readonly status: {
        readonly type: PropType<UContractInteractionStatus>;
    };
    readonly text: {
        readonly type: StringConstructor;
    };
};
export declare type UContractInteractionPropsType = ExtractPropTypes<typeof UContractInteractionProps>;
declare const UContractInteraction: import("vue").DefineComponent<{
    readonly status: {
        readonly type: PropType<UContractInteractionStatus>;
    };
    readonly text: {
        readonly type: StringConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly status: {
        readonly type: PropType<UContractInteractionStatus>;
    };
    readonly text: {
        readonly type: StringConstructor;
    };
}>>, {}>;
export default UContractInteraction;
