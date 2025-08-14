<script setup lang="ts">
import {useModalStore} from "@/stores/modal.ts";

const modalStore = useModalStore();
const { openAboutMe, openProjects, openSkills } = modalStore;
</script>

<template>
<div
  class="desktop-wrapper"
>
  <div
    @click="openAboutMe"
    class="desktop-item"
  >
    <img
        src="@/assets/icons/home_page.png"
        alt="Home Page Icon"
    />About Me
  </div>
  <div
    @click="openProjects"
    class="desktop-item"
  >
    <img
        src="@/assets/icons/project_page.png"
        alt="Projects Icon"
    />Projects
  </div>
  <div
    @click="openSkills"
    class="desktop-item"
  >
    <img
        src="@/assets/icons/skill_page.png"
        alt="Skills Icon"
    />Skills
  </div>
</div>
</template>

<style scoped>
.desktop-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0.5rem;
  color: #fff;
}

.desktop-item {
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.desktop-item img {
  width: 2.5rem;
  height: 2.5rem;
}
</style>