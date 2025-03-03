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
    classes: "bg-white",
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
    <Teleport to="body">
      <transition name="drop-drawer">
        <div
          v-if="active"
          ref="menuContent"
          :style="style"
          :class="['menu', classes]"
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
