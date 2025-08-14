<script setup lang="ts">
import { walkIdentifiers } from 'vue/compiler-sfc';
import {computed, type PropType} from "vue";
import {breakpointsVuetifyV3, useBreakpoints} from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsVuetifyV3);
const smAndUp = breakpoints.greaterOrEqual('sm')

const props = defineProps({
  title: {
    type: String,
    default: "Window Title"
  },
  width: {
    type: String,
    default: "80%"
  },
  height: {
    type: String,
    default: "80%"
  },
  isOpen: {
    type: Boolean,
    default: true
  },
  icon: {
    type: String,
    default: "" as PropType<'projects' | 'skills' | 'aboutme'>
  }
})

const emit = defineEmits([
  'update:isOpen',
]);

const title = computed(() => props.title);
const width = computed(() => props.width);
const height = computed(() => props.height);
const icon = computed(() => props.icon);

const isOpen = computed({
  get: () => props.isOpen,
  set: (value) => emit('update:isOpen', value)
});

function closeWindow() {
  isOpen.value = false;
}

</script>

<template>
<div
  :class="['window-container', smAndUp ? 'large-window' : 'small-window']"
  v-if="isOpen"
  :style="{
    width: width,
    height: height
  }"
>
  <div
    class="window-header"
  >
    <div
      class="window-title"
    >
      <img
          src="@/assets/icons/aboutme.png"
          alt="About Me Icon"
          v-if="icon === 'aboutme'"
      /><img
        src="@/assets/icons/projects.png"
        alt="Projects Icon"
        v-if="icon === 'projects'"
      /><img
          src="@/assets/icons/skills.png"
          alt="Skills Icon"
          v-if="icon === 'skills'"
      />{{title}}
    </div>

    <div
      class="window-header-cross"
      @click="closeWindow"
    >
      <img
        src="@/assets/icons/cross.png"
        alt="Close Window"
      />
    </div>
  </div>
  <div
    class="window-body"
  >
    <slot></slot>
  </div>
</div>
</template>

<style scoped>
.window-container {
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow:
      inset -0.1rem -0.1rem 0 #000000,
      inset 0.1rem 0.1rem 0 #ffffff,
      inset -0.2rem -0.2rem 0 #808080,
      inset 0.2rem 0.2rem 0 #dfdfdf,
      inset -0.3rem -0.3rem 0 #c0c0c0,
      inset 0.3rem 0.3rem 0 #c0c0c0;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
}

.large-window {
  top: calc(50% - 1.4rem);
  max-height: calc(100vh - 4.8rem);
  max-width: calc(100vw - 2rem);
}

.small-window {
  top: calc(50% - 1.4rem);
  max-height: calc(100vh - 4rem);
  max-width: calc(100vw - 1.2rem);
}

.window-header {
  color: white;
  padding: 0.2rem 0.4rem;
  vertical-align: center;
  background: #0842a8;
  background: linear-gradient(90deg,#000080 0%, #1084d0 100%);
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #c0c0c0;
  flex: 0 0 auto;
}

.window-header > .window-title {
  display: flex;
  align-items: center;
}

.window-header > .window-title img {
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.3rem;
}



.window-header-cross {
  background: #c0c0c0;
  box-shadow:
      inset -0.1rem -0.1rem 0 #000000,
      inset 0.1rem 0.1rem 0 #ffffff,
      inset -0.2rem -0.2rem 0 #808080,
      inset 0.2rem 0.2rem 0 #dfdfdf;
  padding: 0.2rem 0.2rem;
  height: 0.9rem;
  width: 0.9rem;
  flex: 0 0 auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.window-header-cross img {
  width: 0.7rem;
  height: 0.7rem;
  object-fit: contain;
}

.window-body {
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>