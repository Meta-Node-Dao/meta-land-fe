import type { EllipsisProps } from 'naive-ui';
export declare type UEllipsisPropsType = EllipsisProps;
declare const UEllipsis: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    readonly expandTrigger: import("vue").PropType<"click">;
    readonly lineClamp: import("vue").PropType<string | number>;
    readonly tooltip: {
        readonly type: import("vue").PropType<boolean | import("naive-ui").PopoverProps>;
        readonly default: true;
    };
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("naive-ui/es/_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("naive-ui/es/_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("naive-ui/es/_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("naive-ui/es/_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("naive-ui/es/_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("naive-ui/es/_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>>;
}, {
    mergedTheme: import("vue").ComputedRef<{
        common: {
            baseColor: string;
            primaryColor: string;
            primaryColorHover: string;
            primaryColorPressed: string;
            primaryColorSuppl: string;
            infoColor: string;
            infoColorHover: string;
            infoColorPressed: string;
            infoColorSuppl: string;
            successColor: string;
            successColorHover: string;
            successColorPressed: string;
            successColorSuppl: string;
            warningColor: string;
            warningColorHover: string;
            warningColorPressed: string;
            warningColorSuppl: string;
            errorColor: string;
            errorColorHover: string;
            errorColorPressed: string;
            errorColorSuppl: string;
            textColorBase: string;
            textColor1: string;
            textColor2: string;
            textColor3: string;
            textColorDisabled: string;
            placeholderColor: string;
            placeholderColorDisabled: string;
            iconColor: string;
            iconColorHover: string;
            iconColorPressed: string;
            iconColorDisabled: string;
            opacity1: string;
            opacity2: string;
            opacity3: string;
            opacity4: string;
            opacity5: string;
            dividerColor: string;
            borderColor: string;
            closeIconColor: string;
            closeIconColorHover: string;
            closeIconColorPressed: string;
            closeColorHover: string;
            closeColorPressed: string;
            clearColor: string;
            clearColorHover: string;
            clearColorPressed: string;
            scrollbarColor: string;
            scrollbarColorHover: string;
            scrollbarWidth: string;
            scrollbarHeight: string;
            scrollbarBorderRadius: string;
            progressRailColor: string;
            railColor: string;
            popoverColor: string;
            tableColor: string;
            cardColor: string;
            modalColor: string;
            bodyColor: string;
            tagColor: string;
            avatarColor: string;
            invertedColor: string;
            inputColor: string;
            codeColor: string;
            tabColor: string;
            actionColor: string;
            tableHeaderColor: string;
            hoverColor: string;
            tableColorHover: string;
            tableColorStriped: string;
            pressedColor: string;
            opacityDisabled: string;
            inputColorDisabled: string;
            buttonColor2: string;
            buttonColor2Hover: string;
            buttonColor2Pressed: string;
            boxShadow1: string;
            boxShadow2: string;
            boxShadow3: string;
            fontFamily: string;
            fontFamilyMono: string;
            fontWeight: string;
            fontWeightStrong: string;
            cubicBezierEaseInOut: string;
            cubicBezierEaseOut: string;
            cubicBezierEaseIn: string;
            borderRadius: string;
            borderRadiusSmall: string;
            fontSize: string;
            fontSizeMini: string;
            fontSizeTiny: string;
            fontSizeSmall: string;
            fontSizeMedium: string;
            fontSizeLarge: string;
            fontSizeHuge: string;
            lineHeight: string;
            heightMini: string;
            heightTiny: string;
            heightSmall: string;
            heightMedium: string;
            heightLarge: string;
            heightHuge: string;
            name: "common";
        };
        self: unknown;
        peers: {
            Tooltip: import("naive-ui/es/_mixins").Theme<"Tooltip", {
                borderRadius: string;
                boxShadow: string;
                color: string;
                textColor: string;
                padding: string;
            }, {
                Popover: import("naive-ui/es/_mixins").Theme<"Popover", {
                    fontSize: string;
                    borderRadius: string;
                    color: string;
                    dividerColor: string;
                    textColor: string;
                    boxShadow: string;
                    space: string;
                    spaceArrow: string;
                    arrowOffset: string;
                    arrowOffsetVertical: string;
                    arrowHeight: string;
                    padding: string;
                }, any>;
            }>;
        };
        peerOverrides: {
            Tooltip?: {
                peers?: {
                    Popover?: import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Popover", {
                        fontSize: string;
                        borderRadius: string;
                        color: string;
                        dividerColor: string;
                        textColor: string;
                        boxShadow: string;
                        space: string;
                        spaceArrow: string;
                        arrowOffset: string;
                        arrowOffsetVertical: string;
                        arrowHeight: string;
                        padding: string;
                    }, any>> | undefined;
                } | undefined;
            } | undefined;
        };
    }>;
    triggerRef: import("vue").Ref<HTMLElement | null>;
    triggerInnerRef: import("vue").Ref<HTMLElement | null>;
    tooltipRef: import("vue").Ref<{
        syncPosition: () => void;
        setShow: (value: boolean) => void;
    } | null>;
    handleClick: import("vue").ComputedRef<(() => void) | undefined>;
    renderTrigger: () => JSX.Element;
    getTooltipDisabled: () => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly expandTrigger: import("vue").PropType<"click">;
    readonly lineClamp: import("vue").PropType<string | number>;
    readonly tooltip: {
        readonly type: import("vue").PropType<boolean | import("naive-ui").PopoverProps>;
        readonly default: true;
    };
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("naive-ui/es/_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("naive-ui/es/_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("naive-ui/es/_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("naive-ui/es/_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("naive-ui/es/_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("naive-ui/es/_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>>;
}>>, {
    readonly tooltip: boolean | import("naive-ui").PopoverProps;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default UEllipsis;
