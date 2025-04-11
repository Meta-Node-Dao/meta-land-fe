import { FormProps, FormInst, FormItemRule, FormItemProps } from 'naive-ui';
import type { PropType, Slot, VNode } from 'vue';
import { UAddressInputPropsType } from '../UInput';
import { USingleImageUploadPropsType } from '../UUpload';
import { SelectOption } from '../constants';
import { UInputPropsType, USelectPropsType, UDatePickerPropsType, USwitchPropsType } from '../index';
import type { ExtractPropTypes } from '../utils';
import './FormFactory.css';
export declare type FormFactoryInputField = {
    t?: 'string';
} & UInputPropsType;
export declare type FormFactoryAddrssInputField = {
    t: 'address';
} & UAddressInputPropsType;
export declare type FormFactoryWebsiteField = {
    t: 'website';
} & UInputPropsType;
export declare type FormFactorySelectField = {
    t: 'select';
} & USelectPropsType;
export declare type FormFactorySkillTagsField = {
    value?: string[];
    t: 'skillTags';
    maxLength?: number;
    options: {
        label: string;
        value: string | number;
    }[];
} & USelectPropsType;
export declare type FormFactoryStartupTagsField = {
    value?: string[];
    t: 'startupTags';
    maxLength?: number;
    options?: SelectOption[];
} & USelectPropsType;
export declare type FormFactorySingleUploadField = {
    t: 'singleImageUpload';
} & USingleImageUploadPropsType;
export declare type FormFactoryCustomField = {
    t: 'custom';
    render: (value: any) => VNode;
};
export declare type FormFactoryDateField = {
    t: 'date';
} & UDatePickerPropsType;
export declare type FormFactorySwitchField = {
    t: 'switch';
} & USwitchPropsType;
declare type InternalSlots = {
    [name: string]: Slot | undefined;
};
export declare type FormFactoryField = {
    title: string;
    name: string;
    required?: boolean;
    rules?: FormItemRule[];
    disabled?: boolean;
    class?: string;
    slots?: InternalSlots;
    formItemProps?: FormItemProps;
    maxlength?: number;
} & (FormFactoryInputField | FormFactoryAddrssInputField | FormFactoryWebsiteField | FormFactorySkillTagsField | FormFactoryStartupTagsField | FormFactorySelectField | FormFactorySingleUploadField | FormFactoryCustomField | FormFactoryDateField | FormFactorySwitchField);
export declare type FormData = Record<string, any>;
export declare const UFormFactoryProps: {
    readonly fields: {
        readonly type: PropType<FormFactoryField[]>;
        readonly required: true;
    };
    readonly onSubmit: {
        readonly type: PropType<(values: FormData) => void>;
    };
    readonly submitText: {
        readonly type: StringConstructor;
        readonly default: "Submit";
    };
    readonly showCancel: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly cancelText: {
        readonly type: StringConstructor;
        readonly default: "Cancel";
    };
    readonly onCancel: {
        readonly type: PropType<() => void>;
    };
    readonly initialValues: {
        readonly type: PropType<FormData>;
    };
    readonly removeNil: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type UFormFactoryPropsType = ExtractPropTypes<typeof UFormFactoryProps> & Omit<FormProps, 'onSubmit'>;
export declare const addressInputRule: FormItemRule;
export declare const websiteInputRule: FormItemRule;
export declare function getFieldsRules(fields: FormFactoryField[]): Record<string, FormItemRule[]>;
export declare const UFormItemsFactory: import("vue").DefineComponent<{
    fields: {
        readonly type: PropType<FormFactoryField[]>;
        readonly required: true;
    };
    values: {
        type: PropType<Record<string, any>>;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fields: {
        readonly type: PropType<FormFactoryField[]>;
        readonly required: true;
    };
    values: {
        type: PropType<Record<string, any>>;
        required: true;
    };
}>>, {}>;
export declare const UFormFactory: import("vue").DefineComponent<{
    readonly fields: {
        readonly type: PropType<FormFactoryField[]>;
        readonly required: true;
    };
    readonly onSubmit: {
        readonly type: PropType<(values: FormData) => void>;
    };
    readonly submitText: {
        readonly type: StringConstructor;
        readonly default: "Submit";
    };
    readonly showCancel: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly cancelText: {
        readonly type: StringConstructor;
        readonly default: "Cancel";
    };
    readonly onCancel: {
        readonly type: PropType<() => void>;
    };
    readonly initialValues: {
        readonly type: PropType<FormData>;
    };
    readonly removeNil: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    readonly inline: BooleanConstructor;
    readonly labelWidth: PropType<string | number>;
    readonly labelAlign: PropType<import("naive-ui/es/form/src/interface").LabelAlign>;
    readonly labelPlacement: {
        readonly type: PropType<import("naive-ui/es/form/src/interface").LabelPlacement>;
        readonly default: "top";
    };
    readonly model: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => void;
    };
    readonly rules: PropType<import("naive-ui").FormRules>;
    readonly disabled: BooleanConstructor;
    readonly size: PropType<import("naive-ui/es/form/src/interface").Size>;
    readonly showRequireMark: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly requireMarkPlacement: PropType<"right" | "left" | "right-hanging">;
    readonly showFeedback: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onSubmit: {
        readonly type: PropType<(e: Event) => void>;
        readonly default: (e: Event) => void;
    };
    readonly showLabel: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly validateMessages: PropType<Partial<import("naive-ui/es/form/src/interface").FormValidateMessages>>;
    readonly theme: PropType<import("naive-ui/es/_mixins").Theme<"Form", {
        blankHeightSmall: string;
        blankHeightMedium: string;
        blankHeightLarge: string;
        lineHeight: string;
        labelTextColor: string;
        asteriskColor: string;
        feedbackTextColorError: string;
        feedbackTextColorWarning: string;
        feedbackTextColor: string;
        feedbackPadding: string;
        feedbackHeightSmall: string;
        feedbackHeightMedium: string;
        feedbackHeightLarge: string;
        feedbackFontSizeSmall: string;
        feedbackFontSizeMedium: string;
        feedbackFontSizeLarge: string;
        labelFontSizeLeftSmall: string;
        labelFontSizeLeftMedium: string;
        labelFontSizeLeftLarge: string;
        labelFontSizeTopSmall: string;
        labelFontSizeTopMedium: string;
        labelFontSizeTopLarge: string;
        labelHeightSmall: string;
        labelHeightMedium: string;
        labelHeightLarge: string;
        labelPaddingVertical: string;
        labelPaddingHorizontal: string;
        labelTextAlignVertical: string;
        labelTextAlignHorizontal: string;
    }, any>>;
    readonly themeOverrides: PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Form", {
        blankHeightSmall: string;
        blankHeightMedium: string;
        blankHeightLarge: string;
        lineHeight: string;
        labelTextColor: string;
        asteriskColor: string;
        feedbackTextColorError: string;
        feedbackTextColorWarning: string;
        feedbackTextColor: string;
        feedbackPadding: string;
        feedbackHeightSmall: string;
        feedbackHeightMedium: string;
        feedbackHeightLarge: string;
        feedbackFontSizeSmall: string;
        feedbackFontSizeMedium: string;
        feedbackFontSizeLarge: string;
        labelFontSizeLeftSmall: string;
        labelFontSizeLeftMedium: string;
        labelFontSizeLeftLarge: string;
        labelFontSizeTopSmall: string;
        labelFontSizeTopMedium: string;
        labelFontSizeTopLarge: string;
        labelHeightSmall: string;
        labelHeightMedium: string;
        labelHeightLarge: string;
        labelPaddingVertical: string;
        labelPaddingHorizontal: string;
        labelTextAlignVertical: string;
        labelTextAlignHorizontal: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Form", {
        blankHeightSmall: string;
        blankHeightMedium: string;
        blankHeightLarge: string;
        lineHeight: string;
        labelTextColor: string;
        asteriskColor: string;
        feedbackTextColorError: string;
        feedbackTextColorWarning: string;
        feedbackTextColor: string;
        feedbackPadding: string;
        feedbackHeightSmall: string;
        feedbackHeightMedium: string;
        feedbackHeightLarge: string;
        feedbackFontSizeSmall: string;
        feedbackFontSizeMedium: string;
        feedbackFontSizeLarge: string;
        labelFontSizeLeftSmall: string;
        labelFontSizeLeftMedium: string;
        labelFontSizeLeftLarge: string;
        labelFontSizeTopSmall: string;
        labelFontSizeTopMedium: string;
        labelFontSizeTopLarge: string;
        labelHeightSmall: string;
        labelHeightMedium: string;
        labelHeightLarge: string;
        labelPaddingVertical: string;
        labelPaddingHorizontal: string;
        labelTextAlignVertical: string;
        labelTextAlignHorizontal: string;
    }, any>>>;
}, FormInst & {
    mergedClsPrefix: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly inline: BooleanConstructor;
    readonly labelWidth: PropType<string | number>;
    readonly labelAlign: PropType<import("naive-ui/es/form/src/interface").LabelAlign>;
    readonly labelPlacement: {
        readonly type: PropType<import("naive-ui/es/form/src/interface").LabelPlacement>;
        readonly default: "top";
    };
    readonly model: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => void;
    };
    readonly rules: PropType<import("naive-ui").FormRules>;
    readonly disabled: BooleanConstructor;
    readonly size: PropType<import("naive-ui/es/form/src/interface").Size>;
    readonly showRequireMark: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly requireMarkPlacement: PropType<"right" | "left" | "right-hanging">;
    readonly showFeedback: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onSubmit: {
        readonly type: PropType<(e: Event) => void>;
        readonly default: (e: Event) => void;
    };
    readonly showLabel: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly validateMessages: PropType<Partial<import("naive-ui/es/form/src/interface").FormValidateMessages>>;
    readonly theme: PropType<import("naive-ui/es/_mixins").Theme<"Form", {
        blankHeightSmall: string;
        blankHeightMedium: string;
        blankHeightLarge: string;
        lineHeight: string;
        labelTextColor: string;
        asteriskColor: string;
        feedbackTextColorError: string;
        feedbackTextColorWarning: string;
        feedbackTextColor: string;
        feedbackPadding: string;
        feedbackHeightSmall: string;
        feedbackHeightMedium: string;
        feedbackHeightLarge: string;
        feedbackFontSizeSmall: string;
        feedbackFontSizeMedium: string;
        feedbackFontSizeLarge: string;
        labelFontSizeLeftSmall: string;
        labelFontSizeLeftMedium: string;
        labelFontSizeLeftLarge: string;
        labelFontSizeTopSmall: string;
        labelFontSizeTopMedium: string;
        labelFontSizeTopLarge: string;
        labelHeightSmall: string;
        labelHeightMedium: string;
        labelHeightLarge: string;
        labelPaddingVertical: string;
        labelPaddingHorizontal: string;
        labelTextAlignVertical: string;
        labelTextAlignHorizontal: string;
    }, any>>;
    readonly themeOverrides: PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Form", {
        blankHeightSmall: string;
        blankHeightMedium: string;
        blankHeightLarge: string;
        lineHeight: string;
        labelTextColor: string;
        asteriskColor: string;
        feedbackTextColorError: string;
        feedbackTextColorWarning: string;
        feedbackTextColor: string;
        feedbackPadding: string;
        feedbackHeightSmall: string;
        feedbackHeightMedium: string;
        feedbackHeightLarge: string;
        feedbackFontSizeSmall: string;
        feedbackFontSizeMedium: string;
        feedbackFontSizeLarge: string;
        labelFontSizeLeftSmall: string;
        labelFontSizeLeftMedium: string;
        labelFontSizeLeftLarge: string;
        labelFontSizeTopSmall: string;
        labelFontSizeTopMedium: string;
        labelFontSizeTopLarge: string;
        labelHeightSmall: string;
        labelHeightMedium: string;
        labelHeightLarge: string;
        labelPaddingVertical: string;
        labelPaddingHorizontal: string;
        labelTextAlignVertical: string;
        labelTextAlignHorizontal: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Form", {
        blankHeightSmall: string;
        blankHeightMedium: string;
        blankHeightLarge: string;
        lineHeight: string;
        labelTextColor: string;
        asteriskColor: string;
        feedbackTextColorError: string;
        feedbackTextColorWarning: string;
        feedbackTextColor: string;
        feedbackPadding: string;
        feedbackHeightSmall: string;
        feedbackHeightMedium: string;
        feedbackHeightLarge: string;
        feedbackFontSizeSmall: string;
        feedbackFontSizeMedium: string;
        feedbackFontSizeLarge: string;
        labelFontSizeLeftSmall: string;
        labelFontSizeLeftMedium: string;
        labelFontSizeLeftLarge: string;
        labelFontSizeTopSmall: string;
        labelFontSizeTopMedium: string;
        labelFontSizeTopLarge: string;
        labelHeightSmall: string;
        labelHeightMedium: string;
        labelHeightLarge: string;
        labelPaddingVertical: string;
        labelPaddingHorizontal: string;
        labelTextAlignVertical: string;
        labelTextAlignHorizontal: string;
    }, any>>>;
}>>, {
    readonly inline: boolean;
    readonly disabled: boolean;
    readonly onSubmit: (e: Event) => void;
    readonly labelPlacement: import("naive-ui/es/form/src/interface").LabelPlacement;
    readonly model: Record<string, any>;
    readonly showRequireMark: boolean | undefined;
    readonly showFeedback: boolean;
    readonly showLabel: boolean | undefined;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly fields: {
        readonly type: PropType<FormFactoryField[]>;
        readonly required: true;
    };
    readonly onSubmit: {
        readonly type: PropType<(values: FormData) => void>;
    };
    readonly submitText: {
        readonly type: StringConstructor;
        readonly default: "Submit";
    };
    readonly showCancel: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly cancelText: {
        readonly type: StringConstructor;
        readonly default: "Cancel";
    };
    readonly onCancel: {
        readonly type: PropType<() => void>;
    };
    readonly initialValues: {
        readonly type: PropType<FormData>;
    };
    readonly removeNil: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly submitText: string;
    readonly showCancel: boolean;
    readonly cancelText: string;
    readonly removeNil: boolean;
}>;
export {};
