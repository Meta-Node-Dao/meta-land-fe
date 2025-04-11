import * as vue from 'vue';

declare function useMockCountdown(args?: {
    total?: number;
}): {
    left: vue.Ref<number>;
    cancel: () => void;
    setLeft: (v: number) => void;
};

export { useMockCountdown };
