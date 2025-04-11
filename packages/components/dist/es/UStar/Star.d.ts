import type { PropType, ExtractPropTypes } from 'vue';
import './index.css';
export declare const UStarProps: {
    type: {
        type: PropType<"follow" | "followed">;
        default: string;
    };
};
export declare type UStarPropsType = ExtractPropTypes<typeof UStarProps>;
export declare const UStar: import("vue").DefineComponent<{
    type: {
        type: PropType<"follow" | "followed">;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    type: {
        type: PropType<"follow" | "followed">;
        default: string;
    };
}>>, {
    type: "follow" | "followed";
}>;
export default UStar;
