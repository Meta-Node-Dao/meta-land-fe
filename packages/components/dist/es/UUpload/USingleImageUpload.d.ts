import type { ExtractPropTypes } from '../utils';
import './USingleImageUpload.css';
export declare const USingleImageUploadProps: {
    readonly value: {
        readonly type: StringConstructor;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 72;
    };
    readonly text: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "Select a file to upload";
    };
    readonly accept: {
        readonly type: StringConstructor;
        readonly default: "image/*";
    };
    readonly sizeLimit: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: number;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type USingleImageUploadPropsType = ExtractPropTypes<typeof USingleImageUploadProps>;
declare const USingleImageUpload: import("vue").DefineComponent<{
    readonly value: {
        readonly type: StringConstructor;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 72;
    };
    readonly text: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "Select a file to upload";
    };
    readonly accept: {
        readonly type: StringConstructor;
        readonly default: "image/*";
    };
    readonly sizeLimit: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: number;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], "update:value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly value: {
        readonly type: StringConstructor;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: 72;
    };
    readonly text: {
        readonly type: StringConstructor;
        readonly required: false;
        readonly default: "Select a file to upload";
    };
    readonly accept: {
        readonly type: StringConstructor;
        readonly default: "image/*";
    };
    readonly sizeLimit: {
        readonly type: NumberConstructor;
        readonly required: false;
        readonly default: number;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & {
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    readonly text: string;
    readonly disabled: boolean;
    readonly size: number;
    readonly accept: string;
    readonly sizeLimit: number;
}>;
export default USingleImageUpload;
