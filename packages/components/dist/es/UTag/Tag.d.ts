import type { PropType, ExtractPropTypes } from 'vue';
import './index.css';
export declare const UTagProps: {
    type: {
        type: PropType<"filled" | "outlined">;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
};
export declare type UTagPropsType = ExtractPropTypes<typeof UTagProps>;
export declare const Utag: import("vue").DefineComponent<{
    type: {
        type: PropType<"filled" | "outlined">;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    type: {
        type: PropType<"filled" | "outlined">;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    type: "filled" | "outlined";
    bgColor: string;
}>;
export default Utag;
