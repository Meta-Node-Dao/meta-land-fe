import type { SkeletonProps } from 'naive-ui';
export declare type USkeletonPropsType = SkeletonProps;
declare const USkeleton: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    readonly text: BooleanConstructor;
    readonly round: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly height: import("vue").PropType<string | number>;
    readonly width: import("vue").PropType<string | number>;
    readonly size: import("vue").PropType<"small" | "medium" | "large">;
    readonly repeat: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly animated: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly sharp: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Skeleton", {
        color: string;
        colorEnd: string;
        borderRadius: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Skeleton", {
        color: string;
        colorEnd: string;
        borderRadius: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Skeleton", {
        color: string;
        colorEnd: string;
        borderRadius: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
    }, any>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    style: import("vue").ComputedRef<{
        display: string;
        verticalAlign: string;
        borderRadius: string;
        width: string | undefined;
        height: string | undefined;
        animation: string;
        '--n-bezier': string;
        '--n-color-start': string;
        '--n-color-end': string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly text: BooleanConstructor;
    readonly round: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly height: import("vue").PropType<string | number>;
    readonly width: import("vue").PropType<string | number>;
    readonly size: import("vue").PropType<"small" | "medium" | "large">;
    readonly repeat: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly animated: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly sharp: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Skeleton", {
        color: string;
        colorEnd: string;
        borderRadius: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Skeleton", {
        color: string;
        colorEnd: string;
        borderRadius: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Skeleton", {
        color: string;
        colorEnd: string;
        borderRadius: string;
        heightSmall: string;
        heightMedium: string;
        heightLarge: string;
    }, any>>>;
}>>, {
    readonly repeat: number;
    readonly round: boolean;
    readonly text: boolean;
    readonly circle: boolean;
    readonly animated: boolean;
    readonly sharp: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default USkeleton;
