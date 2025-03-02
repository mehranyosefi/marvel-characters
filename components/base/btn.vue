<script lang="ts" setup>
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

function getClasses(): string {
  const classes = {
    red: `bg-red-500 border-red-500`,
    blue: "bg-blue-500 border-blue-500",
  };
  return classes[props.color] ?? classes.red;
}
function getOulinedClasses(): string {
  const classes = {
    red: `text-red-500 hover:bg-red-500 hover:text-white`,
    blue: "text-blue-500 hover:bg-blue-500 hover:text-white",
  };
  return classes[props.color] ?? classes.red;
}

function handleClik(): void {
  if (props.to) router.push(props.to);
}
</script>

<template>
  <button
    class="btn border p-1 rounded cursor-pointer flex items-center justify-center transition-all duration-300 hover:brightness-125"
    :class="[
      getClasses(),
      outlined ? `${getOulinedClasses()} bg-transparent` : null,
    ]"
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
