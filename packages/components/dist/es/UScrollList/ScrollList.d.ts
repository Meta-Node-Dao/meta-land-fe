import type { PropType } from 'vue';
import './index.css';
export declare const UScrollListProps: {
    readonly pageSize: {
        readonly type: NumberConstructor;
        readonly required: true;
        readonly default: 20;
    };
    readonly page: {
        readonly type: NumberConstructor;
        readonly required: true;
        readonly default: 1;
    };
    readonly total: {
        readonly type: NumberConstructor;
        readonly required: true;
        readonly default: 0;
    };
    readonly triggered: {
        readonly type: BooleanConstructor;
        readonly required: true;
        readonly default: false;
    };
    readonly onLoadMore: {
        readonly type: PropType<(page: number) => void>;
        readonly required: true;
    };
    readonly triggerThreshold: {
        readonly type: NumberConstructor;
        readonly default: 60;
    };
    readonly loadingText: StringConstructor;
    readonly noMoreText: StringConstructor;
};
export declare type UScrollListPropsType = typeof UScrollListProps;
declare const UScrollList: import("vue").DefineComponent<{
    readonly pageSize: {
        readonly type: NumberConstructor;
        readonly required: true;
        readonly default: 20;
    };
    readonly page: {
        readonly type: NumberConstructor;
        readonly required: true;
        readonly default: 1;
    };
    readonly total: {
        readonly type: NumberConstructor;
        readonly required: true;
        readonly default: 0;
    };
    readonly triggered: {
        readonly type: BooleanConstructor;
        readonly required: true;
        readonly default: false;
    };
    readonly onLoadMore: {
        readonly type: PropType<(page: number) => void>;
        readonly required: true;
    };
    readonly triggerThreshold: {
        readonly type: NumberConstructor;
        readonly default: 60;
    };
    readonly loadingText: StringConstructor;
    readonly noMoreText: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly pageSize: {
        readonly type: NumberConstructor;
        readonly required: true;
        readonly default: 20;
    };
    readonly page: {
        readonly type: NumberConstructor;
        readonly required: true;
        readonly default: 1;
    };
    readonly total: {
        readonly type: NumberConstructor;
        readonly required: true;
        readonly default: 0;
    };
    readonly triggered: {
        readonly type: BooleanConstructor;
        readonly required: true;
        readonly default: false;
    };
    readonly onLoadMore: {
        readonly type: PropType<(page: number) => void>;
        readonly required: true;
    };
    readonly triggerThreshold: {
        readonly type: NumberConstructor;
        readonly default: 60;
    };
    readonly loadingText: StringConstructor;
    readonly noMoreText: StringConstructor;
}>>, {
    readonly page: number;
    readonly pageSize: number;
    readonly total: number;
    readonly triggerThreshold: number;
}>;
export default UScrollList;
