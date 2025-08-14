<script setup lang="ts">
import {useModalStore} from "@/stores/modal.ts";
import {storeToRefs} from "pinia";
import {breakpointsVuetifyV3, useBreakpoints} from "@vueuse/core";


const breakpoints = useBreakpoints(breakpointsVuetifyV3);
const mdAndUp = breakpoints.greaterOrEqual('md')

const modalStore = useModalStore();
const { aboutMe, skills, projects } = storeToRefs(modalStore);
const { openAboutMe } = modalStore;
</script>

<template>
  <div
    class="bottom-nav"
  >
    <div
      class="bottom-nav-item"
      @click="openAboutMe"
    >
      <img
          src="@/assets/icons/start.png"
          alt="Start Icon"
      />Jannick Schröer
    </div>
    <div
      class="bottom-nav-vertical-separator"
      v-if="mdAndUp"
    ></div>
    <div
      class="bottom-nav-item active"
      v-if="aboutMe && mdAndUp"
    >
      <img
          src="@/assets/icons/aboutme.png"
          alt="About Me Icon"
      />About Me
    </div>
    <div
      v-if="projects && mdAndUp"
      class="bottom-nav-item active"
    >
      <img
          src="@/assets/icons/projects.png"
          alt="Projects Icon"
      />Projects
    </div>
    <div
      v-if="skills && mdAndUp"
      class="bottom-nav-item active"
    >
      <img
          src="@/assets/icons/skills.png"
          alt="Skills Icon"
      />Skills
    </div>
  </div>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  box-shadow:
      inset 0 0.1rem 0 #ffffff,
      inset 0 0.2rem 0 #dfdfdf;
  padding: 0.4rem 0.3rem 0.2rem 0.3rem;
  gap: 0.2rem;
  background: #c0c0c0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.bottom-nav-item {
  background: #c0c0c0;
  box-shadow:
      inset -0.1rem -0.1rem 0 #000000,
      inset 0.1rem 0.1rem 0 #ffffff,
      inset -0.2rem -0.2rem 0 #808080,
      inset 0.2rem 0.2rem 0 #dfdfdf;
  padding: 0.4rem 0.6rem;
  display: flex;
  align-items: center;
}

.bottom-nav-item img {
  width: 1.1rem;
  height: 1.1rem;
  margin-right: 0.3rem;
}

.bottom-nav-vertical-separator {
  width: 0.7rem;
  height: 2.1rem;
  margin: 0 0.3rem;
  box-shadow:
      inset 0.1rem 0 0 #808080,
      inset 0.2rem 0 0 #ffffff,
      inset 0.4rem 0.2rem 0 #c0c0c0,
      inset 0 -0.2rem 0 #c0c0c0,
      inset 0.5rem 0.3rem 0 #ffffff,
      inset -0.1rem -0.3rem 0 #808080;
}

.bottom-nav-item.active {
  box-shadow:
      inset -0.1rem -0.1rem 0 #ffffff,
      inset 0.1rem 0.1rem 0 #000000,
      inset -0.2rem -0.2rem 0 #dfdfdf,
      inset 0.2rem 0.2rem 0 #808080;
  background: #ffffff;
}
</style>