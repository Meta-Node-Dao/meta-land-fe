import { ProgressProps } from 'naive-ui';
export declare type UProgressPropsType = ProgressProps;
declare const UProgress: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    readonly processing: BooleanConstructor;
    readonly type: {
        readonly type: import("vue").PropType<"circle" | "line" | "multiple-circle" | "dashboard">;
        readonly default: "line";
    };
    readonly gapDegree: NumberConstructor;
    readonly gapOffsetDegree: NumberConstructor;
    readonly status: {
        readonly type: import("vue").PropType<import("naive-ui/es/progress/src/interface").Status>;
        readonly default: "default";
    };
    readonly railColor: import("vue").PropType<string | string[]>;
    readonly railStyle: import("vue").PropType<string | import("vue").CSSProperties | (string | import("vue").CSSProperties)[]>;
    readonly color: import("vue").PropType<string | string[]>;
    readonly viewBoxWidth: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly strokeWidth: {
        readonly type: NumberConstructor;
        readonly default: 7;
    };
    readonly percentage: import("vue").PropType<number | number[]>;
    readonly unit: {
        readonly type: StringConstructor;
        readonly default: "%";
    };
    readonly showIndicator: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly indicatorPosition: {
        readonly type: import("vue").PropType<"inside" | "outside">;
        readonly default: "outside";
    };
    readonly indicatorPlacement: {
        readonly type: import("vue").PropType<"inside" | "outside">;
        readonly default: "outside";
    };
    readonly indicatorTextColor: StringConstructor;
    readonly circleGap: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly height: NumberConstructor;
    readonly borderRadius: import("vue").PropType<string | number>;
    readonly fillBorderRadius: import("vue").PropType<string | number>;
    readonly offsetDegree: NumberConstructor;
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Progress", {
        fontSize: string;
        fontSizeCircle: string;
        fontWeightCircle: string;
        railColor: string;
        railHeight: string;
        iconSizeCircle: string;
        iconSizeLine: string;
        iconColor: string;
        iconColorInfo: string;
        iconColorSuccess: string;
        iconColorWarning: string;
        iconColorError: string;
        textColorCircle: string;
        textColorLineInner: string;
        textColorLineOuter: string;
        fillColor: string;
        fillColorInfo: string;
        fillColorSuccess: string;
        fillColorWarning: string;
        fillColorError: string;
        lineBgProcessing: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Progress", {
        fontSize: string;
        fontSizeCircle: string;
        fontWeightCircle: string;
        railColor: string;
        railHeight: string;
        iconSizeCircle: string;
        iconSizeLine: string;
        iconColor: string;
        iconColorInfo: string;
        iconColorSuccess: string;
        iconColorWarning: string;
        iconColorError: string;
        textColorCircle: string;
        textColorLineInner: string;
        textColorLineOuter: string;
        fillColor: string;
        fillColorInfo: string;
        fillColorSuccess: string;
        fillColorWarning: string;
        fillColorError: string;
        lineBgProcessing: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Progress", {
        fontSize: string;
        fontSizeCircle: string;
        fontWeightCircle: string;
        railColor: string;
        railHeight: string;
        iconSizeCircle: string;
        iconSizeLine: string;
        iconColor: string;
        iconColorInfo: string;
        iconColorSuccess: string;
        iconColorWarning: string;
        iconColorError: string;
        textColorCircle: string;
        textColorLineInner: string;
        textColorLineOuter: string;
        fillColor: string;
        fillColorInfo: string;
        fillColorSuccess: string;
        fillColorWarning: string;
        fillColorError: string;
        lineBgProcessing: string;
    }, any>>>;
}, {
    mergedClsPrefix: import("vue").ComputedRef<string>;
    mergedIndicatorPlacement: import("vue").ComputedRef<"inside" | "outside">;
    gapDeg: import("vue").ComputedRef<number | undefined>;
    cssVars: import("vue").ComputedRef<{
        '--n-bezier': string;
        '--n-fill-color': string;
        '--n-font-size': string;
        '--n-font-size-circle': string;
        '--n-font-weight-circle': string;
        '--n-icon-color': string;
        '--n-icon-size-circle': string;
        '--n-icon-size-line': string;
        '--n-line-bg-processing': string;
        '--n-rail-color': string;
        '--n-rail-height': string;
        '--n-text-color-circle': string;
        '--n-text-color-line-inner': string;
        '--n-text-color-line-outer': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly processing: BooleanConstructor;
    readonly type: {
        readonly type: import("vue").PropType<"circle" | "line" | "multiple-circle" | "dashboard">;
        readonly default: "line";
    };
    readonly gapDegree: NumberConstructor;
    readonly gapOffsetDegree: NumberConstructor;
    readonly status: {
        readonly type: import("vue").PropType<import("naive-ui/es/progress/src/interface").Status>;
        readonly default: "default";
    };
    readonly railColor: import("vue").PropType<string | string[]>;
    readonly railStyle: import("vue").PropType<string | import("vue").CSSProperties | (string | import("vue").CSSProperties)[]>;
    readonly color: import("vue").PropType<string | string[]>;
    readonly viewBoxWidth: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly strokeWidth: {
        readonly type: NumberConstructor;
        readonly default: 7;
    };
    readonly percentage: import("vue").PropType<number | number[]>;
    readonly unit: {
        readonly type: StringConstructor;
        readonly default: "%";
    };
    readonly showIndicator: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly indicatorPosition: {
        readonly type: import("vue").PropType<"inside" | "outside">;
        readonly default: "outside";
    };
    readonly indicatorPlacement: {
        readonly type: import("vue").PropType<"inside" | "outside">;
        readonly default: "outside";
    };
    readonly indicatorTextColor: StringConstructor;
    readonly circleGap: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly height: NumberConstructor;
    readonly borderRadius: import("vue").PropType<string | number>;
    readonly fillBorderRadius: import("vue").PropType<string | number>;
    readonly offsetDegree: NumberConstructor;
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Progress", {
        fontSize: string;
        fontSizeCircle: string;
        fontWeightCircle: string;
        railColor: string;
        railHeight: string;
        iconSizeCircle: string;
        iconSizeLine: string;
        iconColor: string;
        iconColorInfo: string;
        iconColorSuccess: string;
        iconColorWarning: string;
        iconColorError: string;
        textColorCircle: string;
        textColorLineInner: string;
        textColorLineOuter: string;
        fillColor: string;
        fillColorInfo: string;
        fillColorSuccess: string;
        fillColorWarning: string;
        fillColorError: string;
        lineBgProcessing: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Progress", {
        fontSize: string;
        fontSizeCircle: string;
        fontWeightCircle: string;
        railColor: string;
        railHeight: string;
        iconSizeCircle: string;
        iconSizeLine: string;
        iconColor: string;
        iconColorInfo: string;
        iconColorSuccess: string;
        iconColorWarning: string;
        iconColorError: string;
        textColorCircle: string;
        textColorLineInner: string;
        textColorLineOuter: string;
        fillColor: string;
        fillColorInfo: string;
        fillColorSuccess: string;
        fillColorWarning: string;
        fillColorError: string;
        lineBgProcessing: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Progress", {
        fontSize: string;
        fontSizeCircle: string;
        fontWeightCircle: string;
        railColor: string;
        railHeight: string;
        iconSizeCircle: string;
        iconSizeLine: string;
        iconColor: string;
        iconColorInfo: string;
        iconColorSuccess: string;
        iconColorWarning: string;
        iconColorError: string;
        textColorCircle: string;
        textColorLineInner: string;
        textColorLineOuter: string;
        fillColor: string;
        fillColorInfo: string;
        fillColorSuccess: string;
        fillColorWarning: string;
        fillColorError: string;
        lineBgProcessing: string;
    }, any>>>;
}>>, {
    readonly type: "circle" | "line" | "multiple-circle" | "dashboard";
    readonly strokeWidth: number;
    readonly status: import("naive-ui/es/progress/src/interface").Status;
    readonly processing: boolean;
    readonly unit: string;
    readonly indicatorPlacement: "inside" | "outside";
    readonly showIndicator: boolean;
    readonly viewBoxWidth: number;
    readonly circleGap: number;
    readonly indicatorPosition: "inside" | "outside";
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default UProgress;
