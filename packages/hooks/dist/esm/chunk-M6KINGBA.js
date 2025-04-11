// src/usePaginate.ts
import { onMounted, reactive, watchEffect } from "vue";
function usePaginate({
  service,
  pageSize = 12,
  params
}) {
  const data = reactive({
    page: 1,
    total: 0,
    loading: false,
    dataSource: []
  });
  const fetch = async () => {
    data.loading = true;
    const { total, items } = await service(data.page, pageSize, params);
    data.total = total;
    data.dataSource = items;
    data.loading = false;
  };
  watchEffect(fetch);
  onMounted(() => {
    fetch();
  });
  return { data };
}

export {
  usePaginate
};
