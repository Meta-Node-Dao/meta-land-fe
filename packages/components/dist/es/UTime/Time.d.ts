import type { TimeProps } from 'naive-ui';
export declare type UTimePropsType = TimeProps;
declare const UTime: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    readonly time: {
        readonly type: import("vue").PropType<number | Date>;
        readonly default: undefined;
    };
    readonly type: {
        readonly type: import("vue").PropType<"date" | "datetime" | "relative">;
        readonly default: "datetime";
    };
    readonly to: {
        readonly type: import("vue").PropType<number | Date>;
        readonly default: undefined;
    };
    readonly unix: BooleanConstructor;
    readonly format: StringConstructor;
    readonly text: BooleanConstructor;
    readonly timeZone: StringConstructor;
}, {
    renderedTime: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly time: {
        readonly type: import("vue").PropType<number | Date>;
        readonly default: undefined;
    };
    readonly type: {
        readonly type: import("vue").PropType<"date" | "datetime" | "relative">;
        readonly default: "datetime";
    };
    readonly to: {
        readonly type: import("vue").PropType<number | Date>;
        readonly default: undefined;
    };
    readonly unix: BooleanConstructor;
    readonly format: StringConstructor;
    readonly text: BooleanConstructor;
    readonly timeZone: StringConstructor;
}>>, {
    readonly type: "date" | "datetime" | "relative";
    readonly text: boolean;
    readonly time: number | Date;
    readonly to: number | Date;
    readonly unix: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default UTime;
