import type { ScrollbarProps } from 'naive-ui';
export declare type UScrollbarPropsType = ScrollbarProps;
declare const UScrollbar: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    readonly trigger: import("vue").PropType<"hover" | "none">;
    readonly xScrollable: BooleanConstructor;
    readonly onScroll: import("vue").PropType<(e: Event) => void>;
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Scrollbar", {
        color: string;
        colorHover: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Scrollbar", {
        color: string;
        colorHover: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Scrollbar", {
        color: string;
        colorHover: string;
    }, any>>>;
}, {
    scrollbarInstRef: import("vue").Ref<{
        $el: HTMLElement;
        containerRef: HTMLElement | null;
        contentRef: HTMLElement | null;
        containerScrollTop: number;
        syncUnifiedContainer: () => void;
        scrollTo: import("naive-ui/es/_internal/scrollbar/src/Scrollbar").ScrollTo;
        scrollBy: import("naive-ui/es/_internal/scrollbar/src/Scrollbar").ScrollBy;
        sync: () => void;
        handleMouseEnterWrapper: () => void;
        handleMouseLeaveWrapper: () => void;
    } | null>;
    scrollTo: import("naive-ui/es/scrollbar/src/Scrollbar").ScrollTo;
    scrollBy: import("naive-ui/es/scrollbar/src/Scrollbar").ScrollTo;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly trigger: import("vue").PropType<"hover" | "none">;
    readonly xScrollable: BooleanConstructor;
    readonly onScroll: import("vue").PropType<(e: Event) => void>;
    readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Scrollbar", {
        color: string;
        colorHover: string;
    }, any>>;
    readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Scrollbar", {
        color: string;
        colorHover: string;
    }, any>>>;
    readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Scrollbar", {
        color: string;
        colorHover: string;
    }, any>>>;
}>>, {
    readonly xScrollable: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default UScrollbar;
