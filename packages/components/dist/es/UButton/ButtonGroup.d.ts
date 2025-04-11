import type { ButtonGroupProps } from 'naive-ui';
export declare type UButtonGroupPropsType = ButtonGroupProps;
declare const UButtonGroup: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    readonly size: {
        readonly type: import("vue").PropType<import("naive-ui/es/button/src/interface").Size | undefined>;
        readonly default: undefined;
    };
    readonly vertical: BooleanConstructor;
}, {
    rtlEnabled: import("vue").Ref<import("naive-ui/es/config-provider/src/internal-interface").RtlItem | undefined> | undefined;
    mergedClsPrefix: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: {
        readonly type: import("vue").PropType<import("naive-ui/es/button/src/interface").Size | undefined>;
        readonly default: undefined;
    };
    readonly vertical: BooleanConstructor;
}>>, {
    readonly size: import("naive-ui/es/button/src/interface").Size | undefined;
    readonly vertical: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default UButtonGroup;
