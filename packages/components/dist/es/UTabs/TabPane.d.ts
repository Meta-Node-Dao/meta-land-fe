import { TabPaneProps } from 'naive-ui';
export declare type UTabPanePropsType = TabPaneProps;
declare const UTabPane: import("vue").DefineComponent<{
    readonly tab: import("vue").PropType<string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => import("vue").VNodeChild)>;
    readonly name: {
        readonly type: import("vue").PropType<string | number>;
        readonly required: true;
    };
    readonly disabled: BooleanConstructor;
    readonly displayDirective: {
        readonly type: import("vue").PropType<"show" | "if" | "show:lazy">;
        readonly default: "if";
    };
    readonly closable: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly tabProps: import("vue").PropType<import("vue").HTMLAttributes>;
    readonly label: import("vue").PropType<string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => import("vue").VNodeChild)>;
}, {
    style: import("vue").Ref<string | import("vue").CSSProperties | undefined>;
    class: import("vue").Ref<string | undefined>;
    mergedClsPrefix: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly tab: import("vue").PropType<string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => import("vue").VNodeChild)>;
    readonly name: {
        readonly type: import("vue").PropType<string | number>;
        readonly required: true;
    };
    readonly disabled: BooleanConstructor;
    readonly displayDirective: {
        readonly type: import("vue").PropType<"show" | "if" | "show:lazy">;
        readonly default: "if";
    };
    readonly closable: {
        readonly type: import("vue").PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly tabProps: import("vue").PropType<import("vue").HTMLAttributes>;
    readonly label: import("vue").PropType<string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => import("vue").VNodeChild)>;
}>>, {
    readonly disabled: boolean;
    readonly closable: boolean | undefined;
    readonly displayDirective: "show" | "if" | "show:lazy";
}>;
export default UTabPane;
