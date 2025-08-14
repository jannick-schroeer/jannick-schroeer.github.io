<script setup lang="ts">
import Window from "@/components/Window.vue";
import {ref} from "vue";
import LoadingBar from "@/components/LoadingBar.vue";
import {useModalStore} from "@/stores/modal.ts";
import {storeToRefs} from "pinia";
import {breakpointsVuetifyV3, useBreakpoints} from "@vueuse/core";

const modalStore = useModalStore();
const { skills } = storeToRefs(modalStore);
const breakpoints = useBreakpoints(breakpointsVuetifyV3);
const smAndUp = breakpoints.greaterOrEqual('sm')
</script>

<template>
  <Window
      title="Skills"
      width="1200px"
      height="auto"
      v-model:isOpen="skills"
      icon="skills"
  >
    <div
      class="skill-container"
    >
      <div
          class="thick-font"
      >
        Skills
      </div>
      <div :class="smAndUp ? 'loadingbars' : 'loadingbar-list'"
      >
        <LoadingBar
            title="Vue.js"
            :percentage="90"
        />
        <LoadingBar
            title="Python"
            :percentage="85"
        />
        <LoadingBar
            title="Gaussian Splatting"
            :percentage="75"
        />
        <LoadingBar
            title="Unity"
            :percentage="65"
        />
        <LoadingBar
            title="ROS 2"
            :percentage="60"
        />
        <LoadingBar
            title="Gazebo"
            :percentage="40"
        />
      </div>
    </div>
  </Window>
</template>

<style scoped>
.skill-container {
  background-color: #c0c0c0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.4rem;
}

.loadingbars {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0.5rem;
  grid-row-gap: 1rem;
}

.loadingbar-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
</style>