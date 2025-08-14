<script setup lang="ts">
import {computed, onMounted, ref} from "vue";

const props = defineProps({
  title: {
    type: String,
    default: 'Loading Bar',
  },
  percentage: {
    type: Number,
    default: 0,
  },
});

const title = computed(() => {
  return props.title || 'Loading Bar';
});

const percentage = computed(() => {
  return Math.max(0, Math.min(100, props.percentage));
});

const loadingBar = ref<HTMLDivElement | null>(null);
const loadingBarWidthPx = ref(0);

const loadingBarSegmentWidth = computed(() => {
  return loadingBarWidthPx.value > 450 ? loadingBarWidthPx.value * 0.05 : loadingBarWidthPx.value * 0.07;
});

const ceiledPercentage = computed(() => {
  const segmentCount = Math.ceil(loadingBarWidthPx.value / loadingBarSegmentWidth.value);
  console.log(segmentCount);
  // Ensure that the segments are completely filled
  return (Math.ceil(segmentCount * (percentage.value / 100)) * loadingBarSegmentWidth.value) / loadingBarWidthPx.value * 100;
});

function updateLoadingBarWidth() {
  if (loadingBar.value) {
    loadingBarWidthPx.value = loadingBar.value.clientWidth;
  }
}

window.addEventListener('resize', updateLoadingBarWidth);
onMounted(() => {
  updateLoadingBarWidth();
})
</script>

<template>
  <div>
    <div>
      {{title}}
    </div>
    <div
        class="loading-bar"
        ref="loadingBar"
    >
      <div
          class="bar"
          :style="{
          width: `${ceiledPercentage}%`,
          backgroundSize: `${loadingBarSegmentWidth}px 1rem`,
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.loading-bar {
  box-shadow:
      inset -0.1rem -0.1rem 0 #dfdfdf,
      inset 0.1rem 0.1rem 0 #808080;
  height: 1.2rem;
  position: relative;
}

.bar {
  position: absolute;
  top: 0.1rem;
  left: 0;
  right: 0;
  bottom: 0.1rem;
  height: 1rem;
  background-image: linear-gradient(90deg, transparent 0.1rem, #000080 0.1rem);

}
</style>