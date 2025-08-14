<script setup lang="ts">
import Window from "@/components/Window.vue";
import {useModalStore} from "@/stores/modal.ts";
import {storeToRefs} from "pinia";
import {breakpointsVuetifyV3, useBreakpoints} from "@vueuse/core";

const modalStore = useModalStore();
const { aboutMe } = storeToRefs(modalStore);

const breakpoints = useBreakpoints(breakpointsVuetifyV3);
const smAndUp = breakpoints.greaterOrEqual('sm')
</script>

<template>
  <Window
      title="About Me"
      width="1200px"
      height="auto"
      v-model:isOpen="aboutMe"
      icon="aboutme"
  >
    <div
      class="info-container"
    >
      <div
        class="info"
      >
        <div
          class="thick-font"
        >
          Hi, I'm Jannick Schröer
        </div>
        <div>
          I am a Master's student in Computer Science at ETH Zürich, specializing in Visual & Interactive Computing. I'm passionate about Gaussian Splatting, AR/VR, and robotics simulation. My work combines 3D reconstruction, real-time rendering, and simulation-driven system design.
        </div>
        <div>
          - Email: <br v-if="!smAndUp"><a href="mailto:jschroeer@ethz.ch">jschroeer@ethz.ch</a><br>
          - GitHub: <br v-if="!smAndUp"><a href="https://github.com/jannick-schroeer">jannick-schroeer</a><br>
          - LinkedIn: <br v-if="!smAndUp"><a href="https://linkedin.com/in/jannick-schr%C3%B6er">Jannick Schröer</a><br>
        </div>
        <div>
          On this page, you can find information about my projects and my research. Feel free to reach out if you have any questions or collaboration ideas!
        </div>
      </div>
      <div
        class="picture"
        v-if="smAndUp"
      >
        <img
          src="../assets/Sparrhorm.JPG"
          alt="Jannick Schröer"
          style="width: 100%; height: auto;border: 0.1rem solid #c0c0c0;"
        />
      </div>
    </div>
  </Window>
</template>

<style scoped>
.info-container {
  overflow-y: auto;
  display: flex;
  gap: 0.5rem;
  padding: 0.4rem 0.6rem 0.6rem 0.4rem;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 0.5rem;
  flex: 2;
}

.picture {
  flex: 1;
}

</style>