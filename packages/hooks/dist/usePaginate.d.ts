declare function usePaginate({ service, pageSize, params }: {
    service: (page: number, pageSize: number, params?: any) => Promise<{
        total: number;
        items: any[];
    }>;
    pageSize?: number;
    params?: any;
}): {
    data: {
        page: number;
        total: number;
        loading: boolean;
        dataSource: any[];
    };
};

export { usePaginate };
