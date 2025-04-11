import { ImgHTMLAttributes } from 'vue';
import { ExtractPropTypes } from '../utils';
import './LazyImage.css';
export declare const ULazyImageProps: {
    readonly src: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly alt: {
        readonly type: StringConstructor;
    };
};
export declare type ULazyImagePropsType = ImgHTMLAttributes & ExtractPropTypes<typeof ULazyImageProps>;
declare const ULazyImage: import("vue").DefineComponent<{
    readonly src: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly alt: {
        readonly type: StringConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly src: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly alt: {
        readonly type: StringConstructor;
    };
}>>, {}>;
export default ULazyImage;
