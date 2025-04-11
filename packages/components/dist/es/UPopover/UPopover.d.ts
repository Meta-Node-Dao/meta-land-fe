import { PopoverProps } from 'naive-ui';
export declare type UPopoverProps = PopoverProps;
export declare const UPopover: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    internalOnAfterLeave: import("vue").PropType<() => void>;
    internalRenderBody: import("vue").PropType<import("naive-ui/es/popover/src/interface").InternalRenderBody>;
    show: {
        type: import("vue").PropType<boolean | undefined>;
        default: undefined;
    };
    defaultShow: BooleanConstructor;
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<import("naive-ui").PopoverTrigger>;
        default: string;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    raw: BooleanConstructor;
    placement: {
        type: import("vue").PropType<import("naive-ui").PopoverPlacement>;
        default: string;
    };
    x: NumberConstructor;
    y: NumberConstructor;
    arrowPointToCenter: BooleanConstructor;
    disabled: BooleanConstructor;
    getDisabled: import("vue").PropType<() => boolean>;
    displayDirective: {
        type: import("vue").PropType<"show" | "if">;
        default: string;
    };
    arrowStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    flip: {
        type: BooleanConstructor;
        default: boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<number | "trigger">;
        default: undefined;
    };
    overlap: BooleanConstructor;
    keepAliveOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: NumberConstructor;
    to: {
        type: import("vue").PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    scrollable: BooleanConstructor;
    contentStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    headerStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    footerStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    onClickoutside: import("vue").PropType<(e: MouseEvent) => void>;
    'onUpdate:show': import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: boolean) => void>>;
    onUpdateShow: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: boolean) => void>>;
    internalDeactivateImmediately: BooleanConstructor;
    internalSyncTargetWithParent: BooleanConstructor;
    internalInheritedEventHandlers: {
        type: import("vue").PropType<import("naive-ui/es/popover/src/Popover").TriggerEventHandlers[]>;
        default: () => never[];
    };
    internalTrapFocus: BooleanConstructor;
    internalExtraClass: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    onShow: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: boolean) => void> | undefined>;
    onHide: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: boolean) => void> | undefined>;
    arrow: {
        type: import("vue").PropType<boolean | undefined>;
        default: undefined;
    };
    minWidth: NumberConstructor;
    maxWidth: NumberConstructor;
    theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Popover", {
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
    }, any>>;
    themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Popover", {
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
    }, any>>>;
    builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Popover", {
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
    }, any>>>;
}, {
    binderInstRef: import("vue").Ref<{
        targetRef: HTMLElement | null;
    } | null>;
    positionManually: import("vue").ComputedRef<boolean>;
    mergedShowConsideringDisabledProp: import("vue").ComputedRef<boolean>;
    uncontrolledShow: import("vue").Ref<boolean>;
    mergedShowArrow: import("vue").ComputedRef<boolean>;
    getMergedShow: () => boolean;
    setShow: (value: boolean) => void;
    handleClick: () => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    handleFocus: () => void;
    handleBlur: () => void;
    syncPosition: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    internalOnAfterLeave: import("vue").PropType<() => void>;
    internalRenderBody: import("vue").PropType<import("naive-ui/es/popover/src/interface").InternalRenderBody>;
    show: {
        type: import("vue").PropType<boolean | undefined>;
        default: undefined;
    };
    defaultShow: BooleanConstructor;
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<import("naive-ui").PopoverTrigger>;
        default: string;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    raw: BooleanConstructor;
    placement: {
        type: import("vue").PropType<import("naive-ui").PopoverPlacement>;
        default: string;
    };
    x: NumberConstructor;
    y: NumberConstructor;
    arrowPointToCenter: BooleanConstructor;
    disabled: BooleanConstructor;
    getDisabled: import("vue").PropType<() => boolean>;
    displayDirective: {
        type: import("vue").PropType<"show" | "if">;
        default: string;
    };
    arrowStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    flip: {
        type: BooleanConstructor;
        default: boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<number | "trigger">;
        default: undefined;
    };
    overlap: BooleanConstructor;
    keepAliveOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: NumberConstructor;
    to: {
        type: import("vue").PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    scrollable: BooleanConstructor;
    contentStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    headerStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    footerStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    onClickoutside: import("vue").PropType<(e: MouseEvent) => void>;
    'onUpdate:show': import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: boolean) => void>>;
    onUpdateShow: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: boolean) => void>>;
    internalDeactivateImmediately: BooleanConstructor;
    internalSyncTargetWithParent: BooleanConstructor;
    internalInheritedEventHandlers: {
        type: import("vue").PropType<import("naive-ui/es/popover/src/Popover").TriggerEventHandlers[]>;
        default: () => never[];
    };
    internalTrapFocus: BooleanConstructor;
    internalExtraClass: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    onShow: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: boolean) => void> | undefined>;
    onHide: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: boolean) => void> | undefined>;
    arrow: {
        type: import("vue").PropType<boolean | undefined>;
        default: undefined;
    };
    minWidth: NumberConstructor;
    maxWidth: NumberConstructor;
    theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Popover", {
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
    }, any>>;
    themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Popover", {
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
    }, any>>>;
    builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Popover", {
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
    }, any>>>;
}>>, {
    show: boolean | undefined;
    flip: boolean;
    width: number | "trigger";
    disabled: boolean;
    duration: number;
    to: string | boolean | HTMLElement;
    raw: boolean;
    placement: import("naive-ui").PopoverPlacement;
    overlap: boolean;
    scrollable: boolean;
    trigger: import("naive-ui").PopoverTrigger;
    showArrow: boolean;
    delay: number;
    arrowPointToCenter: boolean;
    displayDirective: "show" | "if";
    keepAliveOnHover: boolean;
    internalDeactivateImmediately: boolean;
    animated: boolean;
    internalTrapFocus: boolean;
    defaultShow: boolean;
    internalSyncTargetWithParent: boolean;
    internalInheritedEventHandlers: import("naive-ui/es/popover/src/Popover").TriggerEventHandlers[];
    internalExtraClass: string[];
    arrow: boolean | undefined;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
