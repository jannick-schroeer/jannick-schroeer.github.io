<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Folder Item"
  },
  rows: {
    type: Number,
    default: 1
  },
  folder: {
    type: Boolean,
    default: true
  }
});

const title = computed(() => props.title);
const rows = computed(() => props.rows);
const folder = computed(() => props.folder);
</script>

<template>
  <div
    class="folder-item"
  >
    <div
      v-for="i in rows"
      :key="i"
      class="spacer"
    >
      <div
        class="folder-icon"
        v-if="folder && i === rows"
      >
        <span>
          -
        </span>
      </div>
    </div>
    <div
    class="folder-name"
    >
      {{title}}
    </div>
  </div>
</template>

<style scoped>
.folder-item {
  display: flex;
}

.spacer {
  flex: 0 0 1.3rem;
  position: relative;
}

.folder-icon {
  border: 0.1rem solid #c0c0c0;
  width: 0.8rem;
  height: 0.8rem;
  background: #ffffff;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.folder-icon span {
  vertical-align: center;
  position: absolute;
  top: -0.2rem;
  left: 0.15rem;
}
</style>