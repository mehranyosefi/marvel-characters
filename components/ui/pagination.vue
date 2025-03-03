<template>
  <nav>
    <div class="flex justify-center items-center py-2 px-4 gap-1">
      <base-btn
        :disabled="page === 1 || page === 2"
        @click="emit('changePage', page - 2)"
        vapid
        class="w-9 h-9 pt-3 rounded-full hover:bg-gray-500"
      >
        <span class="inline-block text-2xl"><<</span>
      </base-btn>
      <base-btn
        :disabled="page === 1"
        @click="emit('changePage', page - 1)"
        vapid
        class="w-9 h-9 pt-3 rounded-full hover:bg-gray-500"
      >
        <span class="inline-block text-2xl"><</span>
      </base-btn>
      <base-btn
        v-for="pageNumber in paginationNumbers"
        :key="`${pageNumber}--${346}`"
        :active="page === pageNumber"
        vapid
        @click="emit('changePage', pageNumber)"
        class="w-9 h-9 pt-3 rounded-full hover:bg-gray-500"
        :class="{
          'hover:!cursor-auto hover:!bg-transparent': pageNumber === '...',
          '!bg-red-500': page === pageNumber,
        }"
      >
        {{ pageNumber }}
      </base-btn>
      <base-btn
        :disabled="page === totalPages"
        @click="emit('changePage', page + 1)"
        vapid
        class="w-9 h-9 pt-3 rounded-full hover:bg-gray-500"
      >
        <span class="inline-block text-2xl">></span>
      </base-btn>
      <base-btn
        :disabled="page === totalPages || page === totalPages - 1"
        @click="emit('changePage', page + 2)"
        vapid
        class="w-9 h-9 pt-3 rounded-full hover:bg-gray-500"
      >
        <span class="inline-block text-2xl">>></span>
      </base-btn>
    </div>
  </nav>
</template>
<script setup lang="ts">
const props = defineProps<{
  page: number;
  paginationNumbers: Array<string | number>;
  totalPages: number;
}>();

const emit = defineEmits<{
  (event: "changePage", pageNumber: string | number): void;
}>();
</script>

<style scoped></style>
