import { ExtractPropTypes, InjectionKey, PropType } from 'vue';
declare type OnCustomUpload = (file: File, onProgress: (percent: number) => void) => Promise<string | undefined>;
export declare const UUploadProviderProps: {
    onUpload: {
        type: PropType<OnCustomUpload>;
        required: boolean;
    };
};
export declare type UUploadProviderPropsType = ExtractPropTypes<typeof UUploadProviderProps>;
export declare type UUploadProviderState = {
    onUpload: OnCustomUpload;
};
export declare const UUploadSymbol: InjectionKey<UUploadProviderState>;
export declare const UUploadProvider: import("vue").DefineComponent<{
    onUpload: {
        type: PropType<OnCustomUpload>;
        required: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    onUpload: {
        type: PropType<OnCustomUpload>;
        required: boolean;
    };
}>>, {}>;
export declare function useUpload(): UUploadProviderState;
export {};
