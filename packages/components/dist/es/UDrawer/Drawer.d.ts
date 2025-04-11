import { ExtractPropTypes, PropType } from 'vue';
import './Drawer.css';
export declare const UDrawerProps: {
    readonly title: {
        readonly type: StringConstructor;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 928;
    };
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly maskClosable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly placement: {
        readonly type: PropType<"right" | "bottom" | "left" | "top">;
        readonly default: "right";
    };
};
export declare type UDrawerPropsType = ExtractPropTypes<typeof UDrawerProps>;
declare const UDrawer: import("vue").DefineComponent<{
    readonly title: {
        readonly type: StringConstructor;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 928;
    };
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly maskClosable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly placement: {
        readonly type: PropType<"right" | "bottom" | "left" | "top">;
        readonly default: "right";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:show"[], "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly title: {
        readonly type: StringConstructor;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 928;
    };
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly maskClosable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly placement: {
        readonly type: PropType<"right" | "bottom" | "left" | "top">;
        readonly default: "right";
    };
}>> & {
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
}, {
    readonly show: boolean;
    readonly width: number;
    readonly maskClosable: boolean;
    readonly placement: "right" | "bottom" | "left" | "top";
}>;
export default UDrawer;
