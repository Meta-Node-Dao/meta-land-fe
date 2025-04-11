import type { PropType, VNode, ExtractPropTypes } from 'vue';
import './index.css';
export interface UDescriptionItem {
    label: string;
    content: string | number | VNode;
}
export declare const UDescriptionProps: {
    readonly items: {
        readonly type: PropType<UDescriptionItem[]>;
        readonly required: true;
    };
    readonly cols: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly labelWidth: {
        readonly type: StringConstructor;
        readonly default: "148px";
    };
    readonly colon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly upperCase: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly contentWrap: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type UDescriptionPropsType = ExtractPropTypes<typeof UDescriptionProps>;
declare const UDescription: import("vue").DefineComponent<{
    readonly items: {
        readonly type: PropType<UDescriptionItem[]>;
        readonly required: true;
    };
    readonly cols: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly labelWidth: {
        readonly type: StringConstructor;
        readonly default: "148px";
    };
    readonly colon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly upperCase: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly contentWrap: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly items: {
        readonly type: PropType<UDescriptionItem[]>;
        readonly required: true;
    };
    readonly cols: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly labelWidth: {
        readonly type: StringConstructor;
        readonly default: "148px";
    };
    readonly colon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly upperCase: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly contentWrap: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly cols: number;
    readonly labelWidth: string;
    readonly colon: boolean;
    readonly upperCase: boolean;
    readonly contentWrap: boolean;
}>;
export default UDescription;
