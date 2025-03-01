<script lang="ts" setup>
import type { ShallowRef } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    color?: string;
    isLoading?: boolean;
    to?: string;
    outlined?: boolean;
  }>(),
  {
    type: "button",
    color: "red",
    isLoading: false,
    to: undefined,
    outlined: false,
  }
);

const router = useRouter();
const getOutlinedClasses: ShallowRef = shallowRef<string>(
  `bg-transparent !text-${props.color}-500 hover:bg-${props.color}-500 hover:border-${props.color}-500 hover:!text-white`
);

function handleClik(): void {
  if (props.to) router.push(props.to);
}
</script>

<template>
  <button
    class="border rounded-lg cursor-pointer flex items-center justify-center transition-all duration-300"
    :class="[`bg-${color}-500`]"
    :type="type"
    @click="handleClik"
  >
    <template v-if="!isLoading">
      <slot name="prepend"></slot>
      <slot />
      <slot name="append"></slot>
    </template>
    <div v-else class="loader"></div>
  </button>
</template>

<style scoped></style>
<!-- :class="[
outlined
  ? `bg-transparent !text-${color}-500 hover:bg-${color}-500 hover:border-${color}-500 hover:!text-white`
  : `bg-${color}-500 border-${color}-900 text-white`,
]" -->
