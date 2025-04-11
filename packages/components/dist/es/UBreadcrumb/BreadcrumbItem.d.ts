import { BreadcrumbItemProps } from 'naive-ui';
import './index.css';
export declare type UBreadcrumbItemPropsType = BreadcrumbItemProps;
declare const UBreadcrumbItem: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    readonly separator: StringConstructor;
    readonly href: StringConstructor;
    readonly clickable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onClick: import("vue").PropType<(e: MouseEvent) => void>;
}, (() => null) | (() => JSX.Element), unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly separator: StringConstructor;
    readonly href: StringConstructor;
    readonly clickable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onClick: import("vue").PropType<(e: MouseEvent) => void>;
}>>, {
    readonly clickable: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default UBreadcrumbItem;
