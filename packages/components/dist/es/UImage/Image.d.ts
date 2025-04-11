import type { ImageProps } from 'naive-ui';
export declare type UImagePropsType = ImageProps;
declare const UImage: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    showToolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    showToolbarTooltip: BooleanConstructor;
    theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Image", {
        toolbarIconColor: string;
        toolbarColor: string;
        toolbarBoxShadow: string;
        toolbarBorderRadius: string;
    }, {
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
    themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Image", {
        toolbarIconColor: string;
        toolbarColor: string;
        toolbarBoxShadow: string;
        toolbarBorderRadius: string;
    }, {
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
    builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Image", {
        toolbarIconColor: string;
        toolbarColor: string;
        toolbarBoxShadow: string;
        toolbarBorderRadius: string;
    }, {
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
    alt: StringConstructor;
    height: import("vue").PropType<string | number>;
    imgProps: import("vue").PropType<import("vue").ImgHTMLAttributes>;
    lazy: BooleanConstructor;
    intersectionObserverOptions: import("vue").PropType<import("naive-ui/es/image/src/utils").IntersectionObserverOptions>;
    objectFit: {
        type: import("vue").PropType<"fill" | "none" | "contain" | "cover" | "scale-down">;
        default: string;
    };
    previewSrc: StringConstructor;
    fallbackSrc: StringConstructor;
    width: import("vue").PropType<string | number>;
    src: StringConstructor;
    previewDisabled: BooleanConstructor;
    loadDescription: StringConstructor;
    onError: import("vue").PropType<(e: Event) => void>;
    onLoad: import("vue").PropType<(e: Event) => void>;
}, {
    click: () => void;
    mergedClsPrefix: import("vue").Ref<string> | import("vue").ComputedRef<string>;
    groupId: string | undefined;
    previewInstRef: import("vue").Ref<{
        setThumbnailEl: (e: HTMLImageElement | null) => void;
        setPreviewSrc: (src?: string | undefined) => void;
        toggleShow: () => void;
    } | null>;
    imageRef: import("vue").Ref<HTMLImageElement | null>;
    imgProps: import("vue").Ref<import("vue").ImgHTMLAttributes | undefined>;
    showError: import("vue").Ref<boolean>;
    shouldStartLoading: import("vue").Ref<boolean>;
    loaded: import("vue").Ref<boolean>;
    mergedOnError: (e: Event) => void;
    mergedOnLoad: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    showToolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    showToolbarTooltip: BooleanConstructor;
    theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Image", {
        toolbarIconColor: string;
        toolbarColor: string;
        toolbarBoxShadow: string;
        toolbarBorderRadius: string;
    }, {
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
    themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Image", {
        toolbarIconColor: string;
        toolbarColor: string;
        toolbarBoxShadow: string;
        toolbarBorderRadius: string;
    }, {
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
    builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Image", {
        toolbarIconColor: string;
        toolbarColor: string;
        toolbarBoxShadow: string;
        toolbarBorderRadius: string;
    }, {
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
    alt: StringConstructor;
    height: import("vue").PropType<string | number>;
    imgProps: import("vue").PropType<import("vue").ImgHTMLAttributes>;
    lazy: BooleanConstructor;
    intersectionObserverOptions: import("vue").PropType<import("naive-ui/es/image/src/utils").IntersectionObserverOptions>;
    objectFit: {
        type: import("vue").PropType<"fill" | "none" | "contain" | "cover" | "scale-down">;
        default: string;
    };
    previewSrc: StringConstructor;
    fallbackSrc: StringConstructor;
    width: import("vue").PropType<string | number>;
    src: StringConstructor;
    previewDisabled: BooleanConstructor;
    loadDescription: StringConstructor;
    onError: import("vue").PropType<(e: Event) => void>;
    onLoad: import("vue").PropType<(e: Event) => void>;
}>>, {
    lazy: boolean;
    objectFit: "fill" | "none" | "contain" | "cover" | "scale-down";
    showToolbar: boolean;
    showToolbarTooltip: boolean;
    previewDisabled: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default UImage;
