import { FileInfo } from 'naive-ui/lib/upload/src/interface';
export type { FileInfo } from 'naive-ui/lib/upload/src/interface';
import { PropType } from 'vue';
export declare const USingleImageFileUpload: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
    };
    value: {
        type: PropType<FileInfo>;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    sizeLimit: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    aspectRatio: {
        type: NumberConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], "update:value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
    };
    value: {
        type: PropType<FileInfo>;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    sizeLimit: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    aspectRatio: {
        type: NumberConstructor;
    };
}>> & {
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    accept: string;
    sizeLimit: number;
}>;
