import { usePaginate } from '@comunion/hooks';
import { ExtractPropTypes, PropType, VNode } from 'vue';
export declare const UPaginatedListProps: {
    readonly service: {
        readonly type: PropType<(page: number, pageSize: number, params?: any) => Promise<{
            total: number;
            items: any[];
        }>>;
        readonly required: true;
    };
    readonly defaultPageSize: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly params: {
        readonly type: PropType<any>;
    };
    readonly children: {
        readonly type: PropType<(data: ReturnType<typeof usePaginate>['data']) => VNode>;
    };
    readonly hidePaginationOnSinglePage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type UPaginatedListPropsType = ExtractPropTypes<typeof UPaginatedListProps>;
declare const UPaginatedList: import("vue").DefineComponent<{
    readonly service: {
        readonly type: PropType<(page: number, pageSize: number, params?: any) => Promise<{
            total: number;
            items: any[];
        }>>;
        readonly required: true;
    };
    readonly defaultPageSize: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly params: {
        readonly type: PropType<any>;
    };
    readonly children: {
        readonly type: PropType<(data: ReturnType<typeof usePaginate>['data']) => VNode>;
    };
    readonly hidePaginationOnSinglePage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly service: {
        readonly type: PropType<(page: number, pageSize: number, params?: any) => Promise<{
            total: number;
            items: any[];
        }>>;
        readonly required: true;
    };
    readonly defaultPageSize: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly params: {
        readonly type: PropType<any>;
    };
    readonly children: {
        readonly type: PropType<(data: ReturnType<typeof usePaginate>['data']) => VNode>;
    };
    readonly hidePaginationOnSinglePage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly defaultPageSize: number;
    readonly hidePaginationOnSinglePage: boolean;
}>;
export default UPaginatedList;
