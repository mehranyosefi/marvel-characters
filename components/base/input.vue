<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: string;
    label?: string;
  }>(),
  {
    type: "text",
    label: "",
  }
);
const model = defineModel();
const emit = defineEmits(["hanldeEnterDown"]);

function handleKeyDown(e: KeyboardEvent): void {
  if (e.key === "Enter") emit("hanldeEnterDown");
}
</script>

<template>
  <div class="input">
    <label class="input__label" v-text="label"></label>
    <div
      class="input__scaffold rounded flex items-center justify-center transition duration-300 relative gap-x-4"
    >
      <slot name="prepend"></slot>
      <input
        :type="type"
        v-bind="$attrs"
        v-model="model"
        @keydown="handleKeyDown"
        class="grow border-none outline-none rounded py-4 px-2 bg-gray-500 text-lg"
      />
      <slot name="append"></slot>
    </div>
  </div>
</template>
<style scoped></style>
