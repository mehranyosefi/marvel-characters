<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    mLeft?: number;
    mTop?: number;
    active: boolean;
    mWidth?: number;
    classes?: string;
  }>(),
  {
    mLeft: 0,
    mTop: 0,
    mWidth: 0,
    classes: "",
  }
);

const menu = useTemplateRef<HTMLElement | null>("menu");
const menuContent = useTemplateRef<HTMLElement | null>("menuContent");

//TODO  reactive style
const style = computed(() => {
  const properties: DOMRect | undefined = menu.value?.getBoundingClientRect();
  menuContent.value?.getBoundingClientRect();
  return {
    width: `${properties?.width + props.mWidth}px`,
    left: `${properties?.left + props.mLeft}px`,
    top: `${properties?.top + properties?.height + props.mTop}px`,
  };
});
</script>

<template>
  <div class="menu-global" ref="menu">
    <slot name="activator"></slot>
    <Teleport to="#teleports">
      <transition name="drop-drawer">
        <div
          v-if="active"
          ref="menuContent"
          :style="style"
          :class="[classes]"
          class="fixed min-h-20 z-20 bg-linear-65 from-gray-500 to-gray-800 shadow-xl rounded-b"
        >
          <slot name="prepend-item"></slot>
          <slot name="items"></slot>
          <slot name="append-item"></slot>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<style scoped></style>
