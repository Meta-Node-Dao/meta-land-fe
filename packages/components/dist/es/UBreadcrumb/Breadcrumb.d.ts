import { BreadcrumbProps } from 'naive-ui';
import './index.css';
export declare type UBreadcrumbPropsType = BreadcrumbProps;
declare const UBreadcrumb: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    readonly separator: {
        readonly type: StringConstructor;
        readonly default: "/";
    };
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemLineHeight: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        itemBorderRadius: string;
        itemColorHover: string;
        itemColorPressed: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemLineHeight: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        itemBorderRadius: string;
        itemColorHover: string;
        itemColorPressed: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemLineHeight: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        itemBorderRadius: string;
        itemColorHover: string;
        itemColorPressed: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    cssVars: import("vue").ComputedRef<{
        '--n-font-size': string;
        '--n-bezier': string;
        '--n-item-text-color': string;
        '--n-item-text-color-hover': string;
        '--n-item-text-color-pressed': string;
        '--n-item-text-color-active': string;
        '--n-separator-color': string;
        '--n-item-color-hover': string;
        '--n-item-color-pressed': string;
        '--n-item-border-radius': string;
        '--n-font-weight-active': string;
        '--n-item-line-height': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly separator: {
        readonly type: StringConstructor;
        readonly default: "/";
    };
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemLineHeight: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        itemBorderRadius: string;
        itemColorHover: string;
        itemColorPressed: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemLineHeight: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        itemBorderRadius: string;
        itemColorHover: string;
        itemColorPressed: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Breadcrumb", {
        fontSize: string;
        itemLineHeight: string;
        itemTextColor: string;
        itemTextColorHover: string;
        itemTextColorPressed: string;
        itemTextColorActive: string;
        itemBorderRadius: string;
        itemColorHover: string;
        itemColorPressed: string;
        separatorColor: string;
        fontWeightActive: string;
    }, any>>>;
}>>, {
    readonly separator: string;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default UBreadcrumb;
