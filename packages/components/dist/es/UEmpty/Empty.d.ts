import type { EmptyProps } from 'naive-ui';
export declare type UEmptyPropsType = EmptyProps;
declare const UEmpty: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    description: StringConstructor;
    showDescription: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large" | "huge">;
        default: string;
    };
    renderIcon: import("vue").PropType<() => import("vue").VNodeChild>;
    theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Empty", {
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        fontSizeHuge: string;
        textColor: string;
        iconColor: string;
        extraTextColor: string;
        iconSizeSmall: string;
        iconSizeMedium: string;
        iconSizeLarge: string;
        iconSizeHuge: string;
    }, any>>;
    themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Empty", {
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        fontSizeHuge: string;
        textColor: string;
        iconColor: string;
        extraTextColor: string;
        iconSizeSmall: string;
        iconSizeMedium: string;
        iconSizeLarge: string;
        iconSizeHuge: string;
    }, any>>>;
    builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Empty", {
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        fontSizeHuge: string;
        textColor: string;
        iconColor: string;
        extraTextColor: string;
        iconSizeSmall: string;
        iconSizeMedium: string;
        iconSizeLarge: string;
        iconSizeHuge: string;
    }, any>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    mergedRenderIcon: import("vue").ComputedRef<() => import("vue").VNodeChild>;
    localizedDescription: import("vue").ComputedRef<string>;
    cssVars: import("vue").ComputedRef<{
        '--n-icon-size': string;
        '--n-font-size': string;
        '--n-bezier': string;
        '--n-text-color': string;
        '--n-icon-color': string;
        '--n-extra-text-color': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    description: StringConstructor;
    showDescription: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large" | "huge">;
        default: string;
    };
    renderIcon: import("vue").PropType<() => import("vue").VNodeChild>;
    theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Empty", {
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        fontSizeHuge: string;
        textColor: string;
        iconColor: string;
        extraTextColor: string;
        iconSizeSmall: string;
        iconSizeMedium: string;
        iconSizeLarge: string;
        iconSizeHuge: string;
    }, any>>;
    themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Empty", {
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        fontSizeHuge: string;
        textColor: string;
        iconColor: string;
        extraTextColor: string;
        iconSizeSmall: string;
        iconSizeMedium: string;
        iconSizeLarge: string;
        iconSizeHuge: string;
    }, any>>>;
    builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Empty", {
        fontSizeSmall: string;
        fontSizeMedium: string;
        fontSizeLarge: string;
        fontSizeHuge: string;
        textColor: string;
        iconColor: string;
        extraTextColor: string;
        iconSizeSmall: string;
        iconSizeMedium: string;
        iconSizeLarge: string;
        iconSizeHuge: string;
    }, any>>>;
}>>, {
    size: "small" | "medium" | "large" | "huge";
    showDescription: boolean;
    showIcon: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default UEmpty;
