<script setup lang="ts">
import Window from "@/components/Window.vue";
import {ref} from "vue";
import {useModalStore} from "@/stores/modal.ts";
import {storeToRefs} from "pinia";
import {breakpointsVuetifyV3, useBreakpoints} from "@vueuse/core";

const modalStore = useModalStore();
const { projects } = storeToRefs(modalStore);

type projects = 'academic' | 'qed-splatter' | 'surf-leaf' | 'personal' | 'alpsadmin' | 'mongopythonapi' | 'starthack2025';
const currentProject = ref<projects>('academic')

const projectToName: Record<projects, string> = {
  academic: 'Academic Projects',
  'qed-splatter': 'QED-Splatter',
  'surf-leaf': 'Surf-LEAF',
  personal: 'Personal Projects',
  alpsadmin: 'AlpsAdmin',
  mongopythonapi: 'MongoPythonAPI',
  starthack2025: 'StartHack 2025'
};

function openProject(project: projects) {
  currentProject.value = project;
}

const breakpoints = useBreakpoints(breakpointsVuetifyV3);
const smAndUp = breakpoints.greaterOrEqual('sm')
</script>

<template>
  <Window
      title="Projects"
      width="1200px"
      height="800px"
      v-model:isOpen="projects"
      icon="projects"
  >
    <div
      :class="smAndUp ? 'folder-view' : ''"
    >
      <div
        class="quick-actions"
        v-if="smAndUp"
      >
        <div>
          <span class="underline">F</span>ile
        </div>
        <div>
          <span class="underline">E</span>dit
        </div>
        <div>
          <span class="underline">V</span>iew
        </div>
        <div>
          <span class="underline">H</span>elp
        </div>
      </div>
      <div
          class="folder-header"
          v-if="smAndUp"
      >
        All Folders
      </div>
      <div
          class="info-header"
          v-if="smAndUp"
      >
        Contents of [{{ projectToName[currentProject] }}]
      </div>
      <div
          class="folder-container"
          v-if="smAndUp"
      >
        <div
          @click="openProject('academic')"
        >
          <img
            src="@/assets/icons/academic.png"
            alt="Academic Icon"
          /><span :class="currentProject === 'academic' ? 'selected-project' : ''">Academic</span>
        </div>
        <div
          @click="openProject('qed-splatter')"
        >
          ├ <img
            src="@/assets/icons/qed-splatter.png"
            alt="QED-Splatter Icon"
        /><span :class="currentProject === 'qed-splatter' ? 'selected-project' : ''">QED-Splatter</span>
        </div>
        <div
          @click="openProject('surf-leaf')"
        >
          └ <img
            src="@/assets/icons/surfleaf.png"
            alt="SurfLEAF Icon"
        /><span :class="currentProject === 'surf-leaf' ? 'selected-project' : ''">Surf-LEAF</span>
        </div>
        <div
          @click="openProject('personal')"
        >
          <img
              src="@/assets/icons/personal.png"
              alt="Personal Icon"
          /><span :class="currentProject === 'personal' ? 'selected-project' : ''">Personal</span>
        </div>
        <div
          @click="openProject('alpsadmin')"
        >
          ├ <img
            src="@/assets/icons/alpsadmin.png"
            alt="Alpsadmin Icon"
        /><span :class="currentProject === 'alpsadmin' ? 'selected-project' : ''">AlpsAdmin</span>
        </div>
        <div
          @click="openProject('mongopythonapi')"
        >
          ├ <img
            src="@/assets/icons/pymongo.png"
            alt="MongoPython Icon"
        /><span :class="currentProject === 'mongopythonapi' ? 'selected-project' : ''">MongoPythonAPI</span>
        </div>
        <div
          @click="openProject('starthack2025')"
        >
          └ <img
            src="@/assets/icons/starthack.png"
            alt="StartHack Icon"
        /><span :class="currentProject === 'starthack2025' ? 'selected-project' : ''">StartHack 2025</span>
        </div>
      </div>
      <div
        :class="smAndUp ? 'info-container' : 'info-list'"
      >
        <div
          v-if="currentProject === 'academic' || !smAndUp"
        >
          <div
              class="thick-font"
          >
            Academic Projects
          </div>
          <div>
            This section contains my favorite academic projects, including research papers, thesis work, and other scholarly activities.
          </div>
        </div>
        <div
          v-if="currentProject === 'qed-splatter' || !smAndUp"
        >
          <div
            class="project-header"
          >
            <span
              class="thick-font"
            >
              QED-Splatter
            </span>
            <a
                href="https://github.com/leggedrobotics/qed-splatter"
                target="_blank"
            >
              GitHub
            </a>
          </div>
          <div>
            Quick‑Easy‑Depth Splatting – My bachelor thesis project on 3D reconstruction of forest environments using Gaussian Splatting. Achieved top-grade evaluation (6/6) and is now cited in publications and extended by multiple ETH RSL projects.
          </div>
          <div
            class="image-grid"
          >
            <img
              src="@/assets/QED/ROS_RGB_GT.png"
              alt="Ground Truth RGB"
            />
            <img
                src="../assets/QED/ROS_RGB_DN.png"
                alt="DN-Splatter RGB"
            />
            <img
              src="@/assets/QED/ROS_RGB_QED.png"
              alt="QED-Splatter RGB"
            />
            <img
                src="@/assets/QED/ROS_D_GT.png"
                alt="Ground Truth D"
            />
            <div></div>
            <img
                src="../assets/QED/ROS_D_QED.png"
                alt="QED-Splatter D"
            />
            <div>GT</div>
            <div>DN-Splatter</div>
            <div>Ours</div>
          </div>
        </div>
        <div
            v-if="currentProject === 'surf-leaf' || !smAndUp"
        >
          <div
              class="project-header"
          >
            <span
                class="thick-font"
            >
              Surf-LEAF
            </span>
            <a
                href="https://github.com/Soldann/surf-leaf"
                target="_blank"
            >GitHub</a>
            <a
              href="https://www.youtube.com/watch?v=2b1a8g0k3c4"
              target="_blank"
            >Report</a>
          </div>
          <div>
            A group project from ETH CVG that builds on QED‑Splatter, designed as a mesh extraction pipeline from Gaussian‑based reconstruction in urban environments.
          </div>
        </div>
        <div
          v-if="currentProject === 'personal' || !smAndUp"
        >
          <div
              class="thick-font"
          >
            Personal Projects
          </div>
          <div>
            This section contains my personal projects, including hobbies, experiments, and other non-academic work.
          </div>
        </div>
        <div
          v-if="currentProject === 'alpsadmin' || !smAndUp"
        >
          <div
              class="project-header"
          >
            <span
                class="thick-font"
            >
              AlpsAdmin
            </span>
            <a
                href="https://alpsadmin.ch"
                target="_blank"
            >Website</a>
          </div>
          <div>
            AlpsAdmin is a management tool for paragliding schools. It simplifies user management, flight day scheduling, WhatsApp group creation, and process tracking, all in one platform.
          </div>
        </div>
        <div
            v-if="currentProject === 'mongopythonapi' || !smAndUp"
        >
          <div
              class="project-header"
          >
            <span
                class="thick-font"
            >
              MongoPythonAPI
            </span>
            <a
              href="https://github.com/jannick-schroeer/MongoPythonAPI"
              target="_blank"
            >GitHub</a>
          </div>
          <div>
            A Python API for MongoDB, designed to simplify database interactions and provide a more intuitive interface for developers.
          </div>
          <div>
            Used in virtually all of my full-stack projects, including AlpsAdmin, StartHack 2025, and many more.
          </div>
        </div>
        <div
          v-if="currentProject === 'starthack2025' || !smAndUp"
        >
          <div
              class="project-header"
          >
            <span
                class="thick-font"
            >
              StartHack 2025
            </span>
            <a
                href="https://github.com/jannick-schroeer/StartHackARIS2025"
                target="_blank"
            >GitHub</a>
          </div>
          <div>
            A project for StartHack 2025, which I attended with a team from the ARIS Student Club. Our topic was "Syngenta: Crop Monitoring and Analysis in India".
          </div>
          <div>
            We developed PlantPal, a WhatsApp bot that serves as a smart assistant for farmers, providing essential, real-time information to improve agricultural productivity and crop management.
          </div>
        </div>
      </div>
    </div>
  </Window>
</template>

<style scoped>
.underline {
  text-decoration: underline solid #000000 0.1rem;
}

.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr auto;
  grid-column-gap: 0.1rem;
  grid-row-gap: 0.1rem;
}

.image-grid img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.image-grid div {
  text-align: center;
}

.folder-view {
  display: grid;
  height: 100%;
  box-sizing: border-box;
  grid-template-columns: minmax(390px, 1fr) 2fr;
  grid-template-rows: min-content min-content minmax(200px, 1fr);
  grid-column-gap: 0.2rem;
  grid-row-gap: 0.2rem;
  padding: 0.2rem;
  background: #c0c0c0;
}

.quick-actions {
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  gap: 0.8rem;
  padding: 0 0.4rem;
}
.folder-header { grid-area: 2 / 1 / 3 / 2; }
.info-header { grid-area: 2 / 2 / 3 / 3; }

.folder-header, .info-header {
  padding: 0.2rem 0.4rem;
  box-shadow:
      inset -0.1rem -0.1rem 0 #dfdfdf,
      inset 0.1rem 0.1rem 0 #808080;
}

.folder-container {
  padding: 0.4rem 0.2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  line-height: 1.3rem;
}

.folder-container > div {
  padding: 0 0.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.folder-container > div:hover {
  background: #dfdfdf;
  box-shadow: inset -0.1rem -0.1rem 0 #c0c0c0;
}

.folder-container img {
  width: 0.9rem;
  height: 0.9rem;
  margin: 0 0.2rem;
}

.folder-container span {
  padding: 0 0.2rem;
}

.selected-project {
  background: #000080;
  color: #ffffff;
}

.info-container {
  grid-area: 3 / 2 / 4 / 3;
  padding: 0.2rem 0.6rem;
  overflow-y: auto;
}

.info-list {
  display: flex;
  flex-direction: column;
  padding: 0.1rem 0.4rem;
  gap: 0.5rem
}

.info-container > div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-list > div {
  border-bottom: 0.1rem solid #c0c0c0;
}

.folder-container, .info-container {
  background: #ffffff;
  box-shadow:
      inset -0.1rem -0.1rem 0 #ffffff,
      inset 0.1rem 0.1rem 0 #808080,
      inset -0.2rem -0.2rem 0 #dfdfdf,
      inset 0.2rem 0.2rem 0 #000000;
}

.info-container > div .project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-list > div .project-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 0.6rem;
}

.info-list > div .project-header .thick-font {
  width: 100%;
}

</style>