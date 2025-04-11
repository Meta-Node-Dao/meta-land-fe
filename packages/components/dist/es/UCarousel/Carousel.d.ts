import { CarouselProps, NCarousel } from 'naive-ui';
export declare type CarouselInstance = InstanceType<typeof NCarousel>;
export declare type UCarouselProps = CarouselProps;
declare const UCarousel: import("vue").DefineComponent<{
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    currentIndex: NumberConstructor;
    showArrow: BooleanConstructor;
    dotType: {
        type: import("vue").PropType<"line" | "dot">;
        default: string;
    };
    dotPlacement: {
        type: import("vue").PropType<"right" | "bottom" | "left" | "top">;
        default: string;
    };
    slidesPerView: {
        type: import("vue").PropType<number | "auto">;
        default: number;
    };
    spaceBetween: {
        type: NumberConstructor;
        default: number;
    };
    centeredSlides: BooleanConstructor;
    direction: {
        type: import("vue").PropType<"vertical" | "horizontal">;
        default: string;
    };
    autoplay: BooleanConstructor;
    interval: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    effect: {
        type: import("vue").PropType<"card" | "slide" | "fade" | "custom">;
        default: string;
    };
    showDots: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<"click" | "hover">;
        default: string;
    };
    transitionStyle: {
        type: import("vue").PropType<Partial<Pick<import("vue").CSSProperties, "transitionDuration" | "transitionTimingFunction">>>;
        default: () => Partial<Pick<import("vue").CSSProperties, "transitionDuration" | "transitionTimingFunction">>;
    };
    transitionProps: import("vue").PropType<import("vue").TransitionProps>;
    draggable: BooleanConstructor;
    prevSlideStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    nextSlideStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    touchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    mousewheel: BooleanConstructor;
    keyboard: BooleanConstructor;
    'onUpdate:currentIndex': import("vue").PropType<(currentIndex: number, lastIndex: number) => void>;
    onUpdateCurrentIndex: import("vue").PropType<(currentIndex: number, lastIndex: number) => void>;
    theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>;
    themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>>;
    builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>>;
}, {
    cssVars: import("vue").ComputedRef<{
        '--n-bezier': string;
        '--n-dot-color': string;
        '--n-dot-color-focus': string;
        '--n-dot-color-active': string;
        '--n-dot-size': string;
        '--n-dot-line-width': string;
        '--n-dot-line-width-active': string;
        '--n-arrow-color': string;
    }> | undefined;
    themeClass: import("vue").Ref<string> | undefined;
    onRender: (() => void) | undefined;
    getCurrentIndex: () => number;
    to: (index: number) => void;
    prev: () => void;
    next: () => void;
    mergedClsPrefix: import("vue").ComputedRef<string>;
    selfElRef: import("vue").Ref<HTMLDivElement | null>;
    slidesElRef: import("vue").Ref<HTMLDivElement | null>;
    slideVNodes: {
        value: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    };
    duplicatedable: import("vue").ComputedRef<boolean>;
    userWantsControl: import("vue").ComputedRef<boolean>;
    autoSlideSize: import("vue").ComputedRef<boolean>;
    displayIndex: import("vue").ComputedRef<number>;
    realIndex: import("vue").ComputedRef<number>;
    slideStyles: import("vue").ComputedRef<import("vue").CSSProperties[] | (Partial<import("naive-ui/es/carousel/src/interface").Size> | undefined)[]>;
    translateStyle: import("vue").Ref<import("vue").CSSProperties>;
    slidesControlListeners: import("vue").ComputedRef<{
        onTouchstartPassive: ((event: MouseEvent | TouchEvent) => void) | undefined;
        onMousedown: ((event: MouseEvent | TouchEvent) => void) | undefined;
        onWheel: ((event: WheelEvent) => void) | undefined;
    }>;
    handleTransitionEnd: () => void;
    handleResize: () => void;
    handleSlideResize: () => void;
    handleMouseenter: () => void;
    handleMouseleave: () => void;
    isActive: (index: number) => boolean;
    arrowSlotProps: import("vue").ComputedRef<import("naive-ui/es/carousel/src/interface").ArrowScopedSlotProps>;
    dotSlotProps: import("vue").ComputedRef<import("naive-ui/es/carousel/src/interface").DotScopedSlotProps>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    currentIndex: NumberConstructor;
    showArrow: BooleanConstructor;
    dotType: {
        type: import("vue").PropType<"line" | "dot">;
        default: string;
    };
    dotPlacement: {
        type: import("vue").PropType<"right" | "bottom" | "left" | "top">;
        default: string;
    };
    slidesPerView: {
        type: import("vue").PropType<number | "auto">;
        default: number;
    };
    spaceBetween: {
        type: NumberConstructor;
        default: number;
    };
    centeredSlides: BooleanConstructor;
    direction: {
        type: import("vue").PropType<"vertical" | "horizontal">;
        default: string;
    };
    autoplay: BooleanConstructor;
    interval: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    effect: {
        type: import("vue").PropType<"card" | "slide" | "fade" | "custom">;
        default: string;
    };
    showDots: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<"click" | "hover">;
        default: string;
    };
    transitionStyle: {
        type: import("vue").PropType<Partial<Pick<import("vue").CSSProperties, "transitionDuration" | "transitionTimingFunction">>>;
        default: () => Partial<Pick<import("vue").CSSProperties, "transitionDuration" | "transitionTimingFunction">>;
    };
    transitionProps: import("vue").PropType<import("vue").TransitionProps>;
    draggable: BooleanConstructor;
    prevSlideStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    nextSlideStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    touchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    mousewheel: BooleanConstructor;
    keyboard: BooleanConstructor;
    'onUpdate:currentIndex': import("vue").PropType<(currentIndex: number, lastIndex: number) => void>;
    onUpdateCurrentIndex: import("vue").PropType<(currentIndex: number, lastIndex: number) => void>;
    theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>;
    themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>>;
    builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Carousel", {
        dotSize: string;
        dotColor: string;
        dotColorActive: string;
        dotColorFocus: string;
        dotLineWidth: string;
        dotLineWidthActive: string;
        arrowColor: string;
    }, any>>>;
}>>, {
    direction: "vertical" | "horizontal";
    draggable: boolean;
    autoplay: boolean;
    loop: boolean;
    trigger: "click" | "hover";
    showArrow: boolean;
    keyboard: boolean;
    dotType: "line" | "dot";
    defaultIndex: number;
    dotPlacement: "right" | "bottom" | "left" | "top";
    slidesPerView: number | "auto";
    spaceBetween: number;
    centeredSlides: boolean;
    interval: number;
    effect: "card" | "slide" | "fade" | "custom";
    showDots: boolean;
    transitionStyle: Partial<Pick<import("vue").CSSProperties, "transitionDuration" | "transitionTimingFunction">>;
    touchable: boolean;
    mousewheel: boolean;
}>;
export default UCarousel;
