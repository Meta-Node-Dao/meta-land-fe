import { ExtractPropTypes } from 'vue';
export declare const UMarkdownProps: {
    readonly value: {
        readonly type: StringConstructor;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
    };
};
export declare type UMarkdownPropsType = ExtractPropTypes<typeof UMarkdownProps>;
declare const UMarkdown: import("vue").DefineComponent<{
    readonly value: {
        readonly type: StringConstructor;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], "update:value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly value: {
        readonly type: StringConstructor;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
    };
}>> & {
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default UMarkdown;
