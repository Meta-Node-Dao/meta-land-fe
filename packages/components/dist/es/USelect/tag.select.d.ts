import { InputHTMLAttributes } from 'vue';
import { SelectOption } from '../constants';
export declare type TagLimitedProps = {
    value?: (string | number)[];
    tagLimit: number;
    charLimit: number;
    options?: SelectOption[];
};
export default function useLimitTags(props: TagLimitedProps, defaultOptions: SelectOption[]): {
    options: import("vue").ComputedRef<SelectOption[]>;
    inputProps: import("vue").ComputedRef<InputHTMLAttributes>;
    onSearch: (query: string) => void;
};
