import type { BackTopProps } from 'naive-ui';
export declare type UBackTopPropsType = BackTopProps;
declare const UBackTop: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    readonly show: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly right: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 40;
    };
    readonly bottom: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 40;
    };
    readonly to: {
        readonly type: import("vue").PropType<string | HTMLElement>;
        readonly default: "body";
    };
    readonly visibilityHeight: {
        readonly type: NumberConstructor;
        readonly default: 180;
    };
    readonly listenTo: import("vue").PropType<string | Document | HTMLElement | (() => Document | HTMLElement)>;
    readonly 'onUpdate:show': {
        readonly type: FunctionConstructor;
        readonly default: () => void;
    };
    readonly target: import("vue").PropType<() => HTMLElement>;
    readonly onShow: import("vue").PropType<() => void>;
    readonly onHide: import("vue").PropType<() => void>;
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"BackTop", {
        color: string;
        textColor: string;
        iconColor: string;
        iconColorHover: string;
        iconColorPressed: string;
        boxShadow: string;
        boxShadowHover: string;
        boxShadowPressed: string;
        width: string;
        height: string;
        borderRadius: string;
        iconSize: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"BackTop", {
        color: string;
        textColor: string;
        iconColor: string;
        iconColorHover: string;
        iconColorPressed: string;
        boxShadow: string;
        boxShadowHover: string;
        boxShadowPressed: string;
        width: string;
        height: string;
        borderRadius: string;
        iconSize: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"BackTop", {
        color: string;
        textColor: string;
        iconColor: string;
        iconColorHover: string;
        iconColorPressed: string;
        boxShadow: string;
        boxShadowHover: string;
        boxShadowPressed: string;
        width: string;
        height: string;
        borderRadius: string;
        iconSize: string;
    }, any>>>;
}, {
    placeholderRef: import("vue").Ref<HTMLElement | null>;
    style: import("vue").ComputedRef<{
        right: string;
        bottom: string;
    }>;
    mergedShow: import("vue").ComputedRef<boolean>;
    isMounted: Readonly<import("vue").Ref<boolean>>;
    scrollElement: import("vue").Ref<null>;
    scrollTop: import("vue").Ref<number | null>;
    DomInfoReady: import("vue").Ref<boolean>;
    transitionDisabled: import("vue").Ref<boolean>;
    mergedClsPrefix: import("vue").ComputedRef<string>;
    handleAfterEnter: () => void;
    handleScroll: () => void;
    handleClick: () => void;
    cssVars: import("vue").ComputedRef<{
        '--n-bezier': string;
        '--n-border-radius': string;
        '--n-height': string;
        '--n-width': string;
        '--n-box-shadow': string;
        '--n-box-shadow-hover': string;
        '--n-box-shadow-pressed': string;
        '--n-color': string;
        '--n-icon-size': string;
        '--n-icon-color': string;
        '--n-icon-color-hover': string;
        '--n-icon-color-pressed': string;
        '--n-text-color': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly show: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly right: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 40;
    };
    readonly bottom: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: 40;
    };
    readonly to: {
        readonly type: import("vue").PropType<string | HTMLElement>;
        readonly default: "body";
    };
    readonly visibilityHeight: {
        readonly type: NumberConstructor;
        readonly default: 180;
    };
    readonly listenTo: import("vue").PropType<string | Document | HTMLElement | (() => Document | HTMLElement)>;
    readonly 'onUpdate:show': {
        readonly type: FunctionConstructor;
        readonly default: () => void;
    };
    readonly target: import("vue").PropType<() => HTMLElement>;
    readonly onShow: import("vue").PropType<() => void>;
    readonly onHide: import("vue").PropType<() => void>;
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"BackTop", {
        color: string;
        textColor: string;
        iconColor: string;
        iconColorHover: string;
        iconColorPressed: string;
        boxShadow: string;
        boxShadowHover: string;
        boxShadowPressed: string;
        width: string;
        height: string;
        borderRadius: string;
        iconSize: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"BackTop", {
        color: string;
        textColor: string;
        iconColor: string;
        iconColorHover: string;
        iconColorPressed: string;
        boxShadow: string;
        boxShadowHover: string;
        boxShadowPressed: string;
        width: string;
        height: string;
        borderRadius: string;
        iconSize: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"BackTop", {
        color: string;
        textColor: string;
        iconColor: string;
        iconColorHover: string;
        iconColorPressed: string;
        boxShadow: string;
        boxShadowHover: string;
        boxShadowPressed: string;
        width: string;
        height: string;
        borderRadius: string;
        iconSize: string;
    }, any>>>;
}>>, {
    readonly right: string | number;
    readonly bottom: string | number;
    readonly show: boolean | undefined;
    readonly to: string | HTMLElement;
    readonly 'onUpdate:show': Function;
    readonly visibilityHeight: number;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default UBackTop;
