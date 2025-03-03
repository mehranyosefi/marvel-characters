import { shallowRef, ref, computed, watchEffect, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { ComputedRef } from "vue";
import { useDebounce } from "./useDebounce";
import { useAPI } from "./useApi";

export function usePagination(baseUrl: string) {
  const route = useRoute();
  const router = useRouter();
  const page = shallowRef<number>(Number(route.query.page) || 1);
  const limit = shallowRef<number>(12);
  const data = ref<any>([]);
  const error = ref<{ message: string }>({ message: "" });
  const loading = shallowRef<boolean>(false);

  const offset: ComputedRef<number> = computed(
    () => limit.value * (page.value - 1)
  );
  const totalPages: ComputedRef<number> = computed(() => {
    return Math.ceil(data.value.total / limit.value);
  });
  const paginationNumbers: ComputedRef<(string | number)[]> = computed(() => {
    let pageNumbers: Array<number | string> = [];
    if (totalPages.value <= 7) {
      for (let index = 1; index <= totalPages.value; index++) {
        pageNumbers.push(index);
      }
    } else {
      if (page.value <= 4) {
        pageNumbers = [
          1,
          2,
          3,
          4,
          5,
          "...",
          totalPages.value - 1,
          totalPages.value,
        ];
      } else if (page.value >= totalPages.value - 3) {
        pageNumbers = [
          1,
          "...",
          totalPages.value - 4,
          totalPages.value - 3,
          totalPages.value - 2,
          totalPages.value - 1,
          totalPages.value,
        ];
      } else {
        pageNumbers = [
          1,
          "...",
          page.value - 1,
          page.value,
          page.value + 1,
          "...",
          totalPages.value - 1,
          totalPages.value,
        ];
      }
    }

    return pageNumbers;
  });

  async function fetchPaginatedData(url: string): Promise<any> {
    loading.value = true;
    try {
      const { data: resData, status } = await useAPI(url);
      if (status.value === "success") {
        data.value = resData.value.data;
        loading.value = false;
      } else {
        loading.value = false;
        throw new Error("Unknown response");
      }
    } catch (err) {
      error.value = { message: "Server error" };
      loading.value = false;
    } finally {
      loading.value = false;
    }
  }
  function changePage(pageNumber: number | string): void {
    const pn = pageNumber as number;
    if (pn >= 1 && pn <= totalPages.value) {
      page.value = pn;
      router.push({
        path: route.path,
        query: {
          ...route.query,
          page: pn,
          limit: limit.value,
        },
      });
    }
  }
  const debounceFetch = useDebounce(() => {
    fetchPaginatedData(
      `${baseUrl}&limit=${limit.value}&offset=${offset.value}`
    );
  }, 1000);

  watch([() => route.query.page, () => route.query.limit], () => {
    loading.value = true;
    debounceFetch();
  });
  watchEffect(() => {
    if (totalPages.value <= page.value) {
      page.value = totalPages.value;
    }
    router.push({
      path: route.path,
      query: {
        ...route.query,
        limit: limit.value,
        page: page.value,
      },
    });
  });

  fetchPaginatedData(`${baseUrl}&limit=${limit.value}&offset=${offset.value}`);
  return {
    page,
    limit,
    loading,
    data,
    totalPages,
    paginationNumbers,
    changePage,
  };
}
