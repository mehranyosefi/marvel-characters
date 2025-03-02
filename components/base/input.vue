<script lang="ts" setup>
import { defineProps, shallowRef, withDefaults, type ShallowRef } from "vue";
withDefaults(
  defineProps<{
    type?: string;
    label?: string;
    errorMessage?: string;
  }>(),
  {
    type: "text",
    label: "",
    errorMessage: undefined,
  }
);
const model = defineModel();
const active: ShallowRef<boolean> = shallowRef<boolean>(false);
</script>
<template>
  <div class="input">
    <label class="input__label" v-text="label"></label>
    <div
      class="input__scaffold"
      :class="{
        'input__scaffold--active': active,
        'input__scaffold--invalid': errorMessage,
      }"
    >
      <slot name="prepend"></slot>
      <input
        :type="type"
        v-bind="$attrs"
        v-model="model"
        @focus="active = true"
        @blur="active = false"
      />
      <slot name="append"></slot>
    </div>
    <slot name="error">
      <div v-if="type !== 'radio'" class="input__errormessage">
        <Transition name="fade">
          <span v-if="errorMessage" v-text="errorMessage"></span>
        </Transition>
      </div>
    </slot>
  </div>
</template>

<style scoped>
@reference "@/assets/styles/main.css";
.input {
  .input__scaffold {
    @apply rounded flex items-center justify-center transition duration-300 relative bg-gray-600 p-5 gap-x-3;
    input {
      @apply grow border-none outline-none rounded  py-2 px-2 bg-gray-500;
      &::placeholder {
        @apply text-sm text-white;
      }
    }
    &--active {
      @apply border-gray-600;
    }
    &--invalid {
      @apply border-red-500;
    }
    &__prepend {
      @apply mx-2;
    }
  }
}
</style>
