import type { ExtractPropTypes, PropType } from 'vue';
import './index.css';
interface UGuideStep {
    index: number;
    title: string;
    desc: string;
}
export declare const UGuideStepProps: {
    readonly steps: {
        readonly type: PropType<UGuideStep[]>;
        readonly required: true;
    };
};
export declare type UGuideStepPropsType = ExtractPropTypes<typeof UGuideStepProps>;
declare const UGuideSteps: import("vue").DefineComponent<{
    readonly steps: {
        readonly type: PropType<UGuideStep[]>;
        readonly required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly steps: {
        readonly type: PropType<UGuideStep[]>;
        readonly required: true;
    };
}>>, {}>;
export default UGuideSteps;
